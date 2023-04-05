// INDIVIDUAL CARD, HOW THE INFORMATION SHOULD BE LAYED OUT
import React from 'react'

export default function Card(props) {
  return (
    <div id='location-info'>
        <h2 id='card-location'>Location: {props.locationInfo.city} {props.locationInfo.state}</h2>
        <h4 id='card-temp'>Current Temperature: {Math.round(props.locationInfo.temp)}</h4>
        <h4 id='card-high'>High Temperature: {Math.round(props.locationInfo.highTemp)}</h4>
        <h4 id='card-low'>Low Temperature: {Math.round(props.locationInfo.lowTemp)}</h4>
    </div>
  )
}
