// BadExample.jsx

import React from 'react';

function BadExample(props) {
  return (
    <div>
      <h1> Hello {props.name} </h1>
      <button onClick={() => console.log('clicked')}>Click me</button>
    </div>
  );
}

export default BadExample;
