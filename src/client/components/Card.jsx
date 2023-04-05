// INDIVIDUAL CARD, HOW THE INFORMATION SHOULD BE LAYED OUT
import React from 'react'

export default function Card(props) {
  return (
    <div>
        <h2>Location: {props.locationInfo.city} {props.locationInfo.state}</h2>
        <h4>Current Temperature: {Math.round(props.locationInfo.temp)}</h4>
        <h4>High Temperature: {Math.round(props.locationInfo.highTemp)}</h4>
        <h4>Low Temperature: {Math.round(props.locationInfo.lowTemp)}</h4>
    </div>
  )
}
