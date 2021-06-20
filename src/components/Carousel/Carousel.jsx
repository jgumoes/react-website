import React, { useEffect, useState } from 'react'
import CarouselButton from '../CarouselButton/CarouselButton';
import BlueButton from '../BlueButton/BlueButton'
import './Carousel.css'
import CarouselDots from '../CarouselDots/CarouselDots';

const SwiperElement = ({data}) => {
  return(
    <div className="swiper-element">
        <div className="content">
          <h1 className="h">{ data["Title"] }</h1>
          <h3 className="h">{data["Subtitle"]}</h3>
          <BlueButton className="swiper-link-button" text="Contact Us" route="/contact-us"/>
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
        .then((data) => {setCarouselData(data["Details"])})
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
  const maxLength = carouselData.length - 1

  const setIndex = index => {
    setShowDataIndex(index)
  }

  const backgroundUrl = shownData["ImageUrl"]
  const containerID = /(?:\w+\/)(?<id>\w+)\.jpg/g.exec(backgroundUrl).groups.id // just the name of the jpg file

  const nextIndex = showDataIndex + 1 <= maxLength ? showDataIndex + 1 : 0
  const prevIndex = showDataIndex - 1 >= 0 ? showDataIndex - 1 : maxLength
  return(
    <>
      <div className="carousel-container" id={`${containerID}`} style={{ backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.81) 16%, rgba(0, 0, 0, 0.2) 39%, transparent 50%), url(${backgroundUrl})`, position: 'center'}}>
        <CarouselButton position="left" index={prevIndex} handleClick={setIndex}/>
        {<SwiperElement data={shownData} />}
        <CarouselButton position="right" index={nextIndex} handleClick={setIndex}/>
      </div>
      <CarouselDots number={maxLength} shown={showDataIndex} dotClickHandler={setIndex}/>
    </>
  )
}

export default Carousel