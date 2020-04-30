import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Link to="/blocks">
        <Button variant="primary">Lastest blocks</Button>
      </Link>
      <Link to="/transactions">
        <Button variant="primary">Lastest transactions</Button>
      </Link>
      
    </div>
  );
}

export default App;
