import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React, { useState, useEffect } from 'react'
import { useParams,Link } from 'react-router-dom'

function AdminUpdate() {
    const initialData = {
        fullName: '',
        emailId: '',
        phoneNo: '',
        avatar: '',
        loginId: '',
        password: '',
        status: ''
    }

    const [admin, setAdmin] = useState(initialData)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const adminParam = useParams()

    const inputChange = (e) => {

        document.title = "Training Manager - Update Admin"

        const { name, value } = e.target
        setAdmin({
            ...admin, [name]: value
        })
    }

    useEffect(() => {
        fetch('https://cwc-training-manager-api.herokuapp.com/api/administrator/' + adminParam.adminId)
            .then(result => result.json())
            .then(res => {
                setAdmin(res)
            })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(admin.fullName)

        fetch("https://cwc-training-manager-api.herokuapp.com/api/administrator/" + adminParam.adminId, {
            method: "put",
            body: JSON.stringify({
                fullName: admin.fullName,
                emailId: admin.emailId,
                phoneNo: admin.phoneNo,
                avatar: admin.avatar,
                loginId: admin.loginId,
                password: admin.password,
                status: admin.status
            }),
            headers: { "Content-Type": "application/json" }
        }).then(result => result.json())
            .then(resp => {
                setIsSubmitted(true)
                setAdmin(initialData)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <MDBContainer style={{ marginTop: 70 }}>
                <MDBRow>
                    <h2>Create New Admin</h2>
                    {(isSubmitted) ? (<p>Data Submitted Successfully</p>) : ("")}
                    <hr />
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput required label='Full Name' id='formControlLg' type='text' size='lg' onChange={inputChange} name="fullName" value={admin.fullName} />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Email Id' id='formControlLg' type='email' size='lg' onChange={inputChange} name="emailId" value={admin.emailId} />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Phone No' id='formControlLg' type='number' size='lg' onChange={inputChange} name="phoneNo" value={admin.phoneNo} />
                        </MDBCol>
                    </MDBRow>
                    <br /><br /><br />
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput required label='LoginId' id='formControlLg' type='text' size='lg' onChange={inputChange} name="loginId" value={admin.loginId} />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Password' id='formControlLg' type='password' size='lg' onChange={inputChange} name="password" value={admin.password} />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Status' id='formControlLg' type='text' size='lg' onChange={inputChange} name="status" value={admin.status} />
                        </MDBCol>
                    </MDBRow>
                    <br /><br /><br />
                    <MDBRow>
                        <MDBCol md='12'>
                            <MDBInput required label='Avatar URL' id='formControlLg' type='text' size='sm' onChange={inputChange} name="avatar" value={admin.avatar} />
                        </MDBCol>
                    </MDBRow>
                    <br /><br />
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBBtn type="submit">Update</MDBBtn>
                            &nbsp;&nbsp;
                            <Link to={{pathname:"/admindetail/"+admin._id}} className="btn btn-primary">Back To Detail</Link>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
        </form>
    )
}

export default AdminUpdate