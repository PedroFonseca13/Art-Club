import { GoogleMap, useJsApiLoader } from '@react-google-maps/api'
import React from 'react'

const center = {
  lat: -19.90901672204175,
  lng: -43.930930640221646
};

const MapComponent = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyD1DCImrA9MsUbV2urJG9lWuLVqfXDglkI"
  })

  return (
    <div>
      { isLoaded ? (
        <GoogleMap
          mapContainerStyle={ { width: '100%', height: '100%' } }
          center={ center }
          zoom={ 15 }
        >
        </GoogleMap>
      ) : (<></>) }
    </div>
  )
}

export default MapComponent
