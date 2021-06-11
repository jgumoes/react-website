import React from 'react'
import Swiper from 'react-id-swiper';
import getCarouselData from "../../req/FetchRequests";
import './Carousel.css'

const SwiperElement = (props) => {
  const { data } = props
  const { Title, Subtitle, ImageUrl } = data
  console.log(Title)
  return(
    <div className="swiper-element" style={{ backgroundImage: `url(${ImageUrl})`, position: 'center'}}>
        <h1 className="h">{ Title }</h1>
        <h3 className="h">{Subtitle}</h3>
        <div className="button">
          <b>Contact Us</b>
        </div>
    </div>
  )
}

const Carousel = (props) => {
  const {fetchData} = props
  console.log(typeof(fetchData))
  const carouselData = fetchData()
  const carouselParts = carouselData["Details"]
  console.log(carouselParts[0])

  return(
    <div className="carousel-container">
      <SwiperElement data={carouselParts[0]} />
    </div>
  )
}

Carousel.defaultProps = {
  fetchData: getCarouselData
}

export default Carousel