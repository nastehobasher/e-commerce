import React from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import jacket from '../img/jacket.jpeg'
import Container from '../components/Container';

const Checkout = () => {
    return (
        <>
            <Container class1='checkout-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Dookh Store</h3>
                                <nav
                                    style={{
                                        "--bs-breadcrumb-divider": "> "
                                    }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        < li className="breadcrumb-item"><Link to='/cart' className='text-dark total-price'>Cart</Link></li>&nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">information</li>&nbsp; /
                                        < li className="breadcrumb-item active">Shipping</li>&nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h3 className='title total'>Contact information</h3>
                                <p className='user-details total'>Nimco Adam(nimco@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form className='d-flex flex-wrap justify-content-between gap-15'>
                                    <div className='w-100'>
                                        <select className='form-control form-select'>
                                            <option value='' selected disabled>select a country</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control' placeholder='First name(optional)' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control' placeholder='Last name' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control' placeholder='Address' />
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control'
                                            placeholder='appartment' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control'
                                            placeholder='City' />
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select className='form-control form-select'>
                                            <option value='' selected disabled> Select State</option>
                                        </select>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control'
                                            placeholder='ZIP code' />
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark '>
                                                <BiArrowBack className='me-2' /> Return to Cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>
                            <div className='border-bottom py-4'>
                                <div className='d-flex gap-10 mb-2 align-items-center'>
                                    <div className='w-75 d-flex'>
                                        <div className='w-25 position-relative'>
                                            <span
                                                style={{ top: "-10px", right: "2px" }}
                                                className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                            >
                                                1
                                            </span>
                                            <img src={jacket} alt='product' className='img-fluid ' />
                                        </div>
                                        <div>
                                            <h5 className='total-price'>gsadf</h5>
                                            <p className="total-price">/dkddf</p>
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <h5 className="total">$100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="total">Subtotal</p>
                                    <p className="total-price ">$ 100</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 100</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className="total">Total</h4>
                                <h5 className="total-price">$ 100</h5>
                            </div>
                        </div>
                    </div>
                </div >
            </Container >
        </>
    )
}

export default Checkout;