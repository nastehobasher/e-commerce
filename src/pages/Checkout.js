import React, { useEffect, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import jacket from '../img/jacket.jpeg'
import Container from '../components/Container';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from "formik";
import * as yup from 'yup';

const shippingSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    address: yup.string().required("Address is required"),
    city: yup.string().required("city is Required"),
    country: yup.string().required("country is required"),
    pincode: yup.string().required("pincode is required"),
});


const Checkout = () => {
    const dispatch = useDispatch();
    const cartState = useSelector(state => state.auth.cartProducts);
    const [totalAmount, setTotalAmount] = useState(null);
    const [shippingInfo, setShippingInfo] = useState(null);

    useEffect(() => {
        let sum = 0;
        for (let index = 0; index < cartState?.length; index++) {
            sum = sum + (Number(cartState[index].quantity) * cartState[index].price)
            setTotalAmount(sum)
        }
    }, [cartState])
    // console.log("cart", cartState);
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            address: '',
            city: '',
            country: '',
            pincode: '',
            other: '',
        },
        validationSchema: shippingSchema,
        onSubmit: (values) => {
            setShippingInfo(values)
            // stringfy values
            // dispatch(registeruser(values))
        },
    });
    return (
        <>
            <Container class1='checkout-wrapper home-wrapper-2 py-5'>
                <div className='container-xxl'>
                    <div className='row'>
                        <div className='col-7'>
                            <div className='checkout-left-data'>
                                <h3 className='website-name'>Dookh Store</h3>
                                <nav
                                    style={{
                                        "--bs-breadcrumb-divider": "> "
                                    }} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        < li className="breadcrumb-item"><Link to='/cart' className='text-dark total-price'>Cart</Link></li>&nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">information</li>&nbsp; /
                                        < li className="breadcrumb-item active">Shipping</li>&nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">Payment</li>
                                    </ol>
                                </nav>
                                <h3 className='title total'>Contact information</h3>
                                <p className='user-details total'>Nimco Adam(nimco@gmail.com)</p>
                                <h4 className='mb-3'>Shipping Address</h4>
                                <form className='d-flex flex-wrap justify-content-between gap-15' onSubmit={formik.handleSubmit}>
                                    <div className='w-100'>
                                        <select
                                            className='form-control form-select'
                                            value={formik.values.country}
                                            onChange={formik.handleChange("country")}
                                            onBlur={formik.handleBlur("country")}
                                        >
                                            <option selected >select a country</option>
                                            <option value='' selected >india</option>
                                        </select>
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.country && formik.errors.country}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='First name(optional)'
                                            value={formik.values.firstname}
                                            onChange={formik.handleChange("firstname")}
                                            onBlur={formik.handleBlur("firstname")}
                                        />
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.firstname && formik.errors.firstname}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control' placeholder='Last name'
                                            value={formik.values.lastname}
                                            onChange={formik.handleChange("lastname")}
                                            onBlur={formik.handleBlur("lastname")}
                                        />
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.lastname && formik.errors.lastname}
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control' placeholder='Address'
                                            value={formik.values.address}
                                            onChange={formik.handleChange("address")}
                                            onBlur={formik.handleBlur("address")}
                                        />
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.address && formik.errors.address}
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <input type='text' className='form-control'
                                            placeholder='appartment'
                                            value={formik.values.other}
                                            onChange={formik.handleChange("other")}
                                            onBlur={formik.handleBlur("other")}
                                        />
                                        {/* <div className='error ms-2 my-1'>
                                            {formik.touched.city && formik.errors.city}
                                </div>*/}
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control'
                                            placeholder='City'
                                            value={formik.values.city}
                                            onChange={formik.handleChange("city")}
                                            onBlur={formik.handleBlur("city")}
                                        />
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.city && formik.errors.city}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <select className='form-control form-select'
                                            value={formik.values.state}
                                            onChange={formik.handleChange("state")}
                                            onBlur={formik.handleBlur("state")}
                                        >
                                            <option value='' selected disabled> Select State</option>
                                        </select>
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.state && formik.errors.state}
                                        </div>
                                    </div>
                                    <div className='flex-grow-1'>
                                        <input type='text' className='form-control'
                                            placeholder='ZIP code'
                                            value={formik.values.pincode}
                                            onChange={formik.handleChange("pincode")}
                                            onBlur={formik.handleBlur("pincode")}
                                        />
                                        <div className='error ms-2 my-1'>
                                            {formik.touched.pincode && formik.errors.pincode}
                                        </div>
                                    </div>
                                    <div className='w-100'>
                                        <div className='d-flex justify-content-between align-items-center'>
                                            <Link to='/cart' className='text-dark '>
                                                <BiArrowBack className='me-2' /> Return to Cart</Link>
                                            <Link to='/cart' className='button'>Continue to Shipping</Link>
                                            <button className='bton' type='submit'>Place Order</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-5'>

                            <div className='border-bottom py-4'>
                                {
                                    cartState && cartState?.map((item, index) => {
                                        return (<div key={index} className='d-flex gap-10 mb-2 align-items-center'>
                                            <div className='w-75 d-flex'>
                                                <div className='w-25 position-relative'>
                                                    <span
                                                        style={{ top: "-10px", right: "2px" }}
                                                        className="badge bg-secondary text-white rounded-circle p-2 position-absolute"
                                                    >
                                                        {item?.quantity}
                                                    </span>
                                                    <img src={jacket} alt='product' className='img-fluid ' />
                                                    {/* item?.productId?.images[0]?.url */}
                                                </div>
                                                <div>
                                                    <h5 className='total-price'>{item?.productId.title}</h5>
                                                    <p className="total-price">{item?.color?.title}</p>
                                                </div>
                                            </div>
                                            <div className='flex-grow-1'>
                                                <h5 className="total">${item?.price * item?.quantity}</h5>
                                            </div>
                                        </div>)
                                    })
                                }

                            </div>
                            <div className='border-bottom py-4'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className="total">Subtotal</p>
                                    <p className="total-price ">$ {totalAmount ? totalAmount : "0"}</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='mb-0 total'>Shipping</p>
                                    <p className='mb-0 total-price'>$ 3</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-between align-items-center border-bottom py-4'>
                                <h4 className="total">Total</h4>
                                <h5 className="total-price">$ {totalAmount ? totalAmount + 5 : "0"}</h5>
                            </div>
                        </div>
                    </div>
                </div >
            </Container >
        </>
    )
}

export default Checkout;