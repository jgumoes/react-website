// fetch requests are handled in this file to make testing easier

const getCarouselData = () => {
  let response = 
  {
    "Details": [
      {
        "Title": "Lorem ipsum dolor",
        "Subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "ImageUrl": "https://interview-assessment.api.avamae.co.uk/Images/swiper_image_1.jpg"
      },
      {
        "Title": "Ut enim blandit",
        "Subtitle": "Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare",
        "ImageUrl": "https://interview-assessment.api.avamae.co.uk/Images/swiper_image_2.jpg"
      },
      {
        "Title": "Quisque non tellus",
        "Subtitle": "Quem vide tincidunt pri ei, id mea omnium denique",
        "ImageUrl": "https://interview-assessment.api.avamae.co.uk/Images/swiper_image_3.jpg"
      }
    ],
    "Status": "1",
    "Errors": []
  }

  return response
}

export default getCarouselData