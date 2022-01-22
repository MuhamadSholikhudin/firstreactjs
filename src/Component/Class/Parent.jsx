
import React, { Component } from 'react';
// import './CSS/Produk.css';
import Child1 from './Child1';
import Child2 from './Child2';

class Parent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stock: this.props.stock
        }
    }

    beliProduk = (jumlah) =>{
this.setState({
    stock: this.state.stock -jumlah
})
    }

    render() {
        return ( <div>
            <Child1
                stock={this.state.stock}
                fungsi={this.beliProduk.bind(this)}
            />
            <br/>
            <Child2
                stock={this.state.stock}
                fungsi={this.beliProduk.bind(this)}
            />
        </div>


        )
    }
}
export default Parent;

