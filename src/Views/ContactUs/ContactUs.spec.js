import { shallow, mount } from "enzyme";
import ContactUs from './ContactUs'

describe('ContactUs', () => {
  let container
  beforeEach(() => (
    container = mount(<ContactUs />)
  ));
  it('should contain a FullName field', () => {
    const field = container.find('.form-element#FullName')
    expect(field.find('input')).toHaveLength(1)
  });

  it('should contain an EmailAddress field', () => {
    const field = container.find('.form-element#EmailAddress')
    expect(field.find('input')).toHaveLength(1)
  });

  it('should contain one PhoneNumber field', () => {
    expect(container.find('input#PhoneNumber-01')).toHaveLength(1)
  });

  describe('AddPhoneNumber button', () => {
    let button

    beforeEach(() => (
      button = container.find('button#add-phone-number')
    ));
    it('should exist', () => {
      expect(button.exists()).toBe(true)
    });

    it('should create another PhoneNumber field when clicked', () => {
      button.simulate('click')
      expect(container.find('input#PhoneNumber-02')).toHaveLength(1)
    })

    it.todo("shouldn't create another PhoneNumber field if there are unfilled PhoneNumbers")
    
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
});