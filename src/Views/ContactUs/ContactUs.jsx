import React from 'react'
import AddressFormContainer from '../../components/AddressFormContainer/AddressFormContainer'
import LightButton from '../../components/LightButton/LightButton'
import '../../components/BlueButton/BlueButton.css'
import './ContactUs.css'
import '../StaticText.css'
import './CustomCheckbox.css'
import SubmitIcon from '../../Resources/Icon_Submit.svg'
import ContactUsStatic from '../../Resources/ContactUs.json'
import sendContactUsForm from './ContactUsFetch.js'

const PhoneNumber = ({ N, onChange, formData }) => {
  const i = N-1
  console.log(formData.PhoneNumbers[i])
    N = N.length === 1 ? "0"+N : N
    const objectID = `PhoneNumber-${N}`
    return(
      <div className="form-element phone-number">
        <label htmlFor={objectID}>Phone number {N} <i className="sub-label">- optional</i></label><br/>
        <input type="text" id={objectID} name={objectID} onChange={onChange} maxLength="20" value={formData.PhoneNumbers[i] || ""} ></input>
      </div>
  )
}

class ContactUs extends React.Component {
  constructor(){
    super()
    this.state = {
      awaitingFormResponse: false,
      showFormSuccess: false,
      numberList: [0],
      showAddress: false,
      formData: {
        "FullName": "",
        "EmailAddress": "",
        "PhoneNumbers": [],
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
    let phoneNumbers = this.state.formData.PhoneNumbers
    console.log(phoneNumbers, numberList)
    if(phoneNumbers.length === numberList.length){
      numberList.push(numberList.length)
      this.setState({ numberList: numberList})
    }
  }

  onChangeHandler = (event) => {
    console.log(event.target.name, event.target.value)
    this.setForm(event.target.name, event.target.value)
  }

  addressChangeHandler = (event) => {
    let AddressDetails = this.state.formData.AddressDetails
    AddressDetails[event.target.name] = event.target.value
    // console.log(event.target.name, event.target.value)
    this.setForm("AddressDetails", AddressDetails)
  }

  checkboxChangeHandler = (event) => {
    // console.log('click')
    // this.setForm(event.target.name, event.target.checked)
    this.setForm("bIncludeAddressDetails", !this.state.formData.bIncludeAddressDetails)
  }
  
  phoneChangeHandler = (event) => {
    const targetName = event.target.name
    const N = /(?:-0)(?<N>\S+)/g.exec(targetName).groups.N-1
    let phoneNumbers = this.state.formData.PhoneNumbers
    console.log(phoneNumbers)
    const value = event.target.value.replace(" ", "")
    if( value.match(/[^0-9]/g) === null && value.length !== 0){
      phoneNumbers[N] = value
      this.setForm(targetName, phoneNumbers)
    }
    this.forceUpdate()
  }

  handleOnSubmit = (event) => {
    console.log("submit button")
    event.preventDefault()
    // todo: add a function that reads all the form fields (incase of autofill)
    // const response = sendContactUsForm(this.state.formData)
    // console.log(response)
    let response
    sendContactUsForm(this.state.formData)
      .then((res) => {
        this.awaitingFormResponse = false
        console.log("res", res)
        if (res.Status === "1"){
          this.setState({ showFormSuccess: true })
        }
        else {
          // fill error messages
        }
      })
  }

  setForm = (targetName, targetData) => {
    // console.log(targetName, targetData)
    let newFormData = this.state.formData
    newFormData[targetName] = targetData
    console.log(newFormData)
    this.setState({formData: newFormData})
  }
  
  render(){
    var checkboxState = this.state.formData.bIncludeAddressDetails
    const formData = this.state.formData
    console.log("showFormSuccess", this.state.showFormSuccess)
    if (this.state.showFormSuccess) {
      return(
        <div className="contact-page-container">
          good job, buddy!
        </div>
      )
    }
    return(
      <div className="contact-page-container">
        <h3 className="static-text">Contact us</h3>
        <p className="static-text"><b>{ContactUsStatic["sub-header"]}</b></p>
        <form className="contact-us-form" onSubmit={this.handleOnSubmit} >
          <div className="first-line">
            <div className="form-element">
              <label className="form-element" id="FullName" htmlFor="FullName">Full name</label>.
              <input type="text" id="FullName" name="FullName" onChange={this.onChangeHandler} value={formData.FullName} required></input>
            </div>
            
            <div className="form-element">
              <label className="form-element" id="EmailAddress" htmlFor="EmailAddress" >Email address</label>
              <input type="text" id="EmailAddress" name="EmailAddress" onChange={this.onChangeHandler} value={formData.EmailAddress} required></input>
            </div>
          </div>

          {this.state.numberList.map((n, i) => <PhoneNumber N={String(n+1)} key={i} onChange={this.phoneChangeHandler} formData={formData} />)}

          <LightButton className="form-element" text="Add new phone number" ID="add-phone-number" clickHandler={this.addPhoneNumber} />

          <div className="form-element" id="Message">
            <label htmlFor="Message">Message <span className="sub-label">Maximum text length is 500 characters</span></label><br/>
            <textarea type="textArea" id="Message" name="Message" maxLength="500" onChange={this.onChangeHandler} required></textarea>
          </div>

          <div className="form-element" id="bIncludeAddressDetails">
            <input type="checkbox" id="bIncludeAddressDetails" name="bIncludeAddressDetails" onChange={this.checkboxChangeHandler} checked={checkboxState} />
            <div type="button" className="custom-checkbox" onClick={this.checkboxChangeHandler}><div className="custom-checkmark"></div></div>
            <label htmlFor="bIncludeAddressDetails" onClick={this.checkboxChangeHandler}>Add address details</label>
          </div>
          {checkboxState === true &&
            <AddressFormContainer changeHandler={this.addressChangeHandler} formData={formData} />
          }
          <button type="submit" className="form-element blue-button" >
            <img src={SubmitIcon} alt="" />
            <span>Submit</span>
          </button>
        </form>
        {/* <img src={ImgContact} alt="" /> */}
      </div>
    )
  }
}

export default ContactUs