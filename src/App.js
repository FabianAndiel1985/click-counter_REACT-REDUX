import React, {Component} from 'react';
import{ connect }from 'react-redux';
import './App.css';
import ClickCounter from './components/clickcounter';

class App extends Component {
  render() {
  return (
    <div className="App">
    	<ClickCounter/>
    </div>
  );
  }
}


export default App;
