import styled from "styled-components";

import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm} from "react-hook-form";
import { EditCabin } from "./useEdite";
import { createCabin } from "./useCreateCabin";
import { useContext } from "react";
import { ModalContext } from "../../ui/Modal";



const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

const Box = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  background: ${({ src }) => `url("${src}") center/cover no-repeat`};

`;
function CreateCabinForm({cabinEdit={},onCloseModal}) {  // edit update value in input by react hook form
const {close } = useContext(ModalContext)
  const {id:cabinEditId, ...values}= cabinEdit
  console.log("value",values)
  
  console.log("from create from cabin", cabinEditId)
  const isEditsession = Boolean(cabinEditId)
 

  const {register,handleSubmit,getValues,reset,formState}=useForm({   
    defaultValues:{
      ...values
    }
  } )  
  const {errors}= formState

 const {isCreating,iscreateCabin} = createCabin();
 const {isEditing,isupdateCabin}= EditCabin()
 

// insert data to database 
  
  


  const onsubmit=(data)=>{  
    const image = typeof data.image==="string"?data.image : data.image[0]

    if(isEditsession){
      isupdateCabin({newDataCabin:{ ...data, image:image},id:cabinEditId})    
      reset()
      //  onCloseModal?.()
      close?.()

    }else{
      iscreateCabin({...data,image:image})
      reset()
      close?.()

    }
  }

  

  function onError(errors){
    console.log(errors)
  }
  return (
    <Form onSubmit={handleSubmit(onsubmit,onError)}>
      <FormRow>
        <Label htmlFor="name">Cabin name</Label>
        <Input type="text" id="name" {...register("name",{required:"this can't be blank"})}/>
        {errors?.name?.message && <Error>{errors.name.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="maxCapacity">Maximum capacity</Label>
        <Input disabled={isEditsession? isEditing: isCreating} type="number" id="maxCapacity" {...register("maxCapacity",{
          required:"this field can not be empty",
          min:{
            value:1,
            message:"at least 1 letters in namebox"
          }

        })} />
          {errors?.maxCapacity?.message && <Error>{errors.maxCapacity.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="regularPrice">Regular price</Label>
        <Input   disabled={isEditsession? isEditing: isCreating} type="number" id="regularPrice" {...register("regularPrice",{required:"this can be blank",min:{
          value:1,
          message:"at least 1 in the field"
        }})}
         />
            {errors?.regularPrice?.message && <Error>{errors.regularPrice.message}</Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="discount">Discount</Label>
        <Input  disabled={isEditsession? isEditing: isCreating}  type="number" id="discount" defaultValue={0} {...register("discount",{required:"this field can not be blank",validate:(value)=> Number(value)  <= Number(getValues().regularPrice) || "Discount should be less than regular price"})} />
     {errors?.discount?.message && <Error>{` ${errors.discount.message}`}  </Error>}
      </FormRow>

      <FormRow>
        <Label htmlFor="description">Description for website</Label>
        <Textarea disabled={isEditsession? isEditing: isCreating}  type="number" id="description" defaultValue="" {...register("description",)} />
      </FormRow>

      <FormRow>
        <Label htmlFor="image">Cabin photo</Label>
      <FileInput disabled={isEditsession? isEditing: isCreating}  id="image" type="file" accept="image/*" {...register("image")} />
       
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" bg="danger" size="small" onClick={()=>close?.()}>
          Cancel
        </Button>
        <Button disabled={isCreating} bg="primary" size="small">{isEditsession?"Save Cabin":"Add CABIN"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
