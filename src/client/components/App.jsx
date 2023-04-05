import React from 'react'
import Nav from './Nav'
import Card from './Card'

import '../style.css'

export default function App() {

  // need useState and useEffect
  // useEffect will be where the fetch request is made 

  const [location, setLocation] = React.useState('')
  const [locationInfo, setLocationInfo] = React.useState({
    city: '',
    state: '',
    temp: 0,
    highTemp: 0,
    lowTemp: 0
  })

  // add prevent default?
  function handleSubmit(e) {
    e.preventDefault();
    fetch('/api/', {
      method: 'POST', 
      body: JSON.stringify({ userLocation: location }),
      headers: {
        'Content-type': 'application/json',
      },
    })
    .then(response => response.json())
    .then(data => {
      // console.log('data ', data)
      // const body = document.getElementById('test-append')
      // body.append(data.temp)
      setLocationInfo((prevLocationInfo) => {
        return { ...prevLocationInfo, city: data.locationCity, state: data.locationState, temp: data.temp, highTemp: data.highTemp, lowTemp: data.lowTemp }
      })
    })
    .catch(error => console.log('Error on the front end', error))
  }

  function handleChange(e) {
    setLocation(e.target.value)
  }

  return (
    <div id='main-container'>
        <Nav handleSubmit={handleSubmit} handleChange={handleChange} />
        <Card locationInfo={locationInfo} /> 
    </div>
  )
}
