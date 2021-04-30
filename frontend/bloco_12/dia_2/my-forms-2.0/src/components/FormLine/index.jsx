import './styles.css'

function FormLine(props){
  const { inputName, placeholder, limit, toUpperCase, required } = props;

  return (
    <fieldset className="form-line">
      <label htmlFor={inputName}>{inputName}:</label>
      <input 
        type="text"
        id={inputName}
        placeholder={placeholder}
        maxLength={limit} 
        className={toUpperCase ? 'upper' : null} 
        required={required ? true : false}/>
    </fieldset>
  )
}

export default FormLine;