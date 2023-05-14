import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav>
       <div class="logo">
            <p>website</p>

        </div>
        <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/Veg">veg</Link>
          </li>

          
          <li>
            <Link to="/Nonveg">Non veg</Link>
          </li>
        </ul>
    
    </nav>

  )
}

export default Navbar