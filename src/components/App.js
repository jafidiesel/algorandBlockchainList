import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Link to="/blocks">
        <Button variant="primary">Latest blocks</Button>
      </Link>
      <Link to="/transactions">
        <Button variant="primary">Latest transactions</Button>
      </Link>
      
    </div>
  );
}

export default App;
