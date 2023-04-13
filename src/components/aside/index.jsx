import Contact from './../contact/Contact';
import SocialMidia from './../socialMidia/SocialMidia';

import * as S from './style.aside';

export default function Aside() {
  return (
    <S.Aside>
      <S.Avatar src="/assets/profile-pic (3).png" alt="foto do meu perfil" />
      <S.Title>Desenvolvedor</S.Title>
      <SocialMidia />
      <Contact />
      <S.LinkDownload href="/assets/curriculo.pdf" download>
        Download Currículo
      </S.LinkDownload>
    </S.Aside>
  );
}
