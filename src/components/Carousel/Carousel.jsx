import React, { useEffect, useState } from 'react'
import Swiper from 'react-id-swiper';
import './Carousel.css'

const SwiperElement = (data) => {
  console.log("SwiperElement", data)
  return(
    <div className="swiper-element" style={{ backgroundImage: `url(${data["ImageUrl"]})`, position: 'center'}}>
        <h1 className="h">{ data["Title"] }</h1>
        <h3 className="h">{data["Subtitle"]}</h3>
        <div className="button">
          <b>Contact Us</b>
        </div>
    </div>
  )
}

const Carousel = (props) => {
  const [carouselData, setCarouselData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { testing } = props
  console.log("testing", testing)

  useEffect(() => {
    const fetchCarouselData = async () => {
      await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details")
        .then((res) => res.json())
        .then((data) => {console.log("data", data) ;setCarouselData(data["Details"])})
        .catch((e) => console.log(e))
      // console.log(data)
      
      setIsLoading(false);
    };
    fetchCarouselData()
  }, [])

  return(
    <div className="carousel-container">
      {carouselData.map(SwiperElement)}
    </div>
  )
}

Carousel.defaultProps = {
  testing: false
}

export default Carousel