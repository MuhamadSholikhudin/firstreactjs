
import React, { Component } from 'react';
// import './CSS/Produk.css';

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // minbeli = () => {

    // }
    
    minbeli = 1;

    render() {
        return (
            <div className="box-stock" >
                {/* <h2>{this.props.nama}</h2 > */}
                {/* <img src="https://placeimg.com/640/480/any" alt="https://placeimg.com/640/480/any" /> */}
                {/* <p>Rp . {this.props.harga}</p> */}
                Child 1
                <p>{this.props.stock} oke</p>
                <button className="btn-click" onClick={() =>this.props.fungsi(this.minbeli)} disabled={this.state.disabled}>Beli</button>
                {/* <p>{this.state.status}</p> */}
            </div>
        )
    }
}
export default Child1;

