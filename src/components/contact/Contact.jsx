import React from 'react';

import * as S from './styled.contact';

import { AiFillEnvironment, AiFillPhone, AiOutlineMail } from 'react-icons/ai';

function Contact() {
  return (
    <S.Contact>
      <S.Card>
        <AiFillPhone />
        <S.ContentCard>
          <h3>WhattsApp</h3>
          <p>(16) 991063282</p>
        </S.ContentCard>
      </S.Card>
      <S.Card>
        <AiOutlineMail />
        <S.ContentCard>
          <h3>E-mail</h3>
          <p>juliocesar.amancio@yahoo.com.br</p>
        </S.ContentCard>
      </S.Card>
      <S.Card>
        <AiFillEnvironment />
        <S.ContentCard>
          <h3>Local</h3>
          <p>São Carlos - SP</p>
        </S.ContentCard>
      </S.Card>
    </S.Contact>
  );
}

export default Contact;
