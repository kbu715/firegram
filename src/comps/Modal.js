import React from "react";
import { motion } from "framer-motion";
import { projectFirestore, projectStorage } from "../firebase/config";
const Modal = ({ selectedImg, setSelectedImg, selectedId }) => {
  const clickHandler = (e) => {
    if (e.target.classList.contains("backdrop")) {
      setSelectedImg(null); //이미지 외의 영역을 눌렀을 시에만
    }
  };

  const deleteHandler = async () => {
    const ok = window.confirm("You delete this picture?");
    if (ok) {
      await projectFirestore.doc(`images/${selectedId}`).delete();
      await projectStorage.refFromURL(selectedImg).delete();
      console.log("삭제 성공");
      setSelectedImg(null);
    } else {
    }
  };

  return (
    <motion.div
      className="backdrop"
      onClick={clickHandler}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img
        src={selectedImg}
        alt="enlarged pic"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />
      <motion.label
        className="delete"
        onClick={deleteHandler}
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      >
        <span>
          <i className="fas fa-trash-alt"></i>
        </span>
      </motion.label>
    </motion.div>
  );
};

export default Modal;
