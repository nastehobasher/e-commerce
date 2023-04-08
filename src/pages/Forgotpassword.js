import React from 'react'
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const Forgotpassword = () => {
    return (
        <>
            <Meta title={"Forgot Password"} />
            <BreadCrumb title="Forgot Password" />
            <Container class1='login-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Your Password</h3>
                            <p className='text-center my-3'>we will send you in an email to reset your Password</p>
                            <form action='' className='d-flex gap-15 flex-column'>
                                <Custominput
                                    type='email'
                                    name='email'
                                    placeholder='Email' />
                                <div>
                                    <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                        <button className='button border-0' type='submit'>Submit</button>
                                        <Link to='/login' className='Cancel'>Cancel</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Forgotpassword;