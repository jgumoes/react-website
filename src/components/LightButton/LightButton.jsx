import './LightButton.css'
const LightButton = ({ text, ID ="", clickHandler = ()=> "", type = "button"}) => {
  return(
    <button type={type} className="light-button" id={ID} onClick={clickHandler}>
      {text}
    </button>
  )
}

export default LightButton