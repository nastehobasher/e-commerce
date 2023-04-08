import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Meta from '../components/Meta';
import Container from '../components/Container';

const Comparepro = () => {
    return (
        <>
            <Meta title={"Compare Products"} />
            <BreadCrumb title="Compare Products" />
            <Container class1='compare-product-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='product-card-image'>
                                <img src='img/jacket.jpeg' alt='jacket' className='img-fluid' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    leather jacket
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p>Cendrella</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>type:</h5>
                                        <p>Jacket</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availibality:</h5>
                                        <p>In stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-3'>
                        <div className='compare-product-card position-relative'>
                            <img
                                src='images/cross.svg'
                                alt='cross'
                                className='position-absolute cross img-fluid'
                            />
                            <div className='product-card-image'>
                                <img src='img/jacket.jpeg' alt='jacket' className='img-fluid' />
                            </div>
                            <div className='compare-product-details'>
                                <h5 className='title'>
                                    leather jacket
                                </h5>
                                <h6 className='price mb-3 mt-3'>$ 100</h6>
                                <div>
                                    <div className='product-detail'>
                                        <h5>Brand:</h5>
                                        <p>Cendrella</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>type:</h5>
                                        <p>Jacket</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>color:</h5>
                                        <Color />
                                    </div>
                                    <div className='product-detail'>
                                        <h5>Availibality:</h5>
                                        <p>In stock</p>
                                    </div>
                                    <div className='product-detail'>
                                        <h5>size:</h5>
                                        <div className='d-flex gap-10'>
                                            <p>S</p>
                                            <p>M</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Comparepro;