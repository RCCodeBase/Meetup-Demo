import { Container, Form, Row, Card, Button, Col } from 'react-bootstrap';
import {useRef} from 'react';

function NewMeetupForm(props) {

    const titleInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandle(event) {
        event.preventDefault();
        const inputTitle = titleInputRef.current.value;
        const addressTitle = titleInputRef.current.value;
        const descTitle = titleInputRef.current.value;
        const inputData ={
            title:inputTitle,
            address:addressTitle,
            desc:descTitle
        }
        props.AddMeetUp(inputData);
    }

    return (
        <Container style={{ paddingTop: '2%' }}>
            <Card>
                <Card.Header>Add New Meetup</Card.Header>
                <Card.Body>
                    <Card.Title>Fill the Details</Card.Title>
                        <Form onSubmit={submitHandle}>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Title
                             </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Title" ref={titleInputRef}/>
                                </Col>
                            </Form.Group>
                            <Form.Group as={Row} controlId="formPlaintextEmail">
                                <Form.Label column sm="2">
                                    Address
                             </Form.Label>
                                <Col sm="10">
                                    <Form.Control type="text" placeholder="Address" ref={addressInputRef}/>
                                </Col>
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Description</Form.Label>
                                <Form.Control as="textarea" rows={3} ref={descriptionInputRef}/>
                            </Form.Group>
                            <Button type="submit">Add Meetup</Button>
                        </Form>
                </Card.Body>

            </Card>
        </Container>
    );
}

export default NewMeetupForm;