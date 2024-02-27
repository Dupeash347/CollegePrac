import React, { useEffect } from 'react'
import './Blogs.css'
import { peoplee } from '../exefiles/data'

const Blogs = ({ setBlogs, userId }) => {
    const theBlog = peoplee.find(person => person.id === userId);
    const { blogT, rblog } = theBlog
    return (
        <div className='rightBar'>
            {setBlogs &&
                <>

                    <div className="heading">
                        <h1>{blogT}</h1>
                        <span></span>
                    </div>
                    <div className="content">
                        {rblog}
                    </div>

                </>
            }



        </div>
    )
}

export default Blogs;