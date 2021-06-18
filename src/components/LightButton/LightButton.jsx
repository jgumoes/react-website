import './LightButton.css'
const LightButton = ({ text, ID ="", clickHandler = ()=> "", type = "button", className=""}) => {
  return(
    <button type={type} className={`light-button ${className}`} id={ID} onClick={clickHandler}>
      {text}
    </button>
  )
}

export default LightButton