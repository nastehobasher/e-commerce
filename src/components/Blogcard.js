import React from 'react'
import { Link } from 'react-router-dom';

const Blogcard = (props) => {
    const { id, title, description, date } = props;
    return (
        <div className='blog-card'>
            <div className='card-image'>
                <img src='img/qrr.jpeg' className='img-fluid w-100 ' alt='blog' />
            </div>
            <div className='blog-content'>
                <p className='date'>{date}</p>
                <h5 className='title'>
                    {title}
                </h5>
                <p className='desc'>{description?.substr(0, 90) + "..."}</p>
                {/* .substr(0, 100) + "..." */}
                <Link className='button' to={"/blog/" + id}>Read More</Link>
            </div>
        </div>
    )
}

export default Blogcard;