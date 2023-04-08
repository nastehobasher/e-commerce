import React from 'react'
import { Link } from 'react-router-dom';

const Blogcard = () => {
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='img/qrr.jpeg' className='img-fluid w-100 ' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>1 Dec, 2023</p>
                <h5 className='title'>
                    A beuatiful day
                </h5>
                <p className='desc'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt ex maiores dict.</p>
                <Link className='button' to="/blog/:id">Read More</Link>
            </div>
        </div>
    )
}

export default Blogcard;