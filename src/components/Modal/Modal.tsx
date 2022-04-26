import { Modal, Button, InputGroup, FormControl } from 'react-bootstrap';
import { useState } from 'react'

const ModalComponent = () => {

    const[show, setShow] = useState(false)

    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    return (

        <>
            <Button onClick={handleShow}>Signup</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>Signup</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <InputGroup>
                        <InputGroup.Text>
                            Email
                        </InputGroup.Text>
                        <FormControl
                            type='email'
                        />
                    </InputGroup>
                </Modal.Body>
                </Modal>
        </>
    )

}

export default ModalComponent;