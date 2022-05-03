import React, { useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { requestAllMessages } from '../redux/actionsCreators/messageActionCreators';
import message from '../images/message.svg'

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
                    <Row xs={1} md={2} className="g-4 message-card">
                        {messages.map((m) => (
                            <Col key={m._id} style={{ width: "400px" }}>
                                <Card >
                                    <Card.Img variant="top" src={message} style={{ width: "100%", height: "200px" }} />

                                   
                                    <Card.Body>
                                        
                                        <Card.Title> <i class="bi bi-send-fill"></i>Expéditeur: {m.firstName} {m.lastName}</Card.Title>
                                        <div className="contact-info">
                                            <h6><i class="bi bi-envelope-fill"></i>Email: {m.email}</h6>
                                            <h6><i class="bi bi-telephone-fill"></i>Numéro de téléphone: {m.phoneNumber}</h6>
                                        </div>
                                        <div className="message-details">
                                            <h6><i class="bi bi-mailbox"></i>Objet: {m.subject}</h6>
                                            <Card.Text className="message-content">
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