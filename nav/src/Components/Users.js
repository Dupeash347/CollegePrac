import React, { useId, useState } from 'react';
import { peoplee } from '../exefiles/data';
import './Users.css';

const Users = ({ updateBlogs, setBlogs, setUser }) => {
  const [people, setPeople] = useState(peoplee);
  

  return (
    <div className='leftBar'>
      {people.map((person) => {
        const { id, name, images } = person;
        return (
          <div className='card' key={id} onClick={() => { updateBlogs(!setBlogs); setUser(id); }} style={{ cursor: 'pointer' }}>
            <div className='g-one'>
              {images && images.length > 0 && ( // Check if images array exists and has elements
                <img src={images[0]?.small.url} alt={name} /> // Corrected image source access
              )}
            </div>
            <div className='g-two'>
              <h4>{name}</h4>
              <p>lorem ipsum....</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
