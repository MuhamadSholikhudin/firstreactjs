import React, {Component} from 'react';
import './CSS/Produk.css';

class Produk extends Component{
    constructor(props){
        super(props)

        this.state = {
            stock: this.props.stock,
            sub:"beli",
            status: "Tersedia",
            disabled: false

        }
    }

    ButtonBeli = () => {
       
        this.setState({
            stock: this.state.stock -1
        })
        // alert(this.state.stock)
        if(this.state.stock == 1){
            this.setState({
                disabled: this.state.disabled = true,        
                status: this.state.status = "Produk Habis"           
            })
            alert("Produk Habis");
        }
    }
    render() {
        return (      
            <div className="box-stock" >
                <h2>{this.props.nama}</h2 >
                <img src="https://placeimg.com/640/480/any" alt="https://placeimg.com/640/480/any" />
                <p>Rp . {this.props.harga}</p>
                <p>{this.state.stock}</p>
                <button className="btn-click" onClick={this.ButtonBeli} disabled={this.state.disabled}>Beli</button> 
                <p>{this.state.status}</p>
            </div>
        )
    }
}
export default Produk;

