import React from 'react';
import { render } from 'react-dom';
import { Map, Marker, Popup, TileLayer, Tooltip, Circle } from 'react-leaflet';

import axios from 'axios';
import Restaurants from './restaurants.js'


export default class MapView extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
        restaurants: []
    };
  }



render() {
   const position = [38.028507,-78.510606];
   //console.log(this.props.lats);
    return (
        <div>
        <Restaurants/>
        <Map
          style={{height: "50vh", width: "80vh"}}
          center={position}
          zoom={15}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="<attribution>" />
          <Marker position={position}>
            <Popup>
              <span>
                A pretty CSS3 popup. <br /> Easily customizable.
              </span>
            </Popup>
            <Circle 
                  center={position}
                  fillColor="blue" 
                  radius={20}/>
          </Marker>
        </Map>
        </div>
    );
  }

}