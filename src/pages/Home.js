import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Blogcard from '../components/Blogcard';
import Productcard from '../components/Productcard';

const Home = () => {
    return (
        <>
            <section className='home-wrapper-1 py-5'>
                <div className='containet-xxl'>
                    <div className='row'>
                        <div className='col-6'>
                            <div className='main-banner position-relative p-2'>
                                <img
                                    src='/img/ssty.png'
                                    className='img-fluid rounded-3 ps-5'
                                    alt='main banner' />
                                <div className='main-banner-content position-absolute'>
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>Women outfit</h5>
                                    <p>From $999.00 or $41.64/mo</p>
                                    <Link className='button'>BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className='col-6'>
                            <div className='d-flex flex-wrap gap-15 justify-content-between align-items-center'>
                                <div className='small-banner position-relative py-2'>
                                    <img
                                        src='/img/kabo-01.jpeg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>Best sake</h4>
                                        <h5>Laptop Max.</h5>
                                        <p>From $999.00 <br /> or $41.64/mo</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative py-3'>
                                    <img
                                        src='/img/kabo-06.jpeg'
                                        className='img-fluid rounded-3 '
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arival</h4>
                                        <h5>But iPad Air</h5>
                                        <p>From $999.00 <br />or $41.64/mo</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative'>
                                    <img
                                        src='/img/kabo-07.jpeg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arival</h4>
                                        <h5>iPad S13+ Pro.</h5>
                                        <p>From $999.00 or $41.64/mo</p>
                                    </div>
                                </div>

                                <div className='small-banner position-relative '>
                                    <img
                                        src='/img/s.jpeg'
                                        className='img-fluid rounded-3'
                                        alt='main banner' />
                                    <div className='small-banner-content position-absolute'>
                                        <h4>New Arival</h4>
                                        <h5>Head Phone</h5>
                                        <p>From $999.00 or $41.64/mo</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='servise d-flex align-items-center justify-content-between'>

                                <div className="d-flex align-items-center gap-15">
                                    <img src='/images/service.png' alt='services' />
                                    <div>
                                        <h6>Free shipping</h6>
                                        <p className='mb-0'>From as orders over $100</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='/images/service-02.png' alt='services' />
                                    <div>
                                        <h6>
                                            Daily Surprise Offers</h6>
                                        <p className='mb-0'>save up to 25% off</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='/images/service-03.png' alt='services' />
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p className='mb-0'>ship with an expert</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <img src='/images/service-04.png' alt='services' />
                                    <div>
                                        <h6>affordable prices</h6>
                                        <p className='mb-0'> get factor direct</p>
                                    </div>
                                </div>
                                <div className="d-flex  align-items-center gap-15">
                                    <img src='/images/service-05.png' alt='services' />
                                    <div>
                                        <h6>Secure Payment</h6>
                                        <p className='mb-0'>100% protected payment</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='home-wrapper-3 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/tv.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Smart tv</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/headphone.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Cameras wach</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/camera.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/tv.jpg' alt='camera' />
                                </div>
                                <div className='d-flex gap align-items-center'>
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src='images/headphone.jpg' alt='camera' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='marque-wrapper py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <div className='marque-inner-wrapper card-wrapper'>
                                <Marquee className='d-flex'>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-01.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-02.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-03.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-04.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-05.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-06.png' alt='brand' />
                                    </div>
                                    <div className='mx-4 w-25'>
                                        <img src='images/brand-07.png' alt='brand' />
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'> Featured Collection</h3>
                        </div>
                        <Productcard />
                        <Productcard />
                        <Productcard />
                        <Productcard />
                    </div>
                </div>
            </section>

            <section className='blog-wrapper py-5 home-wrapper-2'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-12'>
                            <h3 className='section-heading'> Our Latest Blogs</h3>
                        </div>
                        <Blogcard />
                        <Blogcard />
                        <Blogcard />
                        <Blogcard />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;