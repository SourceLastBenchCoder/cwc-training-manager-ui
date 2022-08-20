import { MDBContainer, MDBInput, MDBRow, MDBCol, MDBBtn } from 'mdb-react-ui-kit'
import React, { useEffect, useState } from 'react'
import { BASE_URL } from '../constants/AppConst.js'


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
    const [image, setImage] = useState({ preview: '', data: '' })
    const [isSubmitted, setIsSubmitted] = useState(false)

    useEffect(() => {
        document.title = "Training Manager - Create Admin"
    })

    const inputChange = (e) => {
        const { name, value } = e.target
        setAdmin({
            ...admin, [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        let formData = new FormData()
        formData.append('file', image.data)
        fetch(`${BASE_URL}/upload`, {
            method: 'POST',
            body: formData,
        })

        fetch(`${BASE_URL}/administrator/`, {
            method: "post",
            body: JSON.stringify({
                fullName: admin.fullName,
                emailId: admin.emailId,
                phoneNo: admin.phoneNo,
                avatar: image.data.name,
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

    const handleFileChange = (e) => {
        console.log(e.target.files[0])
        const img = {
            preview: URL.createObjectURL(e.target.files[0]),
            data: e.target.files[0],
        }
        setImage(img)
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
                            {image.preview && <img src={image.preview} width='100' height='100' />}
                            <input type='file' name='file' onChange={handleFileChange}></input>
                        </MDBCol>
                    </MDBRow>
                    <br /><br />
                    <MDBRow>
                        <MDBCol md='2'>
                            <MDBBtn type="submit">Create</MDBBtn>
                        </MDBCol>
                    </MDBRow>
                </MDBRow>
            </MDBContainer>
        </form>
    )
}

export default AdminCreate