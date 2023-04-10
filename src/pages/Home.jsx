import React from 'react';
import Aside from '../components/aside';
import MainContent from '../components/mainContent/index';
import Container from '../style/Container';
import * as S from './styled.home';

function Home() {
  return (
    <>
      <Container>
        <S.HomePageContainer>
          <Aside />
          <MainContent />
        </S.HomePageContainer>
      </Container>
    </>
  );
}

export default Home;
