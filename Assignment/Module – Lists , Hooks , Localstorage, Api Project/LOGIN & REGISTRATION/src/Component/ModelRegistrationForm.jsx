import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './ModelRegistrationForm.css'; // Import CSS for custom styling

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="text-center mt-5">Modal Registration Form</h1>
      <Button variant="primary" onClick={handleShow} className="d-block mx-auto mt-3">
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Create an Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>User Name</Form.Label>
              <Form.Control type="text" placeholder="User Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail" className="mt-3">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group controlId="formBasicProfession" className="mt-3">
              <Form.Label>Profession</Form.Label>
              <Form.Control type="text" placeholder="Profession" />
            </Form.Group>
            <Form.Group controlId="formBasicPhoneNumber" className="mt-3">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="tel" placeholder="Phone Number" />
            </Form.Group>
            <Form.Group controlId="formBasicOrganization" className="mt-3">
              <Form.Label>Organization</Form.Label>
              <Form.Control type="text" placeholder="Organization" />
            </Form.Group>
            <Form.Group controlId="formBasicDesignation" className="mt-3">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" placeholder="Designation" />
            </Form.Group>
            <Form.Group controlId="formBasicCity" className="mt-3">
              <Form.Label>City</Form.Label>
              <Form.Control type="text" placeholder="City" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicConfirmPassword" className="mt-3">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between">
          <Button variant="link" type="button" onClick={handleClose}>
            Already have an account?
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
