import React, { useState } from 'react';
import { Link } from 'react-router-dom'
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
                        <Link to="/">
                            <MDBNavbarBrand>CWC Training Manager</MDBNavbarBrand>
                        </Link>
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
                                <MDBNavbarItem>
                                    <Link to='/admin-create'>
                                        <MDBNavbarLink aria-current='page'>
                                            Admin-Create
                                        </MDBNavbarLink>
                                    </Link>
                                </MDBNavbarItem>
                            </MDBNavbarNav>
                        </MDBCollapse>
                    </MDBContainer>
                </MDBNavbar>
            </header>
        </>
    )
}