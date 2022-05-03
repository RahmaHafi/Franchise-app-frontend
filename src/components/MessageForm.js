import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch} from 'react-redux';
import {requestCreatingMessage} from '../redux/actionsCreators/messageActionCreators'

function MessageForm({franchiseId}) {
  
  const dispatch = useDispatch()
  const [message, setMessage] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    subject: "",
    content: "",
    franchise: franchiseId
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(requestCreatingMessage(message))
  }


  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Prénom</Form.Label>
          <Form.Control
            type="text"
            value={message.firstName}
            onChange={(e) => setMessage({ ...message, firstName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Nom</Form.Label>
          <Form.Control
            type="text"
            value={message.lastName}
            onChange={(e) => setMessage({ ...message, lastName: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Email</Form.Label>
          <Form.Control
            type="email"
            value={message.email}
            onChange={(e) => setMessage({ ...message, email: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Numéro de téléphone</Form.Label>
          <Form.Control
            type="number"
            value={message.phoneNumber}
            onChange={(e) => setMessage({ ...message, phoneNumber: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlInput1">
          <Form.Label className="fw-bold">Objet</Form.Label>
          <Form.Control
            type="text"
            value={message.subject}
            onChange={(e) => setMessage({ ...message, subject: e.target.value })}
          />
        </Form.Group>
        <Form.Group className="mb-3 mx-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label className="fw-bold">Contenu</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={message.content}
            onChange={(e) => setMessage({ ...message, content: e.target.value })}
          />
        </Form.Group>
        <div className="d-grid gap-2 mx-3 mb-1">
          <Button  className="send-message-btn" size="lg" type="submit">
            Send message
          </Button>
        </div>
      </Form>
    </div>
  )
}

export default MessageForm