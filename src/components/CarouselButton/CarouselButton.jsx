import React from 'react'
import './CarouselButton.css'
import ArrowIcon from './Icon_Arrow.svg'

 class CarouselButton extends React.Component {
  
   handleClick = (index) => {
     this.props.handleClick(this.props.index)
   }

  render() {
    const position = this.props.position
    return(
    <div className="carousel-button" id={position}>
      <button className="inner-button" onClick={this.handleClick}>
        {/* <Arrow className="arrow" id={position} viewBox="0 0 20 20"/> */}
        <img className="arrow" src={ArrowIcon} alt="" />
      </button>
    </div>
    )
  }
}

export default CarouselButton