import React, { Component } from 'react';

 class GrantChild extends Component {
     constructor(props) {
         super(props)

         this.state = {

         }
     }
    render() {
        return ( <div>
            <p>Ini Granchild</p>
                <p>{this.props.data}</p>
            </div>
        )
    }
}

export default GrantChild;
