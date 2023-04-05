import React, { Component, useEffect } from 'react'

// useState and useEffect
// HANDLE CHANGE AND HANDLE SUBMIT FUNCTIONS
// handle change will update the state
// handle submit is where we will do the fetch request


export default function Nav({ handleSubmit, handleChange}) {  
  return (
    <div>
        <div id='nav-container'>
            <form onSubmit={handleSubmit}>
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
