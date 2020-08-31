import React, {Component} from 'react';
import{ connect }from 'react-redux';
import Heading from './heading';
import Button from './button';
import { increment } from '../actions/increment'; 

class ClickCounter extends Component {

	constructor(props){
            super(props);
        }

	render() {
		return(
			<div>
				<Heading value={this.props.value}/>
				<Button increment={this.props.increment}/>
			</div>
			)
	}
}

let mapStateToProps = (state)=> {
	return {
		value:state.count
	}
}

let mapDispatchToProps =  {
		increment:increment	
}

let ClickCounterContainer = connect(mapStateToProps, mapDispatchToProps)(ClickCounter);

export default ClickCounterContainer;