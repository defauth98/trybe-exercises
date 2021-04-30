import './styles.css'

function FormLine(props){
  const { inputName, placeholder, limit, toUpperCase } = props;

  return (
    <fielset className="form-line">
      <label htmlFor={inputName}>{inputName}:</label>
      <input type="text" id={inputName} placeholder={placeholder} maxLength={limit} className={toUpperCase ? 'upper' : null}/>
    </fielset>
  )
}

export default FormLine;