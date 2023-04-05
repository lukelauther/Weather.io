// INDIVIDUAL CARD, HOW THE INFORMATION SHOULD BE LAYED OUT
import React from 'react'

export default function Card(props) {
  return (
    <div id='location-info'>
        <h2 id='card-location'>Location: {props.locationInfo.city} {props.locationInfo.state}</h2>
        <h3 id='card-description'>{props.locationInfo.description}</h3>
        <h4 id='card-temp'>Current Temperature: {Math.round(props.locationInfo.temp)} °F</h4>
        <h4 id="card-feels-like">Feels Like: {Math.round(props.locationInfo.feelsLike)} °F</h4>
        <h4 id='card-high'>High Temperature: {Math.round(props.locationInfo.highTemp)} °F</h4>
        <h4 id='card-low'>Low Temperature: {Math.round(props.locationInfo.lowTemp)} °F</h4>
        <h4 id="card-wind-speed">Winds: {Math.round(props.locationInfo.windSpeed)} mph</h4>
    </div>
  )
}
