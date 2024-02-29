import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav.js';
import Users from './Components/Users.js';
import Blogs from './Components/Blogs.js';
import { useEffect, useState } from 'react';
import React from 'react';


function App() {
  const [setBlogs, updateBlogs] = useState(false);
  const [userId, setUser] = useState(false);

  

  return (
    <div>
      <Nav></Nav>
      <div style={{ display: 'flex' }}>
        <Users updateBlogs={updateBlogs} setBlogs={setBlogs} setUser={setUser} ></Users>
        <Blogs setBlogs={setBlogs} userId={userId}></Blogs>
      </div>

    </div >

  );
}

export default App;
