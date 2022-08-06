import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React, { useState } from 'react'

function AdminCreate() {
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

    const inputChange = (e) => {
        const { name, value } = e.target
        setAdmin({
            ...admin, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert(admin.fullName)

        fetch("https://cwc-training-manager-api.herokuapp.com/api/administrator/", {
            method: "post",
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
                            <MDBInput required label='Full Name' id='formControlLg' type='text' size='lg' onChange={inputChange} name="fullName" />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Email Id' id='formControlLg' type='email' size='lg' onChange={inputChange} name="emailId" />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Phone No' id='formControlLg' type='number' size='lg' onChange={inputChange} name="phoneNo" />
                        </MDBCol>
                    </MDBRow>
                    <br /><br /><br />
                    <MDBRow>
                        <MDBCol md='4'>
                            <MDBInput required label='LoginId' id='formControlLg' type='text' size='lg' onChange={inputChange} name="loginId" />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Password' id='formControlLg' type='password' size='lg' onChange={inputChange} name="password" />
                        </MDBCol>
                        <MDBCol md='4'>
                            <MDBInput required label='Status' id='formControlLg' type='text' size='lg' onChange={inputChange} name="status" />
                        </MDBCol>
                    </MDBRow>
                    <br /><br /><br />
                    <MDBRow>
                        <MDBCol md='12'>
                            <MDBInput required label='Avatar URL' id='formControlLg' type='text' size='sm' onChange={inputChange} name="avatar" />
                        </MDBCol>
                    </MDBRow>
                    <br /><br />
                    <MDBRow>
                        <MDBCol md='2'>
                            <MDBBtn type="submit">Submit</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
        </form>
    )
}

export default AdminCreate