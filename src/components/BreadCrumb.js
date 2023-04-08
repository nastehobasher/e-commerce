import React from 'react'
import { Link } from 'react-router-dom';

const BreadCrumb = (props) => {
    const { title } = props;
    return (
        <div className='bread-crumb py-4 mb-0 '>
            <div className='container-xxl'>
                <div className='row'>
                    <div className='col-12 mb-0 '>
                        <p className='text-center'>
                            <Link to='/' className='text-dark'>
                                Home &nbsp;
                            </Link>
                            / {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreadCrumb;