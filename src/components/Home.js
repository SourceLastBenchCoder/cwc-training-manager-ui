import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {
    MDBRow,
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBBtn,
    MDBRipple,
    MDBCardGroup,
    MDBCol
} from 'mdb-react-ui-kit';

function Home() {

    const [admin, setAdmin] = useState([])

    useEffect(() => {

        document.title="Training Manager - Home"

        fetch('https://cwc-training-manager-api.herokuapp.com/api/administrator')
            .then(result => result.json())
            .then(resp => {
                setAdmin(resp)
            })
    }, [])

    const cardData = admin.map((result) => {
        return (
            <MDBCol key={result._id}>
                <MDBCard className='h-100'>
                    <Link to={{ pathname: '/admindetail/' + result._id }}>
                        <MDBCardImage
                            src={result.avatar}
                            alt='...'
                            position='top'
                        />
                    </Link>
                    <MDBCardBody>
                        <MDBCardTitle>{result.fullName}</MDBCardTitle>
                        <MDBCardText>
                            {result.emailId}
                            <br />
                            {result.phoneNo}
                            <br />
                            Created On : {result.dateCreated}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        )
    })

    return (
        <MDBRow>
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
            <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
                {cardData}
            </MDBRow>
        </MDBRow>
    )
}

export default Home