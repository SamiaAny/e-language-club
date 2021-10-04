import React from 'react';
import { Container, Form, Row, Col, Button } from 'react-bootstrap';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <h1 className="text-center contact-text">Contact Us</h1>
      <div className="contact-area">
        <Container className="p-4">
          <div className="row">
            <div className="col-md-7 border contact-form">
              <Form className="p-3">
                <h5 className="my-3">Get in Touch</h5><hr />
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridName" className="p-0">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter your name" />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridEmail" classNam="p-0">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter your email" />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="Subject">
                  <Form.Label>Subject</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="danger" type="submit">
                  Submit Request
                </Button>
              </Form>
            </div>
            <div className="col-md-5">
              <div className="reach-directly border ms-5 p-3">
                <h5 className="text-center">Reach Us Directly</h5><hr />
                <div className="address">
                  {/* icon1 */}
                  <div className="d-flex">
                    <div className="icon">
                      <i class="bi bi-house-door"></i>
                    </div>
                    <div className="my-auto">
                      <p>2626,Elizabeth Road,USA</p>
                    </div>
                  </div>
                  {/* icon2 */}
                  <div className="d-flex">
                    <div className="icon">
                      <i class="bi bi-envelope-open"></i>
                    </div>
                    <div className="my-auto">
                      <p>support@elanguageclub.com<br />
                        elanguageclub@gmail.com</p>
                    </div>
                  </div>
                  {/* icon3 */}
                  <div className="d-flex">
                    <div className="icon">
                      <i class="bi bi-phone"></i>
                    </div>
                    <div>
                      <p>+966 123 124<br/>
                      (02) 777 125</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Contact;