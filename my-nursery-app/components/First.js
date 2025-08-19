import React from 'react'
import './First.css'

const First = () => {
  return (
    <div className="main-container">
      <h2>Creating the Nursery Page</h2>
      <p>Welcome to our nursery landing page. Choose your city and explore flowers!</p>

      <select>
        <option>Chennai</option>
        <option>Bangalore</option>
        <option>Mumbai</option>
        <option>Delhi</option>
      </select>

      <ul>
        <li>Rose</li>
        <li>Lily</li>
        <li>Tulip</li>
        <li>Sunflower</li>
        <li>Jasmine</li>
      </ul>
    
    </div>
  )
}

export default First
