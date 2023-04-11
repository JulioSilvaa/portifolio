import AboutMe from './../about/AboutMe';
import Button from './../button/Button';
import * as S from './style.main';

import { useNavigate } from 'react-router-dom';
import Technologies from '../technologies/Technologies';

export default function MainContent() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/projetos');
  };
  return (
    <S.MainContent>
      <S.About>
        <S.Title>Sobre Mim</S.Title>
        <AboutMe />
        <S.Title>Tecnologias</S.Title>
        <Technologies />
        <Button handleClick={handleClick} text={'VER PROJETOS'} />
      </S.About>
    </S.MainContent>
  );
}
