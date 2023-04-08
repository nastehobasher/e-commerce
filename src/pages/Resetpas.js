import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';


const Resetpas = () => {
    return (
        <>
            <Meta title={"Reset Password"} />
            <BreadCrumb title="Reset Password" />
            <Container class1='login-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Reset Password</h3>
                            <form action='' className='d-flex gap-15 flex-column'>
                                <Custominput type='password' name='password' placeholder='password' />
                                <Custominput type='password' name='confpassword' placeholder='confirm Password' />

                                <div>
                                    <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Ok</button>
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

export default Resetpas;