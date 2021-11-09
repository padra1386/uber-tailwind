import { useEffect } from 'react'
import tw from 'tailwind-styled-components'
import mapboxgl from '!mapbox-gl'

mapboxgl.accessToken = 'pk.eyJ1IjoicGFkaWFoYW5pIiwiYSI6ImNrdmxvOXN3ZTVxbGkyb3FwOWVibmNlbzIifQ.9UQRjl0_i_W6f10Ct0QD8Q'
const Map = (props) => {

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

    if(props.pickupCoordinates){
      // Sam 🚀
      addToMap(map, props.pickupCoordinates)
    }

    if(props.dropoffCoordinates){
      addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){
      // 🔥 Fabio
      map.fitBounds([
        props.dropoffCoordinates,
        props.pickupCoordinates
      ], {
        padding: 60
      })
    }

  }, [props.pickupCoordinates, props.dropoffCoordinates])

  // Good job Chen
  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
  }
  
 // 🚀 Maleessha

  return <Wrapper id='map'></Wrapper>
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`
