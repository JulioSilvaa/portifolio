import Technologies from '../technologies/technologies';

import AboutMe from './../about/AboutMe';
import Button from './../button/Button';
import * as S from './style.main';

export default function MainContent() {
  return (
    <S.MainContent>
      <S.About>
        <S.Title>Sobre Mim</S.Title>
        <AboutMe />
        <S.Title>Tecnologias</S.Title>
        <Technologies />
        <S.Title>Projetos</S.Title>
        <Button text={'VER PROJETOS'} />
      </S.About>
    </S.MainContent>
  );
}
