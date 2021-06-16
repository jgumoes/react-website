import Carousel from "../../components/Carousel/Carousel"
import BlueButton from "../../components/BlueButton/BlueButton"
import './Main.css'
import firstCardPicture from "../../Resources/shutterstock_696636415.jpg"
import secondCardPicture from "../../Resources/shutterstock_407632243.jpg"

const Main = () => {
  const staticData = require("../../Resources/MainPageContent.json")
  return(
    <div className="main-view">
      <Carousel />
      <FirstCard props={staticData["firstCard"]} />
      <SecondCard  props={staticData["secondCard"]} />
      <ThirdCard props={staticData["thirdCard"]} />
    </div>
  )
}

const FirstCard = ({ props }) => {
  const { header, body, listItems } = props
  return (
    <div className="static-card" id="1">
      <div className="card-element">
        <h2>{header}</h2>
        <p>{body}</p>
        <ul>
          {listItems.map(li => <li>{li}</li>)}
        </ul>
        <BlueButton text="Learn more"/>
      </div>
      <img src={firstCardPicture} className="card-element" alt="tres Ipsum" />
    </div>
  )
}

const SecondCard = ({ props }) => {
  const { header, body } = props
  return(
    <div className="static-card" id="second">
      <div className="card-element">
        <h2>{header}</h2>
        <p>{body}</p>
      </div>
    </div>
  )
}

const ThirdCard = ({ props }) => {
  const { header, subHeader, leadParagraph, body } = props
  return (
    <div className="static-card" id="third">
      <h2>{header}</h2>
      <h3>{subHeader}</h3>
      <div className="paragraph-container">
        <p><b>{leadParagraph}</b></p>
        {body.map(b => <p>{b}</p>)}
      </div>
      <BlueButton text="Contact us" />
    </div>
  )
}

export default Main