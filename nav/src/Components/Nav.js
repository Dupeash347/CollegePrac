import React, { useState } from 'react'
import './Nav.css'
const Nav= () => {
  const [user, updateUser] = useState(true);
  return (
    <div className='navBody'>
      <a href='#'>Blogify</a>
      <ul>
        <li>
          <div>About</div>
        </li>
        <li>
          <div>Contact</div>
        </li>
        {
        user?
          <button className='btn' onClick={()=>updateUser(!user)}>Logout</button>:<button className='btn' onClick={()=>updateUser(!user)}>LogIn</button>
        }
      </ul>
    </div>
    )
}

export default Nav;