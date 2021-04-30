import { Component } from 'react';

import FormLine from './components/FormLine';
import ComboBox from './components/ComboBoxStates';

import './styles/global.css';
import './styles.css';

class App extends Component {
  render() {
    return (
      <main>
        <form action="">
          <FormLine
            inputName="Nome"
            placeholder="Seu nome"
            limit={40}
            toUpperCase
            required
          />
          <FormLine
            inputName="Email"
            placeholder="seu_email@mail.com"
            limit={50}
            required
          />
          <FormLine
            inputName="CPF"
            placeholder="0000-0000/00"
            limit={11}
            required
          />
          <FormLine
            inputName="Endereço"
            placeholder="Rua X - Bairo Y - Numero Z"
            limit={200}
            required
          />
          <FormLine
            inputName="Cidade"
            placeholder="São Paulo"
            limit={28}
            required
          />
          <ComboBox />
        </form>
      </main>
    );
  }
}

export default App;
