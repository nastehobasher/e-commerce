import React, { useEffect } from 'react'
import ReactStars from "react-rating-stars-component";
import Marquee from 'react-fast-marquee';
import { Link, useNavigate } from 'react-router-dom';
import Blogcard from '../components/Blogcard';
// import Productcard from '../components/Productcard';
import SpecialProd from '../components/SpecialProd';
import Container from '../components/Container';
import { services } from "../utils/Data";
import { useDispatch, useSelector } from 'react-redux';
import { getAllblogs } from '../features/blogs/blogSlice';
import moment from 'moment';
import { getAllporducts } from '../features/products/productSlice';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import jacket from "../img/jacket.jpeg";
import jacket1 from "../img/jacket-01.jpeg";
import addcart from "../images/add-cart.svg";
import view from "../images/view.svg";
import { addtoWishlist } from '../features/products/productSlice';

const Home = () => {
    const blogState = useSelector((state) => state.blog.blog ? state.blog.blog : []);
    const productState = useSelector((state) => state.product.product ? state.product.product : []);
    // console.log("products œœœœœœœœœœ", productState);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        getblogs();
        getProducts();
    }, [])
    const getblogs = () => {
        dispatch(getAllblogs());
    }
    const getProducts = () => {
        dispatch(getAllporducts());
    }
    const addtoWish = (id) => {
        console.log("hhhhhnb", id);
        dispatch(addtoWishlist(id));
    }
    return (
        <>
            <Container class1='home-wrapper-1 py-4'>
                <div className='row bb'>
                    <div className='col-4'>
                        <div className='main-banner p-0'>
                            <div className='main-banner-content position-absolute'>
                                <h4>Latest Collection.</h4>
                                <h5>Women outfit</h5>
                                <p>From $999.00 or $41.64/mo</p>
                                <Link className='button mt-3'>BUY NOW</Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className='main-img'>
                            <img
                                src='/img/ooo.png'
                                className=' rounded-3 balo'
                                alt='main banner' />
                        </div>
                    </div>
                </div>
                {/* <div className="wrapper">
                    <div className="text">
                        <h3>Latest Collection </h3>
                        <h1> Fashion Girl</h1>
                        <p>Kuso dhawow website kayaga oo ay kuugu diyaar yihiin.
                            dhammaan alaabaha aad u baahantihiin doloremque sunt quibusdam quisquam
                            illum? ducimus
                            quasi qua
                        </p>
                        <p class="price">Price: <span>$100</span></p>
                        <button type="button">Shop Now</button>
                    </div>
                    <div>
                        <img
                            src='/img/ooo.png'
                            className=' rounded-3 balo'
                            alt='main banner' />
                    </div>
                </div> */}
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
                        <div className="touch-container">
                            <div className="touch-text">
                                <div className="text-content text-align-center">
                                    <p>Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Voluptas reiciendis perspiciatis ducimus optio
                                        quos iusto iste ab sequi fugit, deleniti a
                                        ipsam itaque repellat, quaerat, molestias exercitationem
                                        voluptatibus praesentium error porro et veniam recusandae numquam eveniet commodi! Asperiores, tenetur
                                        voluptatibus praesentium error porro et veniam recusandae numquam eveniet commodi! Asperiores, tenetur
                                        voluptatibus praesentium error porro et veniam recusandae numquam eveniet commodi! Asperiores, tenetur
                                        voluptatibus praesentium error porro et veniam recusandae numquam eveniet commodi! Asperiores, tenetur
                                        et?
                                        et?</p>
                                </div>
                            </div>
                            {/* <div class="touch-img">
                                <img src="./trn3-removebg-preview.png" alt="" />
                            </div> */}
                        </div>
                        {/* <div className='categories d-flex justify-content-between flex-wrap align-items-center'>
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
                        </div> */}
                    </div>
                </div>
            </Container>

            <Container class1='featured-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Featured Collection</h3><br />
                    </div>
                    {productState && productState?.map((item, index) => {
                        if (item.tags.includes("featured")) {
                            return (
                                <div key={index} className={"col-3"}>
                                    <div className='product-card position-relative'>
                                        <div className='wishlist-icon position-absolute '>
                                            <button className='border-0 bg-transparent' onClick={(e) => { addtoWish(item?._id) }}>
                                                <img src={wish} alt='wishlist' />
                                            </button>
                                        </div>
                                        <div className='product-image'>

                                            <img src={jacket} className='img-fluid' alt='product' />
                                            {/* <img src={jacket1} className='img-fluid' alt='product' /> 
                                            <img src={item?.images[0]?.url} className='img-fluid' alt='product' />
                                            */}
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
                                            <p className='price'>${item?.price}</p>
                                        </div>
                                        <div className='action-bar position-absolute'>
                                            <div className='d-flex flex-column gap-15'>
                                                <Link>
                                                    <img src={prodcompare} alt='compare' />
                                                </Link>
                                                <Link>
                                                    <img onClick={() => navigate("/product/" + item?._id)} src={view} alt='view' />
                                                </Link>
                                                <Link>
                                                    <img src={addcart} alt='addcart' />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })
                    }
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
                    {/* {productState && productState?.map((item, index) => { */}
                    {productState.map((item, index) => {
                        if (item.tags.includes("special")) {
                            // console.log(".... inside if");
                            return (<SpecialProd
                                key={index}
                                id={item._id}
                                brand={item?.brand}
                                title={item?.title}
                                totalrating={item?.totalrating.toString()}
                                price={item?.price}
                                sold={item?.sold}
                                quantity={item?.quantity}

                            />)
                        }
                        // else { return "hello" }

                    })
                    }

                </div>
            </Container>


            <Container class1='Popular-wrapper py-5 home-wrapper-2'>
                <div className='row'>
                    <div className='col-12'>
                        <h3 className='section-heading'> Our Popular Collection</h3>
                    </div>
                    <div className='row'>
                        {productState && productState?.map((item, index) => {
                            if (item.tags.includes("popular")) {
                                return (
                                    <div key={index} className={"col-3"}>
                                        <div className='product-card position-relative'>
                                            <div className='wishlist-icon position-absolute '>
                                                <button className='border-0 bg-transparent' onClick={(e) => { addtoWish(item?._id) }}>
                                                    <img src={wish} alt='wishlist' />
                                                </button>
                                            </div>
                                            <div className='product-image'>
                                                <img src={jacket} className='img-fluid' alt='product' />
                                                {/* <img src={jacket1} className='img-fluid' alt='product' /> */}
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

                                                <p className='price'>${item?.price}</p>
                                            </div>
                                            <div className='action-bar position-absolute'>
                                                <div className='d-flex flex-column gap-15'>
                                                    <Link>
                                                        <img src={prodcompare} alt='compare' />
                                                    </Link>
                                                    <Link>
                                                        <img onClick={() => navigate("/product/" + item?._id)} src={view} alt='view' />
                                                    </Link>
                                                    <Link>
                                                        <img src={addcart} alt='addcart' />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        })
                        }
                    </div>
                </div>
            </Container>


            <Container class1='marque-wrapper py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='marque-inner-wrapper card-wrapper'>
                            <Marquee className='d-flex'>
                                <div className='mx-4 w-25'>
                                    <img src='images/zara.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/gucii.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/dior.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/aba1.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/lv.png' alt='brand' />
                                </div>
                                <div className='mx-4 w-25'>
                                    <img src='images/aba.png' alt='brand' />
                                </div>
                                {/* <div className='mx-4 w-25'>
                                    <img src='images/brand-07.png' alt='brand' />
                                </div> */}
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
                    {blogState && blogState?.map((item, index) => {
                        return (
                            <div className='col-4' key={index}>
                                <Blogcard
                                    id={item?._id}
                                    title={item?.title}
                                    description={item?.description}
                                    // image={item?.image[0]?.url}
                                    date={moment(item?.createdAt).format('MMMM Do YYYY, h:mm a')}
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </Container>
        </>
    )
}

export default Home;