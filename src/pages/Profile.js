import React from 'react';
// import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';
import profile from '../images/profile.svg'

function Profile() {

    const profileDetails = useSelector(state => state.user.info)
    return (
        <div className='profile-table-container'>
            <img src={profile} alt="profile " style={{width:"400px", height:"400px"}} />
            <h1 className='text-center'>Profile</h1>
            <Table striped bordered hover variant="light"  className='profile-table'>
                <tbody>
                    <tr>
                        <td className="fw-bold" >First Name</td>
                        <td>{profileDetails.firstName} </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Last Name</td>
                        <td> {profileDetails.lastName} </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Roles</td>
                        <td> {profileDetails.roles} </td>
                    </tr>
                    <tr>
                        <td className="fw-bold">Email</td>
                        <td> {profileDetails.email} </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default Profile