import FormLine from './components/FormLine';
import './styles/global.css';
import './styles.css';

function App() {
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
      </form>
    </main>
  );
}

export default App;
