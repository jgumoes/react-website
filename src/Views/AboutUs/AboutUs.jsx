import aboutUsImage from '../../Resources/shutterstock_696636415.jpg'
import './AboutUs.css'

const AboutUs = () => {
  const staticData = require("../../Resources/AboutUs.json")
  const thirdSection = staticData.thirdSection
  return(
    <div className="about-us-container">
      <h3 className="static-text">About us</h3>
      {/* <p className="static-text" id="first-line"><b>{staticData.firstLine}</b></p> */}
      {<p className="static-text"><b>{staticData.firstLine}</b><br/>{staticData.firstSectionParagraphs[0]} <a href='https://www.pictureofhotdog.com/'>Pellentesque feugiat lorem</a>, a urna porta dapibus. In dictum mattis interdum.</p>}
      {staticData.firstSectionParagraphs.slice(1).map((text, key) => <p key={key} className="static-text">{text}</p> )}
      <div className="image-container">
        <img src={aboutUsImage} alt="" />
      </div>
      <p className="static-text">{staticData.secondSectionParagraph}</p>
      <h4 className="static-text">{thirdSection.header}</h4>
      <ul className="static-text">
      {thirdSection.listItems.map((text, key) => <li key={key} className="static-text">{text}</li>)}
      </ul>
      {thirdSection.paragraphs.map((text, key) => <p key={key} className="static-text">{text}</p> )}
    </div>
  )
}

export default AboutUs