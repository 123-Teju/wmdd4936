import React from 'react'
import {Link} from 'react-router-dom';
 const Navbar=()=> {
  return (
    <header className='navbar'>
        <Link className='brand' to={'/'}>AdNow</Link>
        <nav>
            <ul className='nav-items'>
                  <li className='nav-item'><strong>Welcome to advertisement home!</strong></li>
            </ul>
        </nav>
       
    </header>
  )
}
export default Navbar