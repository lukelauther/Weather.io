import React from 'react'
import Nav from './Nav'

import '../style.css'

export default function App() {

  // need useState and useEffect
  // useEffect will be where the fetch request is made 

  return (
    <div>
        <Nav />
        <div id='test-append'>hello</div>
    </div>
  )
}
