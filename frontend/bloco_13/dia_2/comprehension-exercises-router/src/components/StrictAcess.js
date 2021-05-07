import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class StrictAcess extends Component {
  render(){
    const { user } = this.props;
    const {username, password} = user;

    if(username !== 'joao' && password !== '1234'){    
      return (
        <div>
          Welcome, { username }
        </div>
      )
    } else {
      alert('access denied');

      return (      
        <Redirect to="/"/>
      )
    }
  }
}

export default StrictAcess;
