import React from 'react';
import * as S from './styled.aboutme';

function AboutMe() {
  return (
    <>
      <S.ContainerAboutme>
        <S.ContainerAboutMessage>
          Olá me chamo Júlio Cesar da Silva, sou de São Carlos - SP. <br />
          Estudante de Análise e Desenvolvimento de Sistemas, atualmente cursando o terceiro
          semestre e pratico desenvolvimento Frontend desde 2020.
          {/* Olá me chamo Julio Cesar da Silva, tenho 35 anos e moro em São Carlos - SP. Estudante de
          Análise e Desenvolvimento de Sistemas, atualmente cursando o segundo semestre e
          estudando/praticando desenvolvimento Frontend desde 2020. Neste mesmo ano após ser
          desligado do trabalho por conta da pandemia, dei início aos estudos sobre programação,
          algo que tenho contato desde 2010, devido a minha profissão de Técnico em Eletrônica. Após
          acompanhar algumas aulas e videos na internet, eu conheci a Labenu, uma instituição de São
          Paulo - SP que promove uma formação para desenvolvimento Frontend com React, após um
          processo seletivo eu consegui a oportunidade de participar do Bootcamp que possui a
          duração de 6 meses. Após a conclusão do Bootcamp sigo estudando através de cursos na Udemy
          ou de outras instituições, procurando sempre aprimorar o que aprendi até o momento. Hoje
          em dia venho estudando mais sobre padrões de códigos e testes. */}
        </S.ContainerAboutMessage>

        <S.ContainerAboutMessage>
          Quando me perguntam do porque escolhi essa area, gosto de dizer que é porque ela nos
          possibilita criar 'coisas' para ajudar as pessoas !!
        </S.ContainerAboutMessage>
      </S.ContainerAboutme>
    </>
  );
}

export default AboutMe;
