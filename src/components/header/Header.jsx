import React, { useState } from 'react';
import { BsMoonStarsFill, BsSun } from 'react-icons/bs';
import * as S from './style.header';

function Header({ toggleTheme, isDarkTheme }) {
  const audio = new Audio();
  audio.src = '../../../public/assets/salamisound-5290169-switch-turn-one-time-toggle.mp3';

  const [isToggle, setIsToggle] = useState(isDarkTheme);

  const onToggle = () => {
    setIsToggle(!isToggle);
    toggleTheme();
  };

  return (
    <S.Header>
      <div>
        <S.Title>Julio Cesar da Silva</S.Title>
      </div>
      <div>
        <S.ButtonDarkMode
          onClick={() => {
            audio.play();
            onToggle();
          }}
        >
          {isToggle ? <BsSun size={40} /> : <BsMoonStarsFill size={40} />}
        </S.ButtonDarkMode>
      </div>
    </S.Header>
  );
}

export default Header;
