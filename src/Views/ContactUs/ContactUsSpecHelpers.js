
export const modelFormData = {
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

const FillFormData = (container, formData = modelFormData) => {
  console.log(container)
  let key
  for (key in formData){
    if (key === "AddressDetails"){
      FillFormData(container, formData.AddressDetails)
    }
    else{
      const element = container.find(`.form-element#${key}`)
      element.simulate('change', { target: { name: key, value: formData[key] }})
    }
  }
}

export default FillFormData