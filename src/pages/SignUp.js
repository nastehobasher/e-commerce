import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';

const SignUp = () => {
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <Container class1='login-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <p className='text-center'>Create a acount</p>
                            <form action='' className='d-flex gap-15 flex-column'>
                                <Custominput type="text" name="name" placeholder="Name" />
                                <Custominput
                                    type='email'
                                    name='email'
                                    placeholder='Email' />
                                <Custominput
                                    type='tel'
                                    name='mobile'
                                    placeholder='Phone Number ' />

                                <Custominput type='password'
                                    name='password'
                                    placeholder='Password' />

                                <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                    <button className='button border-0'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </Container >
        </>
    )
}

export default SignUp;