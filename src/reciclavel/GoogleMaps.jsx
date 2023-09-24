import React from 'react'
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import maps from './GoogleMaps.module.css'

const containerStyle = {  
  width: '800px',
  height: '400px'
};

const center = {
  lat: -26.074419,
  lng: -53.051749
};

function GoogleMaps() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyBPUnHK9r5HLjJujt45ar2herhsXabGAGU"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map){
    setMap(null)
  }, [])

  return isLoaded ? (
      <section className={maps.estilo}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
      </section>
  ) : <></>
}

export default GoogleMaps;