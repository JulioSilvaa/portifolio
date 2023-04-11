import React from 'react';
import * as S from './styled.button';

const Button = ({ text, handleClick }) => {
  return <S.ButtonDownload onClick={handleClick}>{text}</S.ButtonDownload>;
};
export default Button;
