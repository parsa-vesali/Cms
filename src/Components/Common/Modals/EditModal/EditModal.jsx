import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../Modal.css";

function EditModal({ submit, cancel }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal show={show} onHide={() => cancel()}>
        <Modal.Body className="modal__body">
          <h2 className="modal__title">ویرایش محصول</h2>
          <span onClick={() => setShow(false)} className="modal__icon">
            <CloseIcon />
          </span>
        </Modal.Body>
        <Modal.Footer className="modal__footer">
          <Button
            onClick={() => submit()}
            variant="primary"
            className="modal__btn acept__btn"
          >
            ویرایش
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default EditModal;
