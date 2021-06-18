import './AddressFormContainer.css'

const AddressFormContainer = ({changeHandler, formData}) => {
  const AddressDetails = formData.AddressDetails
  console.log(AddressDetails)
  return(
    <div className="address-container">
      <label className="form-element address-top" id="AddressLine1" htmlFor="AddressLine1">Address line 1<br/>
        <input type="text" id="AddressLine1" name="AddressLine1" onChange={(event) => changeHandler(event)} value={AddressDetails.AddressLine1} required></input>
      </label>

      <label className="form-element address-top" id="AddressLine2" htmlFor="AddressLine2">Address line 2 <i className="sub-label">- optional</i><br/>
        <input type="text" id="AddressLine2" name="AddressLine2" onChange={changeHandler} value={AddressDetails.AddressLine2} ></input>
      </label>

      <label className="form-element" id="CityTown" htmlFor="CityTown">City/Town<br/>
        <input type="text" id="CityTown" name="CityTown" onChange={changeHandler} value={AddressDetails.CityTown} required></input>
      </label>

      <label className="form-element" id="StateCounty" htmlFor="StateCounty">State/County<br/>
        <input type="text" id="StateCounty" name="StateCounty" onChange={changeHandler} value={AddressDetails.StateCounty} required></input>
      </label>

      <label className="form-element" id="Postcode" htmlFor="Postcode">Postcode<br/>
        <input type="text" id="Postcode" name="Postcode" onChange={changeHandler} value={AddressDetails.Postcode} required></input>
      </label>

      <label className="form-element" id="Country" htmlFor="Country">Country<br/>
        <input type="text" id="Country" name="Country" onChange={changeHandler} value={AddressDetails.Country} required></input>
      </label>
      
    </div>
  )
}

export default AddressFormContainer