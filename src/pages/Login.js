import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import {requestLogin} from '../redux/actionsCreators/userActionCreators';
import login from '../images/login.svg';


function Login() {
    const dispatch= useDispatch()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(requestLogin(email,password ))
    }


    return (
        <div className="sign-up-containet">
        <Container className="my-5  mx-2">
            <h2 className='login-title'>SE CONNECTER</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 " controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>

                <Button type="submit" className="rounded-pill btn-login">
                    Submit
                </Button>
            </Form>
        </Container>
        <img src={login} alt="" />
        </div>
    )
}

export default Login