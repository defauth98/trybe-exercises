import { Component } from 'react';

import FormLine from './components/FormLine';
import ComboBox from './components/ComboBoxStates';

import './styles/global.css';
import './styles.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  validateValue(name, value) {
    if (name === 'name') {
      if (value.length > 40) {
        return false;
      }
    }

    if (name === 'email') {
      if (value.length > 50) {
        return false;
      }
    }

    if (name === 'cpf') {
      if (value.length > 11) {
        return false;
      }
    }

    if (name === 'address') {
      if (value.length > 200) {
        return false;
      }
    }

    if (name === 'city') {
      if (value.length > 28) {
        return false;
      }
    }

    return true;
  }

  handleInputChange(event) {
    const { name, value } = event.target;

    if (!this.validateValue(name, value)) {
      return;
    }

    if (name === 'name') {
      const newValue = value;

      this.setState({
        name: newValue.toUpperCase(),
      });

      return;
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <main>
        <form action="">
          <FormLine
            name="name"
            inputName="Nome"
            placeholder="Seu nome"
            required
            value={this.state.name}
            onChange={this.handleInputChange}
          />
          <FormLine
            name="email"
            inputName="email"
            placeholder="seu_email@mail.com"
            required
            value={this.state.email}
            onChange={this.handleInputChange}
          />
          <FormLine
            name="cpf"
            inputName="CPF"
            placeholder="0000-0000/00"
            required
            value={this.state.cpf}
            onChange={this.handleInputChange}
          />
          <FormLine
            name="address"
            inputName="Endereço"
            placeholder="Rua X - Bairo Y - Numero Z"
            required
            value={this.state.address}
            onChange={this.handleInputChange}
          />
          <FormLine
            name="city"
            inputName="Cidade"
            placeholder="São Paulo"
            required
            value={this.state.city}
            onChange={this.handleInputChange}
          />
          <ComboBox />
        </form>
      </main>
    );
  }
}

export default App;
