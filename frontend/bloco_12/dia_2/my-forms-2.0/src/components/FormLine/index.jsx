import './styles.css'

function FormLine(props){
  const { name, placeholder, required, value, onChange,inputName } = props;

  return (
    <fieldset className="form-line">
      <label htmlFor={name}>{inputName}:</label>
      <input 
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        required={required ? true : false} 
        value={value}
        onChange={onChange} />
    </fieldset>
  )
}

export default FormLine;