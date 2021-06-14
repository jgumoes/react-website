import { render } from '@testing-library/react'
import React from 'react'
import './CarouselButton.css'
import { ReactComponent as Arrow } from './Icon_Arrow.svg'
import ArrowIcon from './Icon_Arrow.svg'

 class CarouselButton extends React.Component {
   constructor(props){
     super(props)
     this.state = props
   }
  
   handleClick = (position) => {
     this.props.handleClick(this.props.position)
   }

  render() { console.log(this.props)
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