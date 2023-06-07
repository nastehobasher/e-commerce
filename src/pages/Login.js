import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';
import Custominput from '../components/Custominput';
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../features/user/userSlice';

const loginSchema = yup.object({
    email: yup.string().email("Email should be valid").required("Email Address is Required"),
    password: yup.string().required("password is required"),
});




const Login = () => {
    const authState = useSelector(state => state.auth);
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginSchema,
        onSubmit: (values) => {
            dispatch(loginUser(values));
            navigate("/")
        },
    });
    return (
        <>
            <Meta title={"Login"} />
            <BreadCrumb title="Login" />
            <Container class1='login-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='auth-card'>
                            <h3 className='text-center mb-3'>Login</h3>
                            <form action='' onSubmit={formik.handleSubmit} className='d-flex gap-30 flex-column'>

                                <Custominput type='email' name='email' placeholder='Email'
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")}
                                    value={formik.values.email}
                                />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>

                                <Custominput type='password' name='password'
                                    placeholder='Password'
                                    onChange={formik.handleChange("password")}
                                    onBlur={formik.handleBlur("password")}
                                    value={formik.values.password}
                                />
                                <div className='error'>
                                    {formik.touched.password && formik.errors.password}
                                </div>

                                <div>
                                    <Link to='/forgot-password'>
                                        Forgot Password?
                                    </Link>
                                    <div className='mt-3 d-flex justify-content-center align-items-center gap-15'>
                                        <button className='button border-0'>Login</button>
                                        <Link to='/signup' className='button signup'>SignUp</Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Login;