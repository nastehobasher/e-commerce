import React, { useEffect, useState } from 'react'
import ReactStars from 'react-rating-stars-component';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Productcard from '../components/Productcard';
import ReactImageZoom from 'react-image-zoom';
import Color from '../components/Color';
import { TbGitCompare } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import Container from '../components/Container';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAPorduct } from '../features/products/productSlice';
import { toast } from "react-toastify";
import { addProductToCart, getUserCart } from '../features/user/userSlice';

// import jacket from '/public/img';

const SingleProd = () => {
    const [color, setcolor] = useState(null);
    const [quantity, setquantity] = useState(1);
    const [alreadyAdded, setAlredayAdded] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const getProductId = location.pathname.split("/")[2];
    const dispatch = useDispatch();
    const productState = useSelector(state => state.product.singleproduct);
    const cartState = useSelector(state => state.auth.cartProducts);
    // console.log(productState);  
    useEffect(() => {
        dispatch(getAPorduct(getProductId))
        dispatch(getUserCart())
    }, [])

    // useEffect(() => {
    //     for (let index = 0; index < cartState.length; index++) {
    //         if (getProductId === cartState[index]?.productId?._id) {
    //             setAlredayAdded(true);
    //         }
    //     }
    // }, [])

    const uploadCart = () => {
        if (color === null) {
            toast.error("please Choose a color")
            return false
        } else {
            dispatch(addProductToCart({ productId: productState?._id, quantity, color, price: productState?.price }))
            navigate("/cart")
        }
    }

    const props = {
        width: 400,
        height: 600,
        zoomWidth: 600,
        img: "https://i5.walmartimages.com/asr/0bec01aa-0156-4224-8150-2f9ae86a812a.0b3dc0fcbc1b0db776a812e8812e4602.jpeg"
        //  <img src={item?.images[0]?.url} className='img-fluid' alt='product' />
    };
    const [orderProduct, setorderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title={"Single Product"} />
            <BreadCrumb title="Single Product" />
            <Container class1='main-product-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-6'>
                        <div className='main-product-image'>
                            <div><ReactImageZoom {...props} />,</div>
                        </div>
                        <div className='other-product-image d-flex flex-wrap gap-15'>
                            {/* {productState?.image.map((item, index) => {
                                return <div>
                                    <img
                                        src={item?.url}
                                        className='img-fluid' alt='' />
                                </div>
                            })} 
                            productState?.image[0]?.url ? productState?.image[0]?.url : 
                            */}
                            <div>
                                <img src='https://i5.walmartimages.com/asr/41008c4b-b542-4b3c-ac81-c770216e2548.c8ad738a3cd64aac01a8f1678a77fefe.jpeg'
                                    className='img-fluid' alt='' />
                            </div>
                            <div>
                                <img src='https://cdn.shopify.com/s/files/1/0783/1357/products/20221019_215554_0000_grande.png?v=1666239999'
                                    className='img-fluid' alt='' />
                            </div>
                        </div>
                    </div>
                    <div className='col-6'>
                        <div className='main-product-details'>
                            <div className='border-bottom'>
                                <h3 className='title'>{productState?.title}</h3>
                            </div>
                            <div className='border-bottom py-3'>
                                <p className='price'>$ {productState?.price}</p>
                                <div className='d-flex align-items-center gap-10'>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={productState?.totalrating}
                                        edit={false}
                                        activeColor="#ffd700"
                                    />
                                    <p className='mb-0 t-review'>(2 reviews)</p>
                                </div>
                                <a className='review-btn' href='#review'>Write a Review</a>
                            </div>
                            <div className=' py-3'>
                                <div className='d-flex align-items-center gap-10 my-3'>
                                    <h3 className='product-heading'>Type:</h3> <p className='product-data'>winter Coat</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-3'>
                                    <h3 className='product-heading'>Brand:</h3> <p className='product-data'>{productState?.brand}</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-3'>
                                    <h3 className='product-heading'>Category:</h3> <p className='product-data'>{productState?.category}</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-3'>
                                    <h3 className='product-heading'>Tags:</h3> <p className='product-data'>{productState?.tags}</p>
                                </div>
                                <div className='d-flex align-items-center gap-10 my-3'>
                                    <h3 className='product-heading'>Availablity:</h3> <p className='product-data'>In Stock</p>
                                </div>
                                <div className='d-flex flex-column gap-10 mt-2 mb-3'>
                                    <h3 className='product-heading'>Size:</h3>
                                    <div className='d-flex flex-wrap gap-15'>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            S
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            M
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XL
                                        </span>
                                        <span className="badge border border-1 bg-white text-dark border-secondary">
                                            XXL
                                        </span>
                                    </div>
                                </div>
                                {
                                    alreadyAdded === false && <>
                                        <div className="d-flex gap-10 flex-column mt-2 mb-3">
                                            <h3 className="product-heading">Color :</h3>
                                            <Color setColor={setcolor} colorData={productState?.color} />
                                        </div>
                                    </>
                                }
                                <div className='d-flex align-items-center flex-row gap-15 mt-2 mb-3'>
                                    {
                                        alreadyAdded === false && <>
                                            <h3 className='product-heading'>Quantity:</h3> <div className=''>
                                                <input
                                                    type='number'
                                                    name=''
                                                    min={1}
                                                    max={10}
                                                    className='form-control'
                                                    style={{ width: '70px' }}
                                                    id=''
                                                    onChange={(e) => { setquantity(e.target.value) }}
                                                    value={quantity}
                                                />
                                            </div>
                                        </>
                                    }
                                    <div className="d-flex align-items-center gap-30 ms-5">
                                        {/* {alreadyadded?"ms-0:ms-5" + 'd-flex align-items-center gap-30 ms-5'} */}
                                        <button
                                            className="button border-0"
                                            // data-bs-toggle="modal"
                                            // data-bs-target="#staticBackdrop"
                                            type="button"
                                            onClick={() => { uploadCart() }}
                                        //onClick={() => { alreadyAdded ? navigate('/cart') : uploadCart() }}

                                        >
                                            {alreadyAdded ? "Go to Cart" : "Add to Cart"}
                                        </button>
                                        {/* <button className="button signup">Buy It Now</button> */}
                                    </div>
                                </div>
                                <div className="d-flex align-items-center gap-15">
                                    <div>
                                        <a href="!#">
                                            <TbGitCompare className="fs-5 me-2" /> Add to Compare
                                        </a>
                                    </div>
                                    <div>
                                        <a href="!#">
                                            <AiOutlineHeart className="fs-5 me-2" /> Add to Wishlist
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading">Shipping & Returns :</h3>
                                    <p className="product-data">
                                        Free shipping and returns available on all orders! <br /> We
                                        ship all US domestic orders within
                                        <b>5-10 business days!</b>
                                    </p>
                                </div>
                                <div className="d-flex gap-10 flex-column  my-3">
                                    <h3 className="product-heading"> Product Link :</h3>
                                    <a href='javascript:void(0)'
                                        onClick={() => {
                                            copyToClipboard(
                                                window.location.href
                                            );
                                        }} >
                                        Copy product Link
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='description-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h4>Description</h4>
                        <div className='bg-white p-4'>
                            <p>{productState?.description}</p>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='reviews-wrapper home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 id='review'>Reviews</h3>
                        <div className='review-inner-wrapper'>
                            <div className='review-head d-flex justify-content-between align-items-end'>
                                <div>
                                    <h4 className='mb-2'>Customer Reviews</h4>
                                    <div className='d-flex align-items-center gap-10'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className='mb-0'>Based on 2 reviews</p>
                                    </div>
                                </div>
                                {orderProduct && (
                                    <div>
                                        <a className='text-dark text-decoration-underline' href='!#'>Write a Review</a>
                                    </div>
                                )}
                            </div>
                            <div id='review' className='review-form py-4'>
                                <h4 className=''>Write a Review</h4>
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <div>
                                        <label className=''>Body of Reviews(1500)</label>
                                        <textarea
                                            name=''
                                            className='w-100 form-control py-2'
                                            cols='30'
                                            rows='8'
                                            placeholder='Write your comments here'
                                        >
                                        </textarea>
                                    </div>
                                    <div className=' d-flex justify-content-end'>
                                        <button className='button border-0'>Submit Review</button>
                                    </div>
                                </form>
                            </div>
                            <div className='reviews mt-4'>
                                <div className='review'>
                                    <div className='d-flex align-items-center gap-10'>
                                        <h6 className='mb-0'>jacket</h6>
                                        <ReactStars
                                            count={5}
                                            size={20}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                    </div>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium congue elit eget dignissim. Integer nec porttitor nisl, id imperdiet magna. In vitae elementum nulla, at feugiat augue. Praesent dictum felis vel ipsum congue,  Praesent dictum felis vel ipsum congue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1='Popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Our Popular Collection</h3>
                    </div>
                    <div className='row'>
                        <Productcard />
                    </div>
                </div>
            </Container>
        </>
    )
}

export default SingleProd;