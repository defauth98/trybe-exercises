import './styles.css'

function ComboBox(props){
  const { options } = props

  return (
    <fieldset>
      <span>Estados do brasil</span>
      <select name="combo" id="combo">
        {options.map(option => <option value={option.value}>{option.name}</option>)}
      </select>
    </fieldset>
  )
}

export default ComboBox;