import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';

const serverURL = process.env.REACT_APP_Env == "prod" ? process.env.REACT_APP_SERVER_API_URL : process.env.REACT_APP_SERVER_API_URL_Dev;


function ShipMap(props) {
    const [ships, setShips] = useState([]);
    const AnyReactComponent = ({ text }) => <div className="currentBoat"></div>;
    const position = {
        lat: 41.21,
        lng: -71.32
    };
    function handleZoomChanged() {
        console.log(this.getZoom()) //this refers to Google Map instance
    }

    useEffect(() => {
        axios.get(`${serverURL}/Ship/Get`)
            .then(res => {
                var result = res.data;
                setShips(result);
            })
    }, []);

    return (
        <div className="ShipMap">

            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyDxiVBvfoG-UU4iePTTt0hPDECHxABHnMw" }}
                defaultCenter={position}
                defaultZoom={3}
                onZoomChanged={handleZoomChanged}
                yesIWantToUseGoogleMapApiInternals>

                {ships.map((item, index) => (
                    <AnyReactComponent key={item.shipId}
                        lat={item.la}
                        lng={item.lo}
                        text="My Marker"
                    />
                    ))}
            </GoogleMapReact> 
        </div>
    );
}

export default ShipMap;