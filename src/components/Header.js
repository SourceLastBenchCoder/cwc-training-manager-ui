import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBNavbarToggler,
    MDBNavbarBrand,
    MDBCollapse,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Header() {
    const [showNavColor, setShowNavColor] = useState(false);

    return (
        <>
            <header>
                <MDBNavbar expand='lg' dark bgColor='primary' fixed='top'>
                    <MDBContainer fluid>
                        <MDBNavbarBrand href='#'>CWC Training Manager</MDBNavbarBrand>
                        <MDBNavbarToggler
                            type='button'
                            data-target='#navbarColor02'
                            aria-controls='navbarColor02'
                            aria-expanded='false'
                            aria-label='Toggle navigation'
                            onClick={() => setShowNavColor(!showNavColor)}
                        >
                            <MDBIcon icon='bars' fas />
                        </MDBNavbarToggler>
                        <MDBCollapse show={showNavColor} navbar>
                            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
                                <MDBNavbarItem className='active'>
                                    <Link to='/'>
                                        <MDBNavbarLink aria-current='page'>
                                            Home
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
                <div
                    className='p-5 text-center bg-image'
                    style={{ backgroundImage: "url('https://mdbootstrap.com/img/new/slides/041.webp')", height: '400px', marginTop: 70 }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Welcome to CWC Training Manager</h1>
                                <h4 className='mb-3'>You Can do many stufs here</h4>
                                <MDBBtn tag="a" outline size="lg">
                                    Start Learning
                                </MDBBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}