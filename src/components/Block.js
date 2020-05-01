import React from 'react';
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getTimeInUTCFormat } from '../helpers';

class Block extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            url: 'https://api.algoexplorer.io/v1/block/',
            idBlock: this.props.match.params.idBlock,
            data: {}
        }

    }

    fetchBlockData(){
        fetch(`${this.state.url}${this.state.idBlock}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ data })
            })
            .catch(console.error)
    }

    componentDidMount(){
        this.fetchBlockData();
    }

    render(){
        if(!this.state.data.hash){
            return( <p>loading...</p>)
        }else{
            return (
                <div>
                    <Card border="secondary" style={{ width: '40rem' }}>
                        <Card.Body>
                            <Card.Title>Round {this.state.data.round}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Hash: { this.state.data.hash }</ListGroupItem>
                            <ListGroupItem>PrevHash: { this.state.data.prevHash }</ListGroupItem>
                            <ListGroupItem>Proposer: { this.state.data.proposer }</ListGroupItem>
                            <ListGroupItem>Reward: { this.state.data.reward }</ListGroupItem>
                            <ListGroupItem>Seed: { this.state.data.seed }</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                        <small className="text-muted">UTC Timestamp: { getTimeInUTCFormat(this.state.data.timestamp) }</small>
                        </Card.Footer>
                    </Card>
    
                    <Link to="/blocks">
                        <Button variant="primary">Back</Button>
                    </Link>
    
                </div>       
            )
        }
    }
}


export default Block;