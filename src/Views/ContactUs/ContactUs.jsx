import React from 'react'
import LightButton from '../../components/LightButton/LightButton'
import './ContactUs.css'

const PhoneNumber = ({ N }) => {
    N = N.length === 1 ? "0"+N : N
    const objectID = `PhoneNumber-${N}`
    return(
      <div className="form-element phone-number">
        <label>Phone number {N} <i className="sub-label">- optional</i></label><br/>
        <input type="text" id={objectID} name={objectID}></input>
      </div>
  )
}

class ContactUs extends React.Component {
  constructor(){
    super()
    this.state = {
      numberList: [0]
    }
  }


  addPhoneNumber = () => {
    console.log('click')
    let numberList = this.state.numberList
    numberList.push(numberList.length)
    this.setState({ numberList: numberList})
  }
  
  render(){
    return(
      <form>
        <div className="form-element" id="FullName">
          <label for="FullName">Full name</label><br/>
          <input type="text" id="FullName" name="FullName" required></input>
        </div>
        <div className="form-element" id="EmailAddress">
          <label for="EmailAddress">Email address</label><br/>
          <input type="text" id="EmailAddress" name="EmailAddress" required></input>
        </div>
        {/* <this.PhoneNumber N="1" /> */}
        {this.state.numberList.map((n, i) => <PhoneNumber N={String(n+1)} key={i}/>)}
        <div className="form-element" id="add-phone-number">
          <LightButton text="Add new phone number" ID="add-phone-number" clickHandler={this.addPhoneNumber} />
        </div>
      </form>
    )
  }
}

export default ContactUs