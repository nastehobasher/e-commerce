import React, { useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Color from '../components/Color';
import Meta from '../components/Meta';
import Productcard from '../components/Productcard';
import Container from '../components/Container';

const OurStore = () => {
    const [grid, setGrid] = useState(4);
    return (
        <>
            <Meta title={"OurStore"} />
            <BreadCrumb title="OurStore" />
            <Container class1='store-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-3'>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Shop By Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Dresses</li>
                                    <li>Abayas</li>
                                    <li>Skirts</li>
                                    <li>Scarfs</li>
                                    <li>Pants / Trousers</li>
                                    <li>Sock</li>
                                    <li>Sweater</li>
                                    <li>Pajamas</li>

                                </ul>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Filter By</h3>
                            <div>
                                <h5 className='sub-title mt-4'>Availablity</h5>
                                <div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input'
                                            type='checkbox' value='' />
                                        <label className='form-check-label' htmlfor='' >
                                            in stock (1)
                                        </label>
                                    </div>
                                    <div className='form-check'>
                                        <input
                                            className='form-check-input' type='checkbox' value='' id='' />
                                        <label className='form-check-label' for='' >
                                            Out of stock(0)
                                        </label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Price</h5>
                                <div className='d-flex align-items-center gap-10'>
                                    <div className="form-floating">
                                        <input type="email" className="form-control"
                                            // style={{ height: "48px" }}
                                            id="floatingInput" placeholder="From" />
                                        <label htmlfor="floatingInput">From</label>
                                    </div>
                                    <div className="form-floating">
                                        <input type="email" className="form-control"
                                            // style={{ height: "48px" }}
                                            id="floatingInput" placeholder="to" />
                                        <label htmlfor="floatingInput">to</label>
                                    </div>
                                </div>
                                <h5 className='sub-title'>Colors</h5>
                                <div>
                                    <Color />
                                </div>
                                <h5 className='sub-title'>Size</h5>
                                <div className='form-check'>
                                    <input
                                        className='form-check-input'
                                        type='checkbox' value='' id='color-1' />
                                    <label className='form-check-label' htmlfor='color-1' >
                                        S(2)
                                    </label>
                                </div>
                                <div className='form-check'>
                                    <input
                                        className='form-check-input'
                                        type='checkbox' value='' id='color-1' />
                                    <label className='form-check-label' htmlfor='color-1' >
                                        M(2)
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Product Tag</h3>
                            <div>
                                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Dresses
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Shoes
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Skirts
                                    </span>
                                    <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                                        Clothes for Children
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className='filter-card mb-3'>
                            <h3 className='filter-title'>Random Product</h3>
                            <div>
                                <div className='random-product d-flex mb-3'>
                                    <div className='w-50'>
                                        <img
                                            src='img/jacket.jpeg'
                                            alt='jacket'
                                            className='img-fluid' />

                                    </div>
                                    <div className='w-50'>
                                        <h5>Jacket suufa for women</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p>$ 100.5</p>
                                    </div>
                                </div>
                                <div className='random-product d-flex'>
                                    <div className='w-50'>
                                        <img
                                            src='img/page.jpeg'
                                            alt='jacket'
                                            className='img-fluid' />
                                    </div>
                                    <div className='w-50'>
                                        <h5>Shaadh gacmo dheera</h5>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p>$ 100.5</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='filter-sort-grid mb-4'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='mb-0 d-block' style={{ width: 100 }}>Sort By:</p>
                                    <select name='' className='form-control form-select' id=''>
                                        <option value="manual">Featured</option>
                                        <option value="best-selling">Best Selling</option>
                                        <option value="title-asc">Alphabetically, A,Z</option>
                                        <option value="title-desc">Alphabetically, Z,A</option>
                                        <option value="price-asc">Pice, low to high</option>
                                        <option value="price-desc">Pice, high to low</option>
                                        <option value="created-asc">Date, old to new</option>
                                        <option value="created-desc ">Date, new to old</option>
                                    </select>
                                </div>
                                <div className='d-flex align-items-center gap-10'>
                                    <p className='total-product'>21 Products</p>
                                    <div className='d-flex align-items-center gap-10 grid'>
                                        <img
                                            onClick={() => {
                                                setGrid(3);
                                            }}
                                            src='images/gr4.svg'
                                            className='d-block img-fluid' alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(4);
                                            }}
                                            src='images/gr3.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                        <img
                                            onClick={() => {
                                                setGrid(6);
                                            }}
                                            src='images/gr2.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />

                                        <img
                                            onClick={() => {
                                                setGrid(12);
                                            }}
                                            src='images/gr.svg'
                                            className='d-block img-fluid'
                                            alt='grid' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-list pb-5'>
                            <div className='d-flex gap-10 flex-wrap'>
                                <Productcard grid={grid} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default OurStore;