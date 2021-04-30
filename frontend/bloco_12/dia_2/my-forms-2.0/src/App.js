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
        />
      </form>
    </main>
  );
}

export default App;
