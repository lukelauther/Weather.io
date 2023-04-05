import React, { Component, useEffect } from 'react'

// useState and useEffect
// HANDLE CHANGE AND HANDLE SUBMIT FUNCTIONS
// handle change will update the state
// handle submit is where we will do the fetch request


export default function Nav() {

  const [state, setState] = React.useState('')

  function handleSubmit(state) {
    // event.preventDefault();
    // console.log('Submitted! current state:', state)
   useEffect(() => {
      fetch('/api/', {
        method: 'POST', 
        body: JSON.stringify({ location: state }),
        headers: {
          'Content-Type': 'application/json',
          // 'Accept': 'application/json'
        },
      })
        .then(response => {
          response.json()
        })
        .then(data => console.log(data))
    }, [])
  }

  function handleChange(e) {
    setState(e.target.value)
  }
  
  return (
    <div>
        <div id='nav-container'>
            <form onSubmit={handleSubmit(state)}>
              <div id='nav-search'>
                Add Location:
                <input id='nav-search-bar' placeholder='city, state' onChange={handleChange}></input>
              </div>
            </form>
            <div id='nav-logo'>Logo</div>
            <div id='nav-login'>Login</div>
        </div>
    </div>
  )
}
