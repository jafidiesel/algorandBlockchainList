import React from 'react';
import { Card, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getTimeInUTCFormat } from '../helpers';

class Block extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            url: 'https://api.algoexplorer.io/v1/block/',
            idBlock: this.props.match.params.idBlock,
            data: {}
        }

    }

    fetchBlockData = () => {
        fetch(`${this.state.url}${this.state.idBlock}`)
            .then(res => res.json())
            .then((data) => {
                this.setState({ data })
            })
            .catch(console.error)
    }

    componentDidMount() {
        this.fetchBlockData();
    }

    render() {
        return !this.state.data.hash ? <p>loading...</p> : (
                <Container>
                    <Card className="mt-3 mb-3" border="secondary" >
                        <Card.Body>
                            <Card.Title><b>Round</b> {this.state.data.round}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem><b>Hash:</b> {this.state.data.hash}</ListGroupItem>
                            <ListGroupItem><b>PrevHash:</b> {this.state.data.prevHash}</ListGroupItem>
                            <ListGroupItem><b>Proposer:</b> {this.state.data.proposer}</ListGroupItem>
                            <ListGroupItem><b>Reward:</b> {this.state.data.reward}</ListGroupItem>
                            <ListGroupItem><b>Seed:</b> {this.state.data.seed}</ListGroupItem>
                        </ListGroup>
                        <Card.Footer>
                            <small className="text-muted">UTC Timestamp: {getTimeInUTCFormat(this.state.data.timestamp)}</small>
                        </Card.Footer>
                    </Card>

                    <Link to="/blocks">
                        <Button variant="primary">Back</Button>
                    </Link>

                </Container>
            )
        }
}


export default Block;