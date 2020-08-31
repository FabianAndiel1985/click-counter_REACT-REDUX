import React, {Component} from 'react';

export class Heading extends Component {
        constructor(props){
            super(props);
        }

        render() {
            return(
                    <h1>Click Counter: {this.props.value}  </h1>    
                )
        }
}

export default Heading;