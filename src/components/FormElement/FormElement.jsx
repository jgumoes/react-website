
const FormElement = ({ text, element, elementValue, onChangeHandler, error="", required=true, subText}) => {
  return(
    <>
      <div className="form-element">
        <label className="form-element" id={element} htmlFor={element}>{text}{subText}</label>
        {error.length > 0 &&
          <>
            <br></br><span className="error-message">{error}</span>
          </>
        }
        <input type="text" id={element} name={element} onChange={onChangeHandler} value={elementValue} required={required}></input>
      </div>
    </>
  )
}

export default FormElement