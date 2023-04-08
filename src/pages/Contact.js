import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import { AiOutlineHome, AiOutlineMail } from 'react-icons/ai';
import { BiPhoneCall } from 'react-icons/bi';
import { BsInfoCircle } from 'react-icons/bs';
import Container from '../components/Container';

const Contact = () => {
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
                                <form action='' className='d-flex flex-column gap-15'>
                                    <div>
                                        <input
                                            type='text'
                                            className='form-control'
                                            placeholder='Name' />
                                    </div>
                                    <div>
                                        <input
                                            type='email'
                                            className='form-control'
                                            placeholder='Email' />
                                    </div>
                                    <div>
                                        <input
                                            type='tel'
                                            className='form-control'
                                            placeholder='Phone number' />
                                    </div>
                                    <div>
                                        <textarea
                                            name=''
                                            className='w-100 form-control'
                                            cols='30'
                                            rows='5'
                                            placeholder='Comments'
                                        >
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