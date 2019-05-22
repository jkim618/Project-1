import React , {component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

const API_KEY = process.env.REACT_APP_API_KEY;

class Restaurants extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      rest_names: [],
      rest_names2: []
    }
  }

  componentDidMount(){
    let url = 'https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=38.028507,-78.510606&radius=3300&type=restaurant&opennow=True&key=' + API_KEY;
    axios.get(url).then(response=>{
    console.log(response);
    const data2 = response.data.results
    this.setState({rest_names:data2})
  });
}
render(){
  return (
    <div>
      <ul>
          {this.state.rest_names.map(x => (
            <li key={x.id}> Name: {x.name} | Rating: {x.rating} | Price Level: {x.price_level}</li>
          ))}
        </ul>
        {this.state.rest_names.map((x)=>x.geometry).map((y)=>y.location).map((z)=>z.lat)}
        {this.state.rest_names.map((x)=>x.geometry).map((y)=>y.location).map((z)=>z.lng)}
    </div>
  );
}
}


export default Restaurants;
