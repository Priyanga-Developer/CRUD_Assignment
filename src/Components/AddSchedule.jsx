import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import { Button} from 'react-bootstrap'
import { useState } from 'react';
import { PiPlusCircleBold } from "react-icons/pi";


const AddSchedule = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  // font-size: 16px;
  // font-style: normal;
  // font-weight: 600;
  // line-height: 24px;

  return (
   <>
        <Button style={{backgroundColor: "#391E5A", borderColor:" #391E5A ",color:"#FFFFFF",gap:"8px", display:"inline-flex",padding:"8px", alignItems:"center"}} onClick={handleShow}>
        <PiPlusCircleBold /><span style={{fontSize:"12px",fontWeight:"600",color:"#FFF"}}>Add</span>
          </Button>
                       <Modal show={show} onHide={handleClose} >
                            <Modal.Header style={{border:"0px"}} >
                              <Modal.Title style={{color:"#333333",fontSize:"16px",fontWeight:"600",lineHeight:"24px"}}>Add Schedule</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                            <Form>
                            <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Password
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Radios
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="first radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="second radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="third radio"
              name="formHorizontalRadios"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalCheck">
        <Col sm={{ span: 10, offset: 2 }}>
          <Form.Check label="Remember me" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 10, offset: 2 }}>
          <Button type="submit">Sign in</Button>
        </Col>
      </Form.Group>
    </Form>
                            </Modal.Body>

                       </Modal>
   </>
  )
}

export default AddSchedule