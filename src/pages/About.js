import React from 'react'
import Meta from '../components/Meta';
import BreadCrumb from '../components/BreadCrumb';

const About = () => {
    return (
        <>
            <Meta title={"About"} />
            <BreadCrumb title="About" />
            <h6 className='text-align-center ps-5'>The He Spoke Style Shop launched in 2017 and has since grown to offer a complete range of ready-to-wear, custom, and
                bespoke menswear online with complimentary wardrobe consultations and personal styling via Zoom appointments.</h6>
        </>
    )
}

export default About;