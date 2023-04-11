import styled from 'styled-components';

export const Modal = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
  background-color: #fff;
  width: 60%;
  height: 60%;
  border-radius: 10px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  display: flex;
  outline: none;
  border: none;
  height: 32px;
  width: 32px;
  right: calc(-100% + 30px);
  top: 10px;
  position: relative;
  align-items: center;
  cursor: pointer;

  ::before,
  ::after {
    content: ' ';
    position: absolute;
    width: 2.5px;
    height: 24px;
    background-color: #343;
  }

  ::before {
    transform: rotate(45deg);
  }

  ::after {
    transform: rotate(-45deg);
  }
`;
