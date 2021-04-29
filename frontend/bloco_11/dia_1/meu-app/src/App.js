import './styles/global.css';

function App() {
  const commitments = [
    'Fazer comida',
    'Limpar a case',
    'Trabalhar',
    'Cuidar dos animais',
  ];
  const task = (value) => {
    return <li>{value}</li>;
  };

  return <div>{commitments.map((item) => task(item))}</div>;
}

export default App;
