import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { getTimeInUTCFormat } from '../helpers';


class LatestTransactions extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 10,
            url: 'https://api.algoexplorer.io/v1/transaction/latest/',
            transactions: []
        }

    }

    fetchNewData = () => {
        fetch(`${this.state.url}${this.state.count}`)
            .then(res => res.json())
            .then((transactions) => {
                this.setState({
                    transactions
                })
            })
            .catch(console.error)
    }


    componentDidMount() {
        this.fetchNewData();
        this.timerID = setInterval(
            () => this.fetchNewData(),
            3000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const tdStyle = {
            maxWidth: "150px"
        };

        return !this.state.transactions.length ?  <p>loading...</p> : (
            <div>
                <h3>Latest Transactions</h3>

                <Table striped responsive bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>TxID</th>
                            <th>From</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>To</th>
                            <th>Fee</th>
                            <th>UTC Timestamp</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.transactions.reverse().map((element, index) => 
                            <tr key={index}>
                                <td className="text-truncate" style={tdStyle} >{element.txid}</td>
                                <td className="text-truncate" style={tdStyle} >{element.from}</td>
                                <td className="text-truncate" style={tdStyle} >{element.amount}</td>
                                <td className="text-truncate" style={tdStyle} >{element.type}</td>
                                <td className="text-truncate" style={tdStyle} >{element.to}</td>
                                <td className="text-truncate" style={tdStyle} >{element.fee}</td>
                                <td className="text-truncate" style={tdStyle} >{`${getTimeInUTCFormat(element.timestamp)}`}</td>
                            </tr>
                            )
                        }
                    </tbody>
                </Table>

                <Link to="/">
                    <Button variant="primary">Back</Button>
                </Link>
            </div>
        )
    }
}

export default LatestTransactions;