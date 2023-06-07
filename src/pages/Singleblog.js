import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link, useLocation } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog from "../img/qrr.jpeg";
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getABlog } from '../features/blogs/blogSlice';

const Singleblog = () => {
    const blogState = useSelector((state) => state.blog.singleblog ? state.blog.singleblog : []);
    const location = useLocation();
    const getBlogId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    useEffect(() => {
        getblog();
    }, [])
    const getblog = () => {
        dispatch(getABlog(getBlogId));
    }
    return (
        <>
            <Meta title={blogState?.title} />
            <BreadCrumb title={blogState?.title} />
            <Container class1='blog-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-5' />
                                Go back to Blogs</Link>
                            <h3 className='title'>{blogState?.title} </h3>
                            <img src={blog} alt='blog' className='img-fluid my-4' />
                            {/* {blogState?.images[0].url ? blogState?.images[0].url:blog}  */}
                            <p>
                                {blogState?.description}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Singleblog;