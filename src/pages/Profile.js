import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Container from '../components/Container'
import { useFormik } from "formik";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../features/user/userSlice';
import { FiEdit } from "react-icons/fi";

const profileSchema = yup.object({
    firstname: yup.string().required("First name is required"),
    lastname: yup.string().required("Last name is required"),
    email: yup.string().nullable().email("Email should be valid").required("Email Address is Required"),
    mobile: yup.string().required("mobile is required"),
});

const Profile = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state?.auth?.user);
    const [edit, setEdit] = useState(true)

    const formik = useFormik({
        initialValues: {
            firstname: '',
            lastname: '',
            email: '',
            mobile: '',
        },
        validationSchema: profileSchema,
        onSubmit: (values) => {
            dispatch(updateProfile(values))
            setEdit(true)
        },
    });
    return (
        <>
            <BreadCrumb title="my-profile" />
            <Container class1='login-wrapper home-wrapper-2 py-4'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h3 className='my-3'>Update Profile</h3>
                            <FiEdit className='fs-3' onClick={() => setEdit(false)} />
                        </div>
                    </div>
                    <div className='col-12'>
                        <form onSubmit={formik.handleSubmit}>
                            <div className="mb-3">
                                <label htmlFor="example1" className="form-label">first name</label>
                                <input type="text" className="form-control" disabled={edit} id="example1" value={formik.values.firstname}
                                    onChange={formik.handleChange("firstname")}
                                    onBlur={formik.handleBlur("firstname")} />
                                <div className='error'>
                                    {formik.touched.firstname && formik.errors.firstname}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="example2" className="form-label">last name</label>
                                <input type="text" className="form-control" disabled={edit} id="example2" value={formik.values.lastname}
                                    onChange={formik.handleChange("lastname")}
                                    onBlur={formik.handleBlur("lastname")} />
                                <div className='error'>
                                    {formik.touched.lastname && formik.errors.lastname}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                <input type="email" className="form-control" disabled={edit} id="exampleInputEmail1" aria-describedby="emailHelp" value={formik.values.email}
                                    onChange={formik.handleChange("email")}
                                    onBlur={formik.handleBlur("email")} />
                                <div className='error'>
                                    {formik.touched.email && formik.errors.email}
                                </div>
                                <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Mobile No</label>
                                <input type="email" className="form-control" disabled={edit} id="exampleInputEmail1" aria-describedby="emailHelp" value={formik.values.mobile}
                                    onChange={formik.handleChange("mobile")}
                                    onBlur={formik.handleBlur("mobile")} />
                                <div className='error'>
                                    {formik.touched.mobile && formik.errors.mobile}
                                </div>
                            </div>
                            {
                                edit === false && <button type="submit" className="btn btn-primary">Save</button>
                            }
                        </form>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default Profile