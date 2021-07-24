import React, { Component } from 'react';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.fetchDog = this.fetchDog.bind(this);
    this.reloadDog = this.reloadDog.bind(this);
    this.saveStorage = this.saveStorage.bind(this);

    this.state = {
      dog: '',
    };
  }

  componentDidMount() {
    this.fetchDog();
  }

  shouldComponentUpdate() {
    const { dog } = this.state;

    if (dog.message && dog.message.includes('terrier')) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    const { dog } = this.state;

    this.saveStorage();

    if (dog.message) {
      const breed = dog.message && dog.message.split('/')[4];

      if (breed) { alert(breed); }
    }
  }

  saveStorage() {
    const { dog } = this.state;

    localStorage.setItem('dog', dog.message);
  }

  async fetchDog() {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const dog = await response.json();

    this.setState({ dog });
  }

  async reloadDog() {
    this.setState({ dog: '' });

    this.fetchDog();
  }

  render() {
    const { dog } = this.state;

    return (
      <div className="App">
        <h1>Random Dog</h1>
        {dog.message ? <img src={ dog.message } alt="random dog" /> : <p>Loading...</p>}

        <button onClick={ this.reloadDog } type="button">Refresh</button>
      </div>
    );
  }
}

export default App;
