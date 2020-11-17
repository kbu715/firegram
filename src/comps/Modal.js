import React from 'react';
import { motion } from 'framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const clickHandler = (e) => {
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null); //이미지 외의 영역을 눌렀을 시에만
        }
    }

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
        </motion.div>
    )
}

export default Modal;