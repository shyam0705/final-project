import React, { Component } from 'react';
import { Form, FormGroup, Label, Col, Input, Button } from 'reactstrap';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state={
            firstname: '',
            lastname: '',
            telno: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: ''
        }
    }
    handleInputChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        })
    }
    handleSubmit = (event) => {
        console.log('Current State is: ' + JSON.stringify(this.state));
        alert('Current State is: ' + JSON.stringify(this.state));
        event.preventDefault();
    }
    render() {
        return (
            <div className="col-12 col-md-9" id="contactForm">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup row>
                        <Label md={2} htmlFor="firstname">
                            FirstName
                        </Label>
                        <Col md={10}>
                            <Input type="text" name="firstname" 
                                value={this.state.firstname} onChange={this.handleInputChange}
                                className="form-control"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="lastname">
                            LastName
                        </Label>
                        <Col md={10}>
                            <Input type="text" name="lastname"
                                value={this.state.lastname} onChange={this.handleInputChange}
                                className="form-control"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="email">
                            Email
                        </Label>
                        <Col md={10}>
                            <Input type="email" name="email"
                                value={this.state.email} onChange={this.handleInputChange}
                                className="form-control"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label md={2} htmlFor="telno">
                            Contact No
                        </Label>
                        <Col md={10}>
                            <Input type="tel" name="telno"
                                value={this.state.telno} onChange={this.handleInputChange}
                                className="form-control"
                            />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 6, offset: 2 }}>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox"
                                        name="agree"
                                        checked={this.state.agree}
                                        onChange={this.handleInputChange} /> {' '}
                                    <strong>May we contact you?</strong>
                                </Label>
                            </FormGroup>
                        </Col>
                        <Col md={{ size: 3, offset: 1 }}>
                            <Input type="select" name="contactType"
                                value={this.state.contactType}
                                onChange={this.handleInputChange}>
                                <option>Tel.</option>
                                <option>Email</option>
                            </Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label htmlFor="message" md={2}>Your Feedback</Label>
                        <Col md={10}>
                            <Input type="textarea" id="message" name="message"
                                rows="12"
                                value={this.state.message}
                                onChange={this.handleInputChange}></Input>
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col md={{ size: 10, offset: 2 }}>
                            <Button type="submit" color="danger">
                                Send Feedback
                                    </Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
            )
    }
    
}
export default Contact;