import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import { useEditSetting } from './useEditSetting';
import { useUpdateSetting } from './useSetting';
import Spinner from '../../ui/Spinner'





function UpdateSettingsForm() {
  const {getDataSetting:{minBooklength,maxBookinglength,maxGuestPerBooking,breakfastPrice} ={}} = useUpdateSetting()

 const {isUpdateLoading,isSettingUpdated}=useEditSetting()
 if(isUpdateLoading) return <Spinner/>

function handleUpdate(e,field){
  const {value} =e.target
  if(!value) return 
  isSettingUpdated({[field]:value})
}

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input  disabled={isUpdateLoading}type='number' id='min-nights' defaultValue={minBooklength}  onBlur={e=>handleUpdate(e,"minBooklength")} />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input disabled={isUpdateLoading} type='number' id='max-nights' defaultValue={maxBookinglength} onBlur={e=>handleUpdate(e,"maxBookinglength")} />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input disabled={isUpdateLoading} type='number' id='max-guests' defaultValue={maxGuestPerBooking} onBlur={e=>handleUpdate(e,"maxGuestPerBooking")} />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input  disabled={isUpdateLoading} type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur={e=>handleUpdate(e,"breakfastPrice")}/>
      </FormRow>
     </Form>
  );
}

export default UpdateSettingsForm;
