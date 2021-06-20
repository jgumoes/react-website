
const FormElement = ({ text, element, elementValue, onChangeHandler, error="", required=true, subText, maxLength=500, inputType="text"}) => {
  const errorClass = error.length > 0 && "error-box" 
  return(
    <>
      <div className="form-element" id={element} >
        <label className="form-element-label" id={element} htmlFor={element} >{text}{!required && <i className="sub-label">- optional</i>}{subText}</label>
        {inputType === "text" &&
          <input className={errorClass} type="text" id={element} name={element} onChange={onChangeHandler} value={elementValue}maxLength={maxLength} required={required}></input>
        }
        {inputType === "textarea" &&
          <textarea className={errorClass} id={element} name={element} onChange={onChangeHandler} value={elementValue}maxLength={maxLength} required={required}></textarea>
        }
        {error.length > 0 &&
          <>
            <span className="error-box error-message">{error}</span>
          </>
        }
      </div>
    </>
  )
}

export default FormElement