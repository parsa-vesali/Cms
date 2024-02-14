import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CloseIcon from "@mui/icons-material/Close";
import "../Modal.css";

function DetailsModal({ submit, cancel }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal show={show} onHide={() => cancel()}>
        <Modal.Body className="modal__body">
          <h2 className="modal__title">آیا از حذف آیتم اطمینان دارید؟</h2>
          <span onClick={() => setShow(false)} className="modal__icon">
            <CloseIcon />
          </span>
        </Modal.Body>
        <Modal.Footer className="modal__footer">
          <Button
            onClick={() => cancel()}
            variant="danger"
            className="modal__btn reject__btn"
          >
            خیر
          </Button>
          <Button
            onClick={() => submit()}
            variant="primary"
            className="modal__btn acept__btn"
          >
            بله
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DetailsModal;

