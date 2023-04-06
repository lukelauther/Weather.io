import React from 'react'
import Nav from './Nav'
import Card from './Card'
import CardCreator from './CardCreator'

import '../style.css'

export default function App() {

  // need useState and useEffect
  // useEffect will be where the fetch request is made 

  const [location, setLocation] = React.useState('')
  // const [locationInfo, setLocationInfo] = React.useState({
  //   city: '',
  //   state: '',
  //   temp: 0,
  //   feelsLike: 0,
  //   highTemp: 0,
  //   lowTemp: 0,
  //   windSpeed: 0
  // })

  const [locationInfo, setLocationInfo] = React.useState([])

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
      setLocationInfo((prevLocationInfo) => {
        return [
           ...prevLocationInfo, 
           {city: data.locationCity, 
           state: data.locationState, 
           temp: data.temp, 
           highTemp: data.highTemp, 
           lowTemp: data.lowTemp, 
           description: data.description,
           feelsLike: data.feelsLike,
           windSpeed: data.windSpeed}
        ]
      })
    })
    .catch(error => console.log('Error on the front end', error))
  }

  function handleChange(e) {
    setLocation(e.target.value)
  }

  function handleDelete(tag) {
    // console.log(locationInfo)
    const card = document.getElementById(tag)
    card.remove()
  }

  return (
    <div id='main-container'>
        <Nav handleSubmit={handleSubmit} handleChange={handleChange} />
        <CardCreator handleDelete={handleDelete} locationInfo={locationInfo}/>
    </div>
  )
}
