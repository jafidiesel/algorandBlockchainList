import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


class LatestBlocks extends React.Component {

    state = {
        count : 10,
        url: 'https://api.algoexplorer.io/v1/block/latest/'
    }

    componentDidMount(){
        fetch(`${this.state.url}${this.state.count}`)
            .then(res => res.json())
            .then((data) => {
                console.log(data)
            })
            .catch(console.error)
    }

    render(){

        return(
            <div>
                <p>LatestBlocks</p>
                <Link to="/">
                    <Button variant="primary">Back</Button>
                </Link>
            </div>
        )
    }
}



// https://api.algoexplorer.io/v1/block/latest/1

/* [{"round":6382024,"hash":"2DYECIM7HRVICMK5DIZSUPS2SY2CYXGG4B3KAPV7WKEJZRJW6GCA","txns":[],"seed":"6GVMZOKGI727JUXTLBSZZ6D67Z5MWNVC7EN3K4UZZNNU3ONEOSGQ","prevHash":"VSPIAXBM5PYKVVO3B3ULCAELRXVNFTVF2KAHLRNGGQNM3TO4OKYQ","proposer":"DYATVHCICZA7VVOWZN6OLFFSKUAZ64TZ7WZWCJQBFWL3JL4VBBV6R7Z6IE","reward":119200,"timestamp":1588262068}] */
export default LatestBlocks;