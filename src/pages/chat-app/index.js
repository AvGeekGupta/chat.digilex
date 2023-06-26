import React from "react";
import "./styles.scss";
import { Container, Row, Col, InputGroup, Form, Button } from "react-bootstrap";

const messages = [
    {
        type: "received",
        message: "Okay, please provide your details"
    },
    {
        type: "sent",
        message: "Make an affidevit for me"
    },
    {
        type: "received",
        message: "Hi! How can I help you"
    },
]

function Message(props) {
    if (props.data.type === "sent") {
        return (
            <Row className="justify-content-end">
                <Col sm={10} className="message-sent">
                    {props.data.message}
                </Col>
            </Row>
        );
    }
    else if (props.data.type === "received") {
        return (
            <Row className="text-left">
                <Col sm={10} className="message-received">
                    {props.data.message}
                </Col>
            </Row>
        );
    }
}

function ChatAppPage() {
    return (
        <div className="chat-app">
            <Container>
                <div className="white-filter">
                    <div className="chat-header">
                        <Row>
                            <img src={process.env.PUBLIC_URL + "/images/icon-512x512.png"} height={60} width={60} alt="" className="rounded-circle" />
                            <Col>
                                <Row>
                                    <h1>
                                        DIGILEX
                                    </h1>
                                </Row>
                                <Row>
                                    <p className="text-success">Online now</p>
                                </Row>
                            </Col>

                        </Row>
                    </div>
                    <div className="chat-body">
                        {messages.map((message, index) => (
                            <div key={index}>
                                <Message data={message} />
                            </div>
                        ))}
                    </div>
                    <div className="message-area">
                        <InputGroup>
                            <Form.Control
                                placeholder="Message"
                            />
                            <Button variant="success" id="send-button">
                                Send
                            </Button>
                        </InputGroup>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ChatAppPage;