import React from 'react';
import * as S from './styled.aboutme';

function AboutMe() {
  return (
    <>
      <S.ContainerAboutme>
        <S.ContainerAboutMessage>
          Meu nome é Júlio da Silva, moro em São Carlos - SP, tenho 35 anos. Sou Casado mas ainda
          náo tenho filhos, venho atuando como Técnico em Eletrônica desde 2010. Durante a pandemia
          em 2020, comecei a praticar desenvolvimento WEB através de cursos no online. Me
          identifiquei. Hoje me considero um Desenvolvedor Frontend, formado em 2021 pelo Bootcamp
          da Labenu. Possuo conhecimento em ReactJS, Javascript, HTML, CSS e também possuo alguns
          projetos inspirados em aplicativos como: Tinder, Spotify e ifood que foram desenvolvidos
          para aprimorar minhas habilidades. Sempre que posso participo de Bootcamps buscando sempre
          melhorar e aprender algo. Durante meus estudos de frontend nos projetos, utilizávamos o
          kanban para dividir as tarefas, e fazíamos reuniões (Scrum) para melhorias e/ou troca de
          ideias. enho como Hobby o Paintball , games e séries
        </S.ContainerAboutMessage>
        <S.ContainerAboutMessage>
          Hoje em dia além das aulas da Faculdade eu sempre tento estar praticando e me
          desenvolvendo, aprendendo um pouco de Backend, testes.
        </S.ContainerAboutMessage>
      </S.ContainerAboutme>
    </>
  );
}

export default AboutMe;
