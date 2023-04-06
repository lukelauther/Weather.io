// COMPONENT TO CREATE CARDS WITH ALL THE INFORMATION
import React from 'react'
import Card from './Card'

export default function CardCreator(props) {

  const locations = []

  for (let i = 0; i < props.locationInfo.length; i++) {
    locations.push(<Card key={i} tag={i} locationInfo={props.locationInfo[i]} handleDelete={props.handleDelete}/>)
  }

  return (
    <div id='display-box'>
        {locations}
    </div>
  )
}
