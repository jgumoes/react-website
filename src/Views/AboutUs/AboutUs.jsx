import aboutUsImage from '../../Resources/shutterstock_696636415.jpg'
import './AboutUs.css'

const AboutUs = () => {
  const staticData = require("../../Resources/AboutUs.json")
  const thirdSection = staticData.thirdSection
  return(
    <div className="about-us-container">
      <h3 className="static-text">About us</h3>
      <p className="static-text"><b>{staticData.firstLine}</b></p>
      {staticData.firstSectionParagraphs.map((text) => <p className="static-text">{text}</p> )}
      <div className="image-container">
        <img src={aboutUsImage} alt="" />
      </div>
      <p className="static-text">{staticData.secondSectionParagraph}</p>
      <h4 className="static-text">{thirdSection.header}</h4>
      <ul className="static-text">
      {thirdSection.listItems.map((text) => <li className="static-text">{text}</li>)}
      </ul>
      {thirdSection.paragraphs.map((text) => <p className="static-text">{text}</p> )}
    </div>
  )
}

export default AboutUs