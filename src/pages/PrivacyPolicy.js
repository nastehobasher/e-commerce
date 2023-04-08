import React from 'react'
import BreadCrumb from '../components/BreadCrumb';
import Meta from '../components/Meta';
import Container from '../components/Container';

const PrivacyPolicy = () => {
    return (
        <>
            <Meta title={"Privacy Policy"} />
            <BreadCrumb title="Privacy Policy" />
            <Container class1='policy-wrapper home-wrapper-2 py-5'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='policy'>
                            <h3>The standard lorem commerce </h3>
                            <p>-commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted </p>
                            <h3>The standard lorem commerce </h3>
                            <p>-commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted </p>
                            <h3>The standard lorem commerce </h3>
                            <p>-commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted commerce is becoming more widely accepted </p>
                        </div>
                    </div>
                </div>
            </Container>
        </>
    )
}

export default PrivacyPolicy;