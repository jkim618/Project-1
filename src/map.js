import React from 'react'
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styled from 'styled-components';
import Restaurants from './restaurants'

const Wrapper = styled.div
`
width: ${props => props.width};
height: ${props => props.height};
`;

export default class Map extends React.Component{

    componentDidMount(){
        this.map = L.map('map',{
            center: [38.028507,-78.510606],
            zoom: 15,
            zoomControl: false
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',{
            maxZoom: 30,
            maxNativeZoom: 17
        }).addTo(this.map);
    }

    render(){
        return (
            <div>
                <Wrapper width="800px" height="500px" id="map"/>
            </div>
        );
    }
}
