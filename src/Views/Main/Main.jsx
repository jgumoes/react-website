import Carousel from "../../components/Carousel/Carousel"
import BlueButton from "../../components/BlueButton/BlueButton"
import './Main.css'
import firstCardPicture from "../../Resources/shutterstock_696636415.jpg"
import LightButton from "../../components/LightButton/LightButton"

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
    <div className="static-card" id="first">
      <div className="card-element">
        <h2>{header}</h2>
        <p>{body}</p>
        <ul>
          {listItems.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
        <BlueButton text="Learn more" route="/about"/>
      </div>
      <div className="card-element" id="picture">
      <img src={firstCardPicture} alt="tres Ipsum" />
      </div>
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
        <LightButton text="Log in" />
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
        {body.map((b, i) => <p key={i}>{b}</p>)}
      </div>
      <BlueButton text="Contact us" route="/contact"/>
    </div>
  )
}

export default Main