import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';


class LatestTransactions extends React.Component {
    
    state = {
        count : 10,
        url: 'https://api.algoexplorer.io/v1/transaction/latest/',
        transactions: {}
    }

    componentDidMount(){
        fetch(`${this.state.url}${this.state.count}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data);
                this.setState({
                    transactions: data
                })
                console.log(this.state.transactions[0].txid);
            })
            .catch(console.error)
    }

    componentDidUpdate(){
        console.log('componentDidUpdate');
        console.log(`${this.state.transactions.length}`);
    }

    render(){
        const tdStyle = {
            maxWidth:"150px"
        };

        if(!this.state.transactions.length){
            return( <p>loading...</p>)
        }else{
            return(
                <div>
                    <h3>LatestTransactions</h3>
                    <Table striped responsive bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>TxID</th>
                                <th>From</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>To</th>
                                <th>Fee</th>
                            </tr>
                        </thead>
                        <tbody>
                            {console.log('this.state.transactions',this.state.transactions.length)}
                            {this.state.transactions.map((element,index)=>{
                                return(
                                    <tr key={index}>
                                        <td className="text-truncate" style={tdStyle}>{element.txid}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.from}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.amount}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.type}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.to}</td>
                                        <td className="text-truncate" style={tdStyle} >{element.fee}</td>
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


// https://api.algoexplorer.io/v1/transaction/latest/1

/* [{"index":1489403,"txid":"OGE55PP2IZO3K7HPKBR4AMFNCP2GMEN6CXNJAN5YLU522EBPV7LQ","from":"BVMEUTF37WNEQ6GYCZISRFHGLEMOKT5OCPPTTJXVED6JBSXKF6YJJRZRI4","fee":1000,"type":"pay","firstRound":6382029,"lastRound":6382129,"assetID":-1,"fromIndex":28482,"assetIndex":1444567,"fromBalance":1241985148754,"round":6382032,"accumulatedFromRewards":91280569437,"timestamp":1588262103,"fromRewards":8726207,"to":"JAEQMWES2EKEO3PTJ7O7VZJIGET7OP7YCIRW3UHNBI2S3TUQCUTGXEEUHU","amount":4625000000,"toIndex":3666,"toBalance":4646540376,"toRewards":105,"accumulatedToRewards":407682547}] */

export default LatestTransactions;