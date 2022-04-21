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
                            <Col key={m._id}>
                                <Card >
                                    <Card.Img variant="top" src="holder.js/100px160" />
                                    <i variant="top" className="bi bi-envelope-fill"></i>
                                    <Card.Body>
                                        <Card.Title>Expéditeur:{m._id}</Card.Title>
                                        <div className="contact-info">
                                            <h6>Email:</h6>
                                            <h6>Numéro de téléphone:</h6>
                                        </div>
                                        <div className="message-details">
                                            <h6>Objet:</h6>
                                            <Card.Text>
                                                This is a longer card with supporting text below as a natural
                                                lead-in to additional content. This content is a little bit longer.
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