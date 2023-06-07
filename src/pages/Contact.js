import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import Container from '../components/Container';
import * as yup from 'yup';
import { useFormik } from "formik";
import { useDispatch } from 'react-redux';
import { createQuery } from '../features/contact/contactSlice';

const contactSchema = yup.object({
    name: yup.string().required("name is required"),
    email: yup.string().nullable().email("Email should be valid").required("Email is Required"),
    mobile: yup.string().nullable().default('').required("mobile is required"),
    comment: yup.string().default('').nullable().required("comment is required")
});


const Contact = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            mobile: '',
            comment: ''
        },
        validationSchema: contactSchema,
        onSubmit: (values) => {
            dispatch(createQuery(values))
        },
    });
    return (
        <>
            <Meta title={"Contact"} />
            <BreadCrumb title="Contact Us" />
            <Container className='blog-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62952.590628638165!2d44.064354200000004!3d9.5488999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1628c09c8437dc31%3A0xfe13a11254e24082!2sUniversity%20of%20Hargeisa!5e0!3m2!1sen!2sso!4v1680568826526!5m2!1sen!2sso"
                            width="600"
                            height="450"
                            className='border-0 w-100'
                            allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='col-12 mt-5'>
                        <div className='contact-liner-wrapper d-flex justify-content-between'>
                            <div>
                                <h3 className='contact-title mb-4'>Contact</h3>
                                <form action='' onSubmit={formik.handleSubmit} className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Name'
                                            name='name'
                                            onChange={formik.handleChange("name")}
                                            onBlur={formik.handleBlur("name")}
                                            value={formik.values.name}
                                        />
                                        <div className='error'>
                                            {formik.touched.name && formik.errors.name}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            className='form-control'
                                            placeholder='Email'
                                            name='email'
                                            onChange={formik.handleChange("email")}
                                            onBlur={formik.handleBlur("email")}
                                            value={formik.values.email}
                                        />
                                        <div className='error'>
                                            {formik.touched.email && formik.errors.email}
                                        </div>
                                    </div>
                                    <div>
                                        <input
                                            type='tel'
                                            className='form-control'
                                            placeholder='Mobile Number'
                                            name='mobile'
                                            onChange={formik.handleChange("mobile")}
                                            onBlur={formik.handleBlur("mobile")}
                                            value={formik.values.mobile}
                                        />
                                        <div className='error'>
                                            {formik.touched.mobile && formik.errors.mobile}
                                        </div>
                                    </div>
                                    <div>
                                        <textarea
                                            className='w-100 form-control'
                                            cols='30'
                                            rows='5'
                                            placeholder='Comments'
                                            name='comment'
                                            onChange={formik.handleChange("comment")}
                                            onBlur={formik.handleBlur("comment")}
                                            value={formik.values.comment}
                                        >
                                            <div className='error'>
                                                {formik.touched.comment && formik.errors.comment}
                                            </div>
                                        </textarea>
                                    </div>
                                    <div>
                                        <button className='button border-0'>Submit</button>
                                    </div>
                                </form>
                            </div>
                            <div>
                                <h3 className='contact-title mb-4'>Get in touch with us</h3>
                                <div>
                                    <ul className='ps-0'>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <AiOutlineHome className='fs-5' />
                                            <address className='mb-0'>Near Hotel Guleid</address>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'>
                                            <BiPhoneCall className='fs-5' />
                                            <a href='+252633003794'>+252633003794</a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'><AiOutlineMail className='fs-5' />
                                            <a href='dookhstore12@gmail.com'>dookhstore12@gmail.com</a>
                                        </li>
                                        <li className='mb-3 d-flex gap-15 align-items-center'><BsInfoCircle className='fs-5' />
                                            <p className='mb-0'>Saturday - Thrusday 10 AM - 8 PM</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Contact;