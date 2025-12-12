import supabase, { supabaseUrl } from "./supabase";
export async function getCabin(){
    let { data, error } = await supabase
  .from('cabins')
  .select('*')

  if(error){
    console.error(error)
    throw new Error("Cabins could not be loaded")
  }
  return data
}

export async function deleteByid(id){
  let query = supabase.from("cabins")
  const {data, error } = await query
  .delete()
  .eq('id', id)
  if(error){
    console.error(error)
    throw new Error("លុបមិនបានសំរេចទេ! សូមព្យាយាមម្តងទៀត");
    
  }
  return data
}

export async function createEditCabin(newCabin,id){
 
  //hasImagePath?newCabin.image: 
 //const hasImagePath = typeof  newCabin.image ==="string" && newCabin.image.startsWith(supabaseUrl);
  // get name of image 
  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll("/","")
  // to get image url 
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`

  //https://pkkudhwvfssawcdjzwpe.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg

//  if(!id)
  // const { data, error } = await supabase
  // .from('cabins')
  // create cabin/edit
   let query =  supabase.from("cabins")
  //create

    // query = query.insert([{...newCabin, image: imagePath}]);
    if(!id)
   query=query.insert([{...newCabin, image:imagePath}]);
  // edite/ update
 if(id)
    query=query.update({...newCabin, image:imagePath}).eq('id', id)
    

  const {data,error}= await query.select().single()
  console.log("from api ",data)

  // .insert([{...newCabin, image: imagePath}]).select().single()
  
   if(error){
    console.error(error)
    throw new Error("Can not add data ! Please contact to admin");    
  }
  // upload image to database 

//  const {error:storeError} = await supabase.storage.from('cabins-images').upload(imageName,newCabin.image, {
//   upsert: true,
// })
 let TableImage = supabase.storage.from("cabins-images")
 TableImage.upload(imageName,newCabin.image, {
   upsert: true,
 })
 const {error:storeError} = TableImage
  if(storeError){
   if(storeError){
    console.error(storeError)
    throw new Error("can not upload image");    
  }
// await supabase
//   .from('cabins')
query
  .delete()
  .eq('id',data.id)
}

  return data
}


// export async function UpdateCabinByid(newCabindata,id){
// console.log("update ", newCabindata, "ID:", id);
//   //  const imageName = `${Math.random()}-${newCabin.image?.name}`.replaceAll("/","")
//   // to get image url 
//   // const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`
//   const { data, error } = await supabase
//   .from('cabins')
//   .update({...newCabindata })
//   .eq('id', id).select().single()
//   if(error){ console.error(error.message)
//      throw new Error("Can not update data")
//     }

//     console.log("from api", data)
//     // return data
  
// }