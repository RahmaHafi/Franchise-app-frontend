import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { useSelector } from 'react-redux';

function Profile() {

    const profileDetails = useSelector(state => state.users.info)
    return (
        <Container className="mt-5">
            <h1 className='text-center'>Profile</h1>
            <Table striped bordered hover style={{ maxWidth: 500 }} className="mx-auto">
                <tbody>
                    <tr>
                        <td>First Name</td>
                        <td>{profileDetails.firstName} </td>
                    </tr>
                    <tr>
                        <td>Last Name</td>
                        <td> {profileDetails.lastName} </td>
                    </tr>
                    <tr>
                        <td>Roles</td>
                        <td> {profileDetails.roles} </td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td> {profileDetails.email} </td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    )
}

export default Profile