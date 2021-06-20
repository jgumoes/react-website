import './AddressFormContainer.css'
import FormElement from '../FormElement/FormElement'

const AddressFormContainer = ({changeHandler, formData}) => {
  const AddressDetails = formData.AddressDetails
  // console.log(AddressDetails)
  return(
    <div className="address-container">
      <FormElement text="Address line 1" element="AddressLine1" elementValue={AddressDetails.AddressLine1} onChangeHandler={changeHandler} />

      <FormElement text="Address line 2" element="AddressLine2" elementValue={AddressDetails.AddressLine} onChangeHandler={changeHandler} required={false} />

      <FormElement text="City/Town" element="CityTown" elementValue={AddressDetails.CityTown} onChangeHandler={changeHandler} />

      <FormElement text="State/County" element="StateCounty" elementValue={AddressDetails.StateCounty} onChangeHandler={changeHandler} />

      <FormElement text="Postcode" element="Postcode" elementValue={AddressDetails.Postcode} onChangeHandler={changeHandler} />

      <FormElement text="Country" element="Country" elementValue={AddressDetails.Country} onChangeHandler={changeHandler} />
      
    </div>
  )
}

export default AddressFormContainer