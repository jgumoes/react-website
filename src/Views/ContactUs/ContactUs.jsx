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
import ValidIcon from '../../Resources/Icon_Valid.svg'
import FormElement from '../../components/FormElement/FormElement'

const PhoneNumber = ({ N, onChange, formData }) => {
  const i = N-1
  console.log(formData.PhoneNumbers[i])
    N = N.length === 1 ? "0"+N : N
    const objectID = `PhoneNumber-${N}`
    return(
      <>
        <FormElement text={`Phone number ${N}`} element={objectID} elementValue={formData.PhoneNumbers[i] || ""} onChangeHandler={onChange} required={false} />
      </>
  )
}

class ContactUs extends React.Component {
  constructor(){
    super()
    this.state = {
      errors: {},
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
    let newErrors = {}
    let obj
    sendContactUsForm(this.state.formData)
      .then((res) => {
        this.awaitingFormResponse = false
        console.log("res", res)
        if (res.Status === "1"){
          this.setState({ showFormSuccess: true })
        }
        else {
          console.log(res.Errors)
          for (obj of res.Errors){
            console.log(obj)
            let message = obj.MessageCode.replaceAll("_", " ")
            console.log(message)
            newErrors[obj.FieldName] = message
          }
        }
        this.setState({ errors: newErrors})
        console.log("state: ", this.state)
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
    const errorsObj = this.state.errors
    console.log("showFormSuccess", this.state.showFormSuccess)
    if (this.state.showFormSuccess) {
      return(
        <div className="contact-page-container">
          <div className="form-container">
            <h3 className="static-text">Contact us</h3>
            <p className="static-text"><b>{ContactUsStatic["sub-header"]}</b></p>
              <div className="message-sent">
                <div className="tick-container">
                  <img src={ValidIcon} alt="" />
                </div>
                <h4>Your message has been sent</h4>
                <p className="static-text">We will be in contact with you within 24 hours</p>
            </div>
          </div>
        </div>
      )
    }
    return(
      <div className="contact-page-container">
        <div className="form-container">
          <h3 className="static-text">Contact us</h3>
          <p className="static-text"><b>{ContactUsStatic["sub-header"]}</b></p>
          <form className="contact-us-form" onSubmit={this.handleOnSubmit} >
            <div className="first-line">
                <FormElement text="Full name" element={"FullName"} elementValue={formData.FullName} onChangeHandler={this.onChangeHandler} />
              
                <FormElement text="Email address" element={"EmailAddress"} elementValue={formData.EmailAddress} onChangeHandler={this.onChangeHandler} error={errorsObj.EmailAddress} />
            </div>

            {this.state.numberList.map((n, i) => <PhoneNumber N={String(n+1)} key={i} onChange={this.phoneChangeHandler} formData={formData} />)}

            <LightButton className="form-element" text="Add new phone number" ID="add-phone-number" clickHandler={this.addPhoneNumber} />

            <FormElement inputType="textarea" text="Message" element="Message" elementValue={formData.Message} onChangeHandler={this.onChangeHandler} subText={<span className="sub-label">Maximum text length is 500 characters</span>} />

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
          </div>
      </div>
    )
  }
}

export default ContactUs