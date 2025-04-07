import React, { useEffect } from "react";
import Modal, { ModalProps } from "react-bootstrap/Modal";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";

function ImageModal(props: ModalProps) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dialogClassName="custom-modal"
    >
      <Modal.Dialog className="bg-transparent border-0 p-0 m-0 shadow-none">
        <Image
          src={`${props.props}`}
          className="max-h-[750px] object-contain bg-transparent border-none"
          alt="The selected image is on your whole screen"
        />
      </Modal.Dialog>
    </Modal>
  );
}

export default ImageModal;
