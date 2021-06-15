import './BlueButton.css'

const BlueButton = ({ text }) => {
  return(
    <button className="blue-button">
      <b>{text}</b>
    </button>
  )
}

export default BlueButton