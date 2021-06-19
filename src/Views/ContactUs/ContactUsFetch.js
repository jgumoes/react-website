// handles the fetch post request for the ContactUs form.
// seperated into a seperate module to make testing easier

const sendContactUsForm = async (formData) => {
  let responseData
  await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/contact-us/submit", {
      method: 'POST',
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/json-patch+json'
      },
      body: JSON.stringify(formData)
    })
    .then((res) => res.json())
    .then((data) => responseData = data)
  return responseData
}

export default sendContactUsForm