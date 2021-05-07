import { Component } from 'react'
import './styles.css'

class ComboBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      states: [],
    };
  }
  
  async componentDidMount() {
    const response = await fetch(
      'https://servicodados.ibge.gov.br/api/v1/localidades/estados/'
    );
    let states = await response.json();

    states = states.map((state) => ({
      value: state.sigla,
      name: state.nome,
    }));

    this.setState({
      states,
    });
  }

  render(){
    return (
      <fieldset className="form-line">
        <span>Estados do brasil</span>
        <select name="combo" id="combo">
          {this.state.states && this.state.states.map(option => 
            <option value={option.value} key={option.name}>{option.name}</option>)}
        </select>
      </fieldset>
    )
  }
}

export default ComboBox;