import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Jumbotron, Container } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <Jumbotron className="mt-3" >
        <Container>
          <h1>Latest blocks</h1>          
          <Link to="/blocks">
            <Button variant="primary">Watch</Button>
          </Link>
        </Container>
      </Jumbotron>
      <Jumbotron >
        <Container>
          <h1>Latest Transactions</h1>
          <Link to="/transactions">
            <Button variant="primary">Watch</Button>
          </Link>
        </Container>
      </Jumbotron>
    </Container>
  );
}

export default App;
