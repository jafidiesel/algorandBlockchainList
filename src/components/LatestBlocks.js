import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { getTimeInUTCFormat } from '../helpers';


class LatestBlocks extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            url: 'https://api.algoexplorer.io/v1/block/latest/',
            blocks: {}
        }

        this.fetchNewData = this.fetchNewData.bind(this);
    }

    componentDidMount() {
        this.fetchNewData();
        this.timerID = setInterval(
            () => this.fetchNewData(),
            3000
        );
    }

    fetchNewData() {
        fetch(`${this.state.url}${this.state.count}`)
            .then(res => res.json())
            .then((blocks) => {
                this.setState({
                    blocks
                })
            })
            .catch(console.error)
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const tdStyle = {
            maxWidth: "150px"
        };

        if (!this.state.blocks.length) {
            return (<p>loading...</p>)
        } else {
            return (
                <div>
                    <h3>Latest Blocks</h3>
                    <Table striped responsive bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>Round</th>
                                <th>Hash</th>
                                <th>Proposer</th>
                                <th>Reward</th>
                                <th>Seed</th>
                                <th>UTC Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.blocks.reverse().map((element, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="text-truncate" style={tdStyle} >
                                            <Link to={`/block/${element.round}`}><Button variant="primary" size="sm" >{element.round}</Button></Link>
                                        </td>
                                        <td className="text-truncate" style={tdStyle} >{element.hash}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.proposer}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.reward}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.seed}</td>
                                        <td className="text-truncate" style={tdStyle} >{`${getTimeInUTCFormat(element.timestamp)}`}</td>
                                    </tr>
                                )
                            })}


                        </tbody>
                    </Table>

                    <Link to="/">
                        <Button variant="primary">Back</Button>
                    </Link>
                </div>
            )
        }
    }
}

export default LatestBlocks;