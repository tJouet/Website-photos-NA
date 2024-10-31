"use client";
import { useAppContext } from "@/AppContext";
import { useState } from "react";
interface Modal {
  content: string;
}

const Modal: React.FC<Modal> = () => {
  const { selectedPicture, handleModal, modalPosition } = useAppContext();
  return (
    <div
      className="w-sreen h-screen bg-black/75 absolute  z-100"
      style={{ top: modalPosition.y, left: modalPosition.x }}
    >
      <button
        className="relative top-5 right-0"
        onClick={() => handleModal(null)}
      >
        Close
      </button>
      <img src={`${selectedPicture}`} className="w-16 h-16 " />
    </div>
  );
};

export default Modal;
