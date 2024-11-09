import React from 'react'
import { Link } from 'react-router-dom'

const Lay = () => {
  return (
    <>
        <nav>
            <ul>
                <li><Link to="/form">Form</Link></li>
                <li> <Link to="/notes">Notes</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li><Link to="/cart">Cart</Link></li>
            </ul>
        </nav>
    </>
  )
}

export default Lay