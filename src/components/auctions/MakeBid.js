import { Button, Form, Modal, Alert } from 'react-bootstrap';
import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const BidComp = ({item}) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState('');

  const bidamount = useRef();

  const { bidAuction } = useContext(AuthContext);
  const { currentUser } = useContext(AuthContext);

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  const submitForm = async (e) => {
    e.preventDefault();
    setError('');

    try {
      bidAuction(item.id, bidamount.current.value);
    } catch (error) {
      setError('abc');
    }
    closeForm();
  };

  return (
    <>
      <div onClick={openForm} className="btn btn-outline-dark mx-2">
        Bid
      </div>
      <Modal centered show={showForm} onHide={closeForm}>
        <form onSubmit={submitForm}>
          <Modal.Header>
            <Modal.Title><b>Make a Bid</b></Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {error && <Alert variant="danger">{error}</Alert>}
            
            <Form.Group>
              <Form.Label>Bid Amount</Form.Label>
              <Form.Control type="amount" required ref={bidamount} />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeForm}>
              Cancel
            </Button>
            <Button variant="dark" type="submit">
              Bid
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};
