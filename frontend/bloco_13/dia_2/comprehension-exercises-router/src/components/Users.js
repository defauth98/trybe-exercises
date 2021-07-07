import React from 'react';

const Users = (props) => {
  const { greetingMessage } = props;
  const { id } = props.match.params;
 
  return (
    <div>
      <h2> Users </h2>
      <p>{ greetingMessage }, this is my awesome Users component </p>
      <p>{ id }</p>
    </div>
  )
}

export default Users;