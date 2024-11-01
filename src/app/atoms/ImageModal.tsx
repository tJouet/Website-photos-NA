import React, { useEffect } from "react";
import Modal from "react-bootstrap/Modal";

function ImageModal(props) {
  //Isolating the bootstrap style
  useEffect(() => {
    import("bootstrap/dist/css/bootstrap.min.css");
  }, []);
  console.log(props.props);
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Dialog className="bg-transparent border-0 p-0 m-0 shadow-none">
        <img
          src={`${props.props}`}
          className="max-h-[750px] object-contain bg-transparent border-none"
        ></img>
      </Modal.Dialog>
    </Modal>
  );
}

export default ImageModal;
