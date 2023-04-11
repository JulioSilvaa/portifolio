import React, { useState } from 'react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import * as S from './style.header';

function Header({ toggleTheme, isDarkTheme }) {
  const audio = new Audio();
  audio.src = '/assets/salamisound-5290169-switch-turn-one-time-toggle.mp3';

  const [isToggle, setIsToggle] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggle(!isToggle);
    toggleTheme();
  };

  return (
    <S.Header>
      <S.Title>Julio Cesar da Silva</S.Title>
      <S.ButtonDarkMode
        onClick={() => {
          audio.play();
          onToggle();
        }}
      >
        {isToggle ? <BsSun /> : <BsMoonStarsFill />}
      </S.ButtonDarkMode>
    </S.Header>
  );
}

export default Header;
