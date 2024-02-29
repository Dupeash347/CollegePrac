import React from 'react';
import './Blogs.css';
import { peoplee } from '../exefiles/data';

const Blogs = ({ setBlogs, userId }) => {
    let content = null; 

    if (userId) {
        const theBlog = peoplee.find(person => person.id === userId);
        if (theBlog) {
            const { blogT, rblog } = theBlog; 

          
            content = (
                <>
                    <div className="heading">
                        <h1>{blogT}</h1>
                        <span></span>
                    </div>
                    <div className="content">
                        {rblog}
                    </div>
                </>
            );
        }
    }

    return (
        <div className='rightBar'>
            {setBlogs && content} 
        </div>
    );
};

export default Blogs;
