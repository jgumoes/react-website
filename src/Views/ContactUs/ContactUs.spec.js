import { shallow, mount } from "enzyme";
import ContactUs from './ContactUs'

const modelFormData = {
  "FullName": "Testy Testworth",
  "EmailAddress": "t.testworth@notreal.net",
  "PhoneNumbers": [
    "0118 999 881 999 119 7253"
  ],
  "Message": "Test post pls ignore",
  "bIncludeAddressDetails": true,
  "AddressDetails": {
    "AddressLine1": "1313 Mockingbird Lane",
    "AddressLine2": "",
    "CityTown": "Mockingbird Heights",
    "StateCounty": "Transylvania",
    "Postcode": "010101",
    "Country": "Romania"
  }
}
describe('ContactUs', () => {
  let container
  beforeEach(() => (
    container = mount(<ContactUs />)
  ));
  it('should contain a FullName field', () => {
    const field = container.find('.form-element #FullName')
    expect(field.find('input')).toHaveLength(1)
  });

  it('should contain an EmailAddress field', () => {
    const field = container.find('.form-element #EmailAddress')
    expect(field.find('input')).toHaveLength(1)
  });

  it('should contain one PhoneNumber field', () => {
    expect(container.find('input#PhoneNumber-01')).toHaveLength(1)
  });


  const phoneNumberEvent = { target: { value: '0118 999 881 999 119 7253', name: "PhoneNumber-01"}}
  it('should add a phone number to the form data', () => {
    const phoneNumber = container.find("input[type='text']#PhoneNumber-01")
    phoneNumber.simulate('change', phoneNumberEvent)
    console.log(container.state('formData'))
    expect(container.state('formData')["PhoneNumbers"]).toContain('0118 999 881 999 119 7253')
  })

  describe('AddPhoneNumber button', () => {
    let button
    let phoneNumber1

    beforeEach(() => {
      button = container.find('button#add-phone-number');
      phoneNumber1 = container.find("input[type='text']#PhoneNumber-01");
    });

    it('should exist', () => {
      expect(button.exists()).toBe(true)
    });

    it('should create another PhoneNumber field when clicked', () => {
      phoneNumber1.simulate('change', phoneNumberEvent)
      button.simulate('click')
      expect(container.find('input#PhoneNumber-02')).toHaveLength(1)
    })

    it("shouldn't create another PhoneNumber field if there are unfilled PhoneNumbers", () => {
      button.simulate('click')
      expect(container.find('input#PhoneNumber-02')).toHaveLength(0)
    })
    
  });

  it('should contain a Message field', () => {
    expect(container.find('textarea#Message')).toHaveLength(1)
  });

  it('should contain a checkbox to add address details', () => {
    expect(container.find("input[type='checkbox']#bIncludeAddressDetails")).toHaveLength(1)
  });
  
  it("shouldn't render the address container by default", () => {
    expect(container.find(".address-container")).toHaveLength(0)
  })
  describe('Addresses', () => {
    const checkboxID = "bIncludeAddressDetails"
    let checkbox
    beforeEach(() => (
      checkbox = container.find("input[type='checkbox']#bIncludeAddressDetails"),
      checkbox.simulate('change', { target: { name: checkboxID, checked: true}})
    ));

    it("clicking the checkbox should render the container", () => {
      expect(container.find(".address-container")).toHaveLength(1)
    })
  });

  describe('Submit button', () => {
    it('should exist', () => {
      expect(container.find("button[type='submit']")).toHaveLength(1)
    });

    it.todo("should send a form through a form-sending function")
    
  });
});