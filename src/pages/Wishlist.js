import React, { useEffect } from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { getUserProductWishlist } from '../features/user/userSlice';
import { addtoWishlist } from '../features/products/productSlice';

const Wishlist = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getwishlistfromDb();
    }, []);
    const getwishlistfromDb = () => {
        dispatch(getUserProductWishlist());
    }
    const wishlistState = useSelector(state => state?.auth?.wishlist?.wishlist);
    const removefromwishlist = (id) => {
        dispatch(addtoWishlist(id));
        setTimeout(() => {
            dispatch(getUserProductWishlist());
        }, 300);
    }
    // console.log(";lk", wishlistState);
    return (
        <>
            <Meta title={"Wishlist"} />
            <BreadCrumb title="Wishlist" />
            <Container className='wishlist-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    {wishlistState && wishlistState.length === 0 && <div className='text-center fs-4'> No Data </div>}
                    {wishlistState && wishlistState?.map((item, index) => {
                        return (
                            <div className='col-3' key={index}>
                                <div className='wishlist-card position-relative'>
                                    <img onClick={() => { removefromwishlist(item?._id) }}
                                        src='images/cross.svg'
                                        alt='cross'
                                        className='position-absolute cross img-fluid'
                                    />
                                    <div className='wishlist-card-image '>
                                        <img src='img/jacket.jpeg' alt='jacket' className='img-fluid w-100'
                                        />
                                    </div>
                                    <div className='px-3 py-3'>
                                        <h5 className='title'>{item?.title}</h5>
                                        <h6 className='price'>$ {item?.price}</h6>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    }

                </div>
            </Container>
        </>
    )
}

export default Wishlist;