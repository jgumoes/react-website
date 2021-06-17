import React from 'react'
import './CarouselDots.css'

class CarouselDots extends React.Component {
    constructor(props){
      super(props)
      this.state = props
    }
  
  dotClickHandler = (index) => {
    this.props.dotClickHandler(index)
  }

  render() {
    const { number, shown } = this.props
    let range = []
    for ( var i = 0; i <= number; i++){ range.push(i) }
  
    const makeDot = (i, index) => {
      const ID = i === shown ? "shown" : ""
      return(
        <button key={index} className="carousel-dot" id={ID} name={index} onClick={() => this.dotClickHandler(index)}> </button>
      )
    }
    return(
      <div className="dot-container">
        { range.map(makeDot)}
      </div>
    )
  }
}

export default CarouselDots
