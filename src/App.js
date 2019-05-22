import React , {component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import Map from './map';
import Restaurants from './restaurants'

class App extends React.Component{
render(){
  return (
    <div>
    <Map />
    <Restaurants/>
    </div>
  );
}
}


export default App;
