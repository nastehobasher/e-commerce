import React from 'react'
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';

const SpecialProd = () => {
    return (
        <>
            <div className='col-6 mb-3'>
                <div className='special-product-card'>
                    <div className='d-flex justfy-content-between'>
                        <div>
                            <img src='img/haf.jpeg' alt='haf' className='img-fluid' />
                        </div>
                        <div className='special-product-content'>
                            <h5 className='brand'>Alessandra </h5>
                            <h6 className='title'>
                                Crochet Patterns
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='price'>
                                <span className='red-p'>$ 100.0 </span> &nbsp;<strike>$200</strike>
                            </p>
                            <div className='discount-till d-flex align-items-center gap-10'>
                                <p className='mb-0'>
                                    <b>5</b>days
                                </p>
                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>
                                </div>
                            </div>
                            <div className='prod-count my-4'>
                                <p>Products: 5</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: '25%' }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <Link className='button mt-3'>Add to cart</Link>
                        </div>
                    </div>
                </div>
            </div >
            <div className='col-6 mb-3'>
                <div className='special-product-card'>
                    <div className='d-flex justfy-content-between'>
                        <div>
                            <img src='img/baby-04.jpeg' alt='haf' className='img-fluid' />
                        </div>
                        <div className='special-product-content'>
                            <h5 className='brand'>Alessandra </h5>
                            <h6 className='title'>
                                Crochet Patterns
                            </h6>
                            <ReactStars
                                count={5}
                                size={24}
                                value={3}
                                edit={false}
                                activeColor="#ffd700"
                            />
                            <p className='price'>
                                <span className='red-p'>$ 70.0 </span> &nbsp;<strike>$100</strike>
                            </p>
                            <div className='discount-till d-flex align-items-center gap-10'>
                                <p className='mb-0'>
                                    <b>5</b>days
                                </p>
                                <div className='d-flex gap-10 align-items-center'>
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>:
                                    <span className='badge rounded-circle p-3 bg-danger'>1</span>
                                </div>
                            </div>
                            <div className='prod-count my-4'>
                                <p>Products: 5</p>
                                <div className="progress">
                                    <div
                                        className="progress-bar"
                                        role="progressbar"
                                        style={{ width: '25%' }}
                                        aria-valuenow="25"
                                        aria-valuemin="0"
                                        aria-valuemax="100">
                                    </div>
                                </div>
                            </div>
                            <Link className='button mt-3'>Add to cart</Link>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SpecialProd;