import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './LoginForm.css'; // Import the CSS file

const LoginForm = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <h1 className="text-center mt-5">Modal Login Form</h1>
      <Button variant="primary" onClick={handleShow} className="d-block mx-auto mt-3">
        Open Modal
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login to My Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword" className="mt-3">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className="mt-3">
              <Form.Check type="checkbox" label="Remember me on this computer" />
            </Form.Group>

            <Button variant="warning" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" type="button" onClick={handleClose}>
            Forgot your password?
          </Button>
          <Button variant="link" type="button" onClick={handleClose}>
            Create a new account
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default LoginForm;
