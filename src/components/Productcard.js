import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import jacket from "../img/jacket.jpeg";
import jacket1 from "../img/jacket-01.jpeg";
import baby from "../img/baby-02.jpeg";
import shirt from "../img/shirt.jpeg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";

const Productcard = (props) => {
    const { grid } = props;
    let location = useLocation();
    return (
        <>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link to=':id' className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute '>
                        <Link>
                            <img src={wish} alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src={jacket} className='img-fluid' alt='product' />
                        <img src={jacket1} className='img-fluid' alt='product' />
                    </div>
                    <div className='product-details'>
                        <h6>Jacket for women</h6>
                        <h5 className='product-title'>Leather Retail Womens Solid Faux Leather Roadies Jacket</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className='price'>$100.0</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src={prodcompare} alt='compare' />
                            </Link>
                            <Link>
                                <img src={view} alt='view' />
                            </Link>
                            <Link>
                                <img src={addcart} alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div >
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute '>
                        <button className='bg-transparent border-0'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={shirt} className='img-fluid' alt='product' />
                        <img src={shirt} className='img-fluid' alt='product' />
                    </div>
                    <div className='product-details'>
                        <h6>Jacket for women</h6>
                        <h5 className='product-title'>Leather Retail Womens Solid Faux Leather Roadies Jacket</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className='price'>$100.0</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='bg-transparent border-0'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='bg-transparent border-0'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='bg-transparent border-0'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute '>
                        <Link>
                            <img src={wish} alt='wishlist' />
                        </Link>
                    </div>
                    <div className='product-image'>
                        <img src={baby} className='img-fluid' alt='product' />
                        <img src={baby} className='img-fluid' alt='product' />
                    </div>
                    <div className='product-details'>
                        <h6>Jacket for women</h6>
                        <h5 className='product-title'>Leather Retail Womens Solid Faux Leather Roadies Jacket</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className='price'>$100.0</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <Link>
                                <img src={prodcompare} alt='compare' />
                            </Link>
                            <Link>
                                <img src={view} alt='view' />
                            </Link>
                            <Link>
                                <img src={addcart} alt='addcart' />
                            </Link>
                        </div>
                    </div>
                </Link>
            </div>
            <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                <Link className='product-card position-relative'>
                    <div className='wishlist-icon position-absolute '>
                        <button className='bg-transparent border-0'>
                            <img src={wish} alt='wishlist' />
                        </button>
                    </div>
                    <div className='product-image'>
                        <img src={shirt} className='img-fluid' alt='product' />
                        <img src={shirt} className='img-fluid' alt='product' />
                    </div>
                    <div className='product-details'>
                        <h6>Jacket for women</h6>
                        <h5 className='product-title'>Leather Retail Womens Solid Faux Leather Roadies Jacket</h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui
                            blanditiis praesentium voluptatum deleniti atque corrupti quos
                            dolores et quas molestias excepturi sint occaecati cupiditate non
                            provident, similique sunt...
                        </p>
                        <p className='price'>$100.0</p>
                    </div>
                    <div className='action-bar position-absolute'>
                        <div className='d-flex flex-column gap-15'>
                            <button className='bg-transparent border-0'>
                                <img src={prodcompare} alt='compare' />
                            </button>
                            <button className='bg-transparent border-0'>
                                <img src={view} alt='view' />
                            </button>
                            <button className='bg-transparent border-0'>
                                <img src={addcart} alt='addcart' />
                            </button>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    )
}

export default Productcard;