import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div style={{marginBottom:'20px'}}>
        <nav class="navbar navbar-dark bg-dark">
            <div class="container-md" style={{display:'flex',justifyContent:'space-between'}}>
                <Link to='/' className='linkStyle'><h4>USER MANAGEMENT</h4></Link>
                <Link to='/newuser' className='linkStyle'><h4>ADD NEW USER</h4></Link>
            </div>
        </nav>
    </div>
  )
}

export default Header