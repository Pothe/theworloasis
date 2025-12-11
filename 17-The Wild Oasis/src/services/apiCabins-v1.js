import supabase, { supabaseUrl } from "./supabase";

export async function createEditCabin(newCabin, id) {
  // Detect if image is already a URL (editing)

  const hasImagePath = newCabin.image?.startsWith(supabaseUrl);

  // Generate image name
  const imageName = `${Date.now()}-${newCabin.image?.name}`.replaceAll("/", "");

  // Decide image final path
  const imagePath = hasImagePath
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  let query;
  if (!id) {
    // INSERT needs an array
    query = supabase
      .from("cabins")
      .insert([{ ...newCabin, image: imagePath }]);
  } else {
    // UPDATE needs an object (NOT array)
    query = supabase
      .from("cabins")
      .update({ ...newCabin, image: imagePath })
      .eq("id", id);
  }

  // Get the created or updated cabin
  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cannot save cabin!");
  }

  // Upload image only if it's a new image
  if (!hasImagePath) {
    const { error: uploadError } = await supabase.storage
      .from("cabins-images")
      .upload(imageName, newCabin.image, {
        upsert: true,
      });

    if (uploadError) {
      console.error(uploadError);

      // Rollback cabin record if upload fails
      await supabase.from("cabins").delete().eq("id", data.id);

      throw new Error("Cannot upload image!");
    }
  }

  return data;
}
