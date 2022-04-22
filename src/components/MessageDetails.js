import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { requestAllMessages } from '../redux/actionsCreators/messageActionCreators';

function MessageDetails() {
    const dispatch = useDispatch()
    const messages = useSelector(state => state.messages.all)
    console.log(`messages`, messages);

    useEffect(() => {
        dispatch(requestAllMessages())
    }, [dispatch])
    return (
        <>
            {
                messages ? (
                    <Row xs={1} md={2} className="g-4">
                        { messages.map((m) => (
                            <Col key={m._id} style={{width:"400px"}}>
                                <Card >
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <i variant="top" className="bi bi-envelope-fill"></i>
                                    <i className="fa-regular fa-message"></i>
                                    <Card.Body>
                                        <Card.Title>Expéditeur: {m.firstName} {m.lastName}</Card.Title>
                                        <div className="contact-info">
                                            <h6>Email: {m.email}</h6>
                                            <h6>Numéro de téléphone: {m.phoneNumber}</h6>
                                        </div>
                                        <div className="message-details">
                                            <h6>Objet: {m.subject}</h6>
                                            <Card.Text>
                                                {m.content}
                                            </Card.Text>
                                        </div>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                ) :
                    (<p>Loading</p>)
            }

        </>
    )
}

export default MessageDetails