import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import * as S from './styled.socialMidia';

import { Link } from 'react-router-dom';

function SocialMidia() {
  const midiasSociaisList = [
    {
      name: 'Linkedin',
      icon: <FaLinkedinIn />,
      url: 'https://www.linkedin.com/in/j%C3%BAlio-c%C3%A9sar-da-silva-frontend/',
    },

    {
      name: 'FaGithub',
      icon: <FaGithub />,
      url: 'https://github.com/JulioSilvaa',
    },
    {
      name: 'Instagram',
      icon: <FaInstagram />,
      url: 'https://www.instagram.com/julioxsilva/',
    },
  ];

  const midiasSociais = midiasSociaisList?.map((midia) => (
    <Link to={`${midia.url}`} key={midia.name}>
      <S.Link>{midia.icon}</S.Link>
    </Link>
  ));

  return <S.MidiasContainer>{midiasSociais}</S.MidiasContainer>;
}

export default SocialMidia;
