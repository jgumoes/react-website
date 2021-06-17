import React from 'react'
import AddressFormContainer from '../../components/AddressFormContainer/AddressFormContainer'
import LightButton from '../../components/LightButton/LightButton'
import './ContactUs.css'

const PhoneNumber = ({ N }) => {
    N = N.length === 1 ? "0"+N : N
    const objectID = `PhoneNumber-${N}`
    return(
      <div className="form-element phone-number">
        <label htmlFor={objectID}>Phone number {N} <i className="sub-label">- optional</i></label><br/>
        <input type="text" id={objectID} name={objectID}></input>
      </div>
  )
}

class ContactUs extends React.Component {
  constructor(){
    super()
    this.state = {
      numberList: [0],
      showAddress: false,
      formData: {
        "FullName": "",
        "EmailAddress": "",
        "PhoneNumbers": [
          ""
        ],
        "Message": "",
        "bIncludeAddressDetails": false,
        "AddressDetails": {
          "AddressLine1": "",
          "AddressLine2": "",
          "CityTown": "",
          "StateCounty": "",
          "Postcode": "",
          "Country": ""
        }
      }
    }
  }

  addPhoneNumber = () => {
    let numberList = this.state.numberList
    numberList.push(numberList.length)
    this.setState({ numberList: numberList})
  }

  onChangeHandler = (event) => {
    // console.log(event)
    this.setForm(event.target.name, event.target.value)
  }

  checkboxChangeHandler = (event) => {
    // console.log('click')
    this.setForm(event.target.name, event.target.checked)
  }
  
  phoneChangeHandler = (event) => {
  }

  setForm = (targetName, targetData) => {
    // console.log(targetName, targetData)
    let newFormData = this.state.formData
    newFormData[targetName] = targetData
    this.setState({formData: newFormData})
  }
  
  render(){
    var checkboxState = this.state.formData.bIncludeAddressDetails
    return(
      <form>
        <div className="first-line">
        <label className="form-element" id="FullName" htmlFor="FullName">Full name<br/>
          <input type="text" id="FullName" name="FullName" onChange={this.onChangeHandler} required></input>
        </label>
        
        <label className="form-element" id="EmailAddress" htmlFor="EmailAddress">Email address<br/>
          <input type="text" id="EmailAddress" name="EmailAddress" required></input>
        </label>
        </div>

        {this.state.numberList.map((n, i) => <PhoneNumber N={String(n+1)} key={i}/>)}

        <LightButton className="form-element" text="Add new phone number" ID="add-phone-number" clickHandler={this.addPhoneNumber} />

        <div className="form-element" id="Message">
          <label htmlFor="Message">Message <span className="sub-label"> Maximum text length is 500 characters</span></label><br/>
          <textarea type="textArea" id="Message" name="Message" required></textarea>
        </div>

        <div className="form-element" id="bIncludeAddressDetails">
          <input type="checkbox" id="bIncludeAddressDetails" name="bIncludeAddressDetails" onChange={this.checkboxChangeHandler} checked={checkboxState} />
          <label htmlFor="bIncludeAddressDetails">Add address details</label>
        </div>
        {checkboxState === true &&
          <AddressFormContainer changeHandler={this.onChangeHandler} />
        }
      </form>
    )
  }
}

export default ContactUs