import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import { HiOutlineArrowLeft } from 'react-icons/hi'
import blog from "../img/qrr.jpeg";
import Container from '../components/Container';

const Singleblog = () => {
    return (
        <>
            <Meta title={"Dynamic Blog Name"} />
            <BreadCrumb title="Dynamic Blog Name" />
            <Container class1='blog-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='single-blog-card'>
                            <Link to='/blogs' className='d-flex align-items-center gap-10'>
                                <HiOutlineArrowLeft className='fs-5' />
                                Go back to Blogs</Link>
                            <h3 className='title'>A Beautiful Sunday Morning Renaissance</h3>
                            <img src={blog} alt='blog' className='img-fluid my-4' />
                            <p>
                                You're only as a good as your last collection, which is an enormous
                                You're only as a good as your last collection, which is an enormous
                                You're only as a good as your last collection, which is an
                                You're only as a good as your last collection, which is an enormous
                                You're only as a good as your last collection, which is an enormous
                                You're only as a good as your last collection, which is an
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Singleblog;