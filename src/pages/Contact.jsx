import React from "react";
import "../styles/contact.scss";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";

const Contact = () => {
  return (
    <section className="contact-section py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-5">
          <h1 className="fw-bold">Get in Touch</h1>
          <p className="text-muted lead">
            Whether you’d like to collaborate, discuss a project, or just say hello — I’d love to hear from you.
          </p>
        </div>

        <Row className="align-items-center">
          {/* Contact Form */}
          <Col md={6}>
            <Card className="contact-card shadow-sm border-0 p-4">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" />
                </Form.Group>

                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    placeholder="Your Message"
                  />
                </Form.Group>

                <div className="text-center mt-4">
                  <Button variant="dark" type="submit" size="lg">
                    Send Message
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>

          {/* Map Section */}
          <Col md={6} className="mt-4 mt-md-0">
            <div className="map-container shadow-sm">
              <iframe
                title="Bangalore Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.296333178142!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670f5d81b3b%3A0x79bfe7ec8e8a5dfc!2sBangalore%2C%20Karnataka%2C%20India!5e0!3m2!1sen!2sin!4v1696510000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Contact Info */}
        <Row className="text-center mt-5">
          <Col>
            <h5>Location</h5>
            <p className="text-muted">Bangalore, India</p>
          </Col>
          <Col>
            <h5>Email</h5>
            <p className="text-muted">
              <a href="mailto:udeshya.kumar30@email.com">udeshya.kumar30@email.com</a>
            </p>
          </Col>
          <Col>
            <h5>Connect</h5>
            <p className="text-muted">
              <a href="https://github.com/Udeshya30" target="_blank" rel="noreferrer">GitHub</a> ·{" "}
              <a href="https://www.linkedin.com/in/udeshyakumar" target="_blank" rel="noreferrer">LinkedIn</a>
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
