import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { registeruser, updateProfile } from '../features/user/userSlice';




const SignUp = () => {
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
            password: '',
        },
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            dispatch(updateProfile(values))
        },
    });
    return (
        <>
            <Meta title={"Sign Up"} />
            <BreadCrumb title="Sign Up" />
            <Container class1='login-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Sign Up</h3>
                            <p className='text-center'>Create a acount</p>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex gap-15 flex-column'>
                                <Custominput
                                    type="text"
                                    name="firstname"
                                    placeholder="First Name"
                                    value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")}
                                />
                                <div className='error'>
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>
                                <Custominput
                                    type="text" n
                                    ame="lastname"
                                    placeholder="Last Name"
                                    value={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")}
                                />
                                <div className='error'>
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>
                                <Custominput
                                    type='email'
                                    name='email'
                                    placeholder='Email'
                                    value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <Custominput
                                    type='tel'
                                    name='mobile'
                                    placeholder='Mobile Number '
                                    value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")}
                                />
                                <div className='error'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>

                                <Custominput type='password'
                                    name='password'
                                    placeholder='Password'
                                    value={formik.values.password}
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                />
                                <div className='error'>
                                    {formik.touched.password && formik.errors.password}
                                </div>

                                <div className='mt-3 d-flex flex-column justify-content-center align-items-center gap-15'>
                                    <button className='button border-0'>Sign Up</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </Container >
        </>
    )
}

export default SignUp;