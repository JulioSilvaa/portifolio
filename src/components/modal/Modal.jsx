import React from 'react';
import * as S from './styled.modal';
function Modal({ id = 'modal', children, onClose = () => {} }) {
  const handleOutsideClick = (e) => {
    if (e.target.value === id) onClose();
  };

  return (
    <S.Modal id={id} onClick={handleOutsideClick}>
      <S.ContainerModal>
        <S.CloseButton onClick={onClose} />
        <div>{children}</div>
      </S.ContainerModal>
    </S.Modal>
  );
}

export default Modal;
