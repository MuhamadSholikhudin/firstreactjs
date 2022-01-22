
import React, { Component } from 'react';
import GrantChild from './GrantChild';
// import './CSS/Produk.css';

class Child1 extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // minbeli = () => {

    // }
    
    minbeli = 2;
    
    render() {
        return (
            <div className="box-stock" >
                {/* <h2>{this.props.nama}</h2 > */}
                {/* <img src="https://placeimg.com/640/480/any" alt="https://placeimg.com/640/480/any" /> */}
                {/* <p>Rp . {this.props.harga}</p> */}
                Child 2
                <p>{this.props.stock} oke</p>
                <button className="btn-click" onClick={() =>this.props.fungsi(this.minbeli)} disabled={this.state.disabled}>Beli</button>
                {/* <p>{this.state.status}</p> */}
<br/>
                <GrantChild
                data={this.props.stock}
                />
            </div>
        )
    }
}
export default Child1;

