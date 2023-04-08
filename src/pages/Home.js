import React from 'react'
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';
import Blogcard from '../components/Blogcard';
import Productcard from '../components/Productcard';
import SpecialProd from '../components/SpecialProd';
import Container from '../components/Container';
import { services } from "../utils/Data";

const Home = () => {
    return (
        <>
            <Container class1='home-wrapper-1 py-5'>
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
                                <Link className='button mt-2'>BUY NOW</Link>
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
            </Container>
            <Container class1='home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='service d-flex align-items-center justify-content-between'>
                            {services?.map((i, j) => {
                                return (
                                    <div className="d-flex align-items-center gap-15" key={j}>
                                        <img src={i.image} alt="services" />
                                        <div>
                                            <h6>{i.title}</h6>
                                            <p className="mb-0">{i.tagline}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='home-wrapper-3 py-5'>
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
            </Container>

            <Container class1='featured-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Featured Collection</h3><br />
                    </div>
                    <Productcard />
                </div>
            </Container>

            <Container class1='famous-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='img/perfume-02.jpeg' alt='perfume' className='img-fluid' />
                            <div className='famous-content position-absolute'>
                                <h5>Big Screen</h5>
                                <h6> Elie Saab perfume</h6>
                                <p>From $399 or $16.0/mo. for mo.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='img/baby-01.jpeg' alt='perfume' className='img-fluid ' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Big Screen</h5>
                                <h6 className='text-dark'> Toddler girls</h6>
                                <p className='text-dark'>From $30 or $16.0/mo. for mo.</p>
                            </div>
                        </div>
                    </div>

                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='img/baby-07.jpeg' alt='perfume' className='img-fluid ' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Big Screen</h5>
                                <h6 className='text-dark'> Toddler girls</h6>
                                <p className='text-dark'>From $30<span className='text-light'> or $16.0/mo.</span></p>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='famous-card position-relative'>
                            <img src='img/pant-01.jpeg' alt='perfume' className='img-fluid im' />
                            <div className='famous-content position-absolute'>
                                <h5 className='text-dark'>Big Screen</h5>
                                <h6 className='text-dark'> Pant</h6>
                                <p className='text-dark'>From $30<span className='text-light'> or $16.0/mo.</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <Container class1='special-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Special Products</h3>
                    </div>
                </div>
                <div className='row'>
                    <SpecialProd />
                </div>
            </Container>


            <Container class1='Popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Our Popular Collection</h3>
                    </div>
                    <div className='row'>
                        <Productcard />
                        <Productcard />
                    </div>
                </div>
            </Container>


            <Container class1='marque-wrapper py-5'>
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
            </Container>

            <Container class1='blog-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Our Latest Blogs</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-3'>
                        <Blogcard />
                    </div>
                    <div className='col-3'>
                        <Blogcard />
                    </div>
                    <div className='col-3'>
                        <Blogcard />
                    </div>
                    <div className='col-3'>
                        <Blogcard />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Home;