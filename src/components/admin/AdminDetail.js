import React, { useEffect, useState } from 'react'
import { useParams,Link } from 'react-router-dom'
import {
    MDBContainer, MDBRow, MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBBtn
} from 'mdb-react-ui-kit'
import { BASE_URL } from '../constants/AppConst.js'

function AdminDetail() {

    const [admin, setAdmin] = useState({})
    const adminParam = useParams()

    useEffect(() => {

        document.title="Training Manager - Admin Detail"

        fetch(`${BASE_URL}/administrator/` + adminParam.adminId)
            .then(result => result.json())
            .then(res => {
                setAdmin(res)
            })
    }, [])

    return (       
        <MDBContainer style={{marginTop:70}}>
            <MDBRow>
                <h2>Admin Detail</h2>
                <hr/>
                <MDBCard>
                    <MDBRow className='g-0'>
                        <MDBCol md='2'>
                            <MDBCardImage src={admin.avatar} alt='...' fluid  className='img-fluid rounded-circle'/>
                        </MDBCol>
                        <MDBCol md='10'>
                            <MDBCardBody>
                                <MDBCardTitle>{admin.fullName}</MDBCardTitle>
                                <hr/>
                                <MDBCardText>
                                    <b>Email Id : </b>{admin.emailId}
                                    <br/>
                                    <b>Phone No : </b>{admin.phoneNo}
                                    <br/>
                                    <b>Login Id : </b>{admin.loginId}
                                    <br/>
                                    <b>Status : </b>{admin.status}
                                </MDBCardText>
                                <MDBCardText>
                                    <small className='text-muted'>Date Created on {admin.dateCreated} ago</small>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCol>
                    </MDBRow>
                </MDBCard>
            </MDBRow>
            <br/> <br/>
            <Link to={{pathname:"/admin-update/"+admin._id}} className="btn btn-primary">Edit Detail</Link>
            &nbsp;
            <Link to={{pathname:"/"}} className="btn btn-danger">Go To Home</Link>
        </MDBContainer>
    )
}

export default AdminDetail