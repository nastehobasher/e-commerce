import React from 'react'
import ReactStars from "react-rating-stars-component";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import jacket from "../img/jacket.jpeg";
import jacket1 from "../img/jacket-01.jpeg";
// import baby from "../img/baby-02.jpeg";
// import shirt from "../img/shirt.jpeg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { useDispatch } from 'react-redux';
import { addtoWishlist } from '../features/products/productSlice';


const Productcard = (props) => {
    const { grid, data } = props;
    const dispatch = useDispatch();
    let location = useLocation();
    const addtoWish = (id) => {
        // console.log("hhhhhnb", id);
        dispatch(addtoWishlist(id));
    }
    console.log("∞∞∞∞> Data: ", data);
    return (
        <>
            {
                data?.map((item, index) => {
                    return (
                        <div
                            key={index}
                            className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
                            <Link className='product-card position-relative'>
                                <div className='wishlist-icon position-absolute '>
                                    <button className='border-0 bg-transparent' onClick={(e) => { addtoWish(item?._id) }}>
                                        <img src={wish} alt='wishlist' />
                                    </button>
                                </div>
                                <div className='product-image'>
                                    <img src={item?.images[0]?.url} className='img-fluid' alt='product' />
                                    {/* <img src={jacket} className='img-fluid' alt='product' />
                                    <img src={jacket1} className='img-fluid' alt='product' /> */}
                                </div>
                                <div className='product-details'>
                                    <h6>{item?.brand}</h6>
                                    <h5 className='product-title'>{item?.title}</h5>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={item?.totalrating.toString()}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className={`description ${grid === 12 ? "d-block" : "d-none"}`}>
                                        {item?.description}
                                    </p>
                                    <p className='price'>${item?.price}</p>
                                </div>
                                <div className='action-bar position-absolute'>
                                    <div className='d-flex flex-column gap-15'>
                                        <Link>
                                            <img src={prodcompare} alt='compare' />
                                        </Link>
                                        <Link to={'/product/' + item?._id}>
                                            <img src={view} alt='view' />
                                        </Link>
                                        <Link>
                                            <img src={addcart} alt='addcart' />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    )
                })
            }
        </>
    )
}

export default Productcard;