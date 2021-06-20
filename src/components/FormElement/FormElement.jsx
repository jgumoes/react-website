
const FormElement = ({ text, element, elementValue, onChangeHandler, error="", required=true, subText, maxLength=500}) => {
  return(
    <>
      <div className="form-element">
        <label className="form-element" id={element} htmlFor={element}>{text}{!required && <i className="sub-label">- optional</i>}{subText}</label>
        {error.length > 0 &&
          <>
            <br></br><span className="error-message">{error}</span>
          </>
        }
        <input type="text" id={element} name={element} onChange={onChangeHandler} value={elementValue}maxLength={maxLength} required={required}></input>
      </div>
    </>
  )
}

export default FormElement