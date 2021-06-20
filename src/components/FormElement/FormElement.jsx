
const FormElement = ({ text, element, elementValue, onChangeHandler, error="", required=true, subText, maxLength=500, inputType="text"}) => {
  return(
    <>
      <div className="form-element" id={element} >
        <label className="form-element-label" id={element} htmlFor={element} >{text}{!required && <i className="sub-label">- optional</i>}{subText}</label>
        {error.length > 0 &&
          <>
            <br></br><span className="error-message">{error}</span>
          </>
        }
        {inputType === "text" &&
          <input type="text" id={element} name={element} onChange={onChangeHandler} value={elementValue}maxLength={maxLength} required={required}></input>
        }
        {inputType === "textarea" &&
          <textarea id={element} name={element} onChange={onChangeHandler} value={elementValue}maxLength={maxLength} required={required}></textarea>
        }
      </div>
    </>
  )
}

export default FormElement