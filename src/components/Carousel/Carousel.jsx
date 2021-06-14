import React, { useEffect, useState } from 'react'
import CarouselButton from '../CarouselButton/CarouselButton';
import Swiper from 'react-id-swiper';
import './Carousel.css'
// import '../CarouselButton/CarouselButton.css'

const SwiperElement = ({data}) => {
  // const { data } = props
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

const Carousel = () => {
  const [carouselData, setCarouselData] = useState([]);
  const [showDataIndex, setShowDataIndex] = useState(0);

  useEffect(() => {
    const fetchCarouselData = async () => {
      await fetch("https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details")
        .then((res) => res.json())
        .then((data) => {console.log("data", data) ;setCarouselData(data["Details"])})
        .catch((e) => console.log(e))
    };
    fetchCarouselData()
  }, [])

  if (carouselData.length === 0){
    return(
      <div />
    )
  }

  let shownData = carouselData[showDataIndex]

  const buttonClickHandler = position => {
    const maxLength = carouselData.length - 1
    const buttonsDirection = {
      "left": -1,
      "right": 1,
    }
    let newIndex = showDataIndex + buttonsDirection[position]
    newIndex = newIndex <= maxLength ? newIndex : 0
    newIndex = newIndex >= 0 ? newIndex : maxLength
    setShowDataIndex(newIndex)
    console.log("newIndex", newIndex)
  }

  return(
    <div className="carousel-container">
      <CarouselButton position="left" handleClick={buttonClickHandler}/>
      {/* {carouselData.map(SwiperElement)} */}
      {<SwiperElement data={shownData} />}
      <CarouselButton position="right" handleClick={buttonClickHandler}/>
    </div>
  )
}

export default Carousel