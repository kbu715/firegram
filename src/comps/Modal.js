import React from 'react';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const clickHandler = (e) => {
        if(e.target.classList.contains("backdrop")){
            setSelectedImg(null); //이미지 외의 영역을 눌렀을 시에만
        }
    }

    return (
        <div className="backdrop" onClick={clickHandler}>
            <img src={selectedImg} alt="enlarged pic" />
        </div>
    )
}

export default Modal;