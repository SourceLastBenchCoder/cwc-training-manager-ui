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
            <MDBRow className='row-cols-1 row-cols-md-5 g-4'>
                {cardData}
            </MDBRow>
        </MDBRow>
    )
}

export default Home