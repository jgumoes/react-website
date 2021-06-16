import './LightButton.css'
const LightButton = (props) => {
  const { text } = props
  const ID = props.ID || ""
  console.log("ID", ID)
  return(
    <button className="light-button" id={ID}>
      {text}
    </button>
  )
}

export default LightButton