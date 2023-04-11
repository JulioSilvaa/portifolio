import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-size: 4rem;
  background: ${({ theme }) => theme.colors.gradienteH1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 1185px) {
    font-size: 3rem;
  }
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
  @media (max-width: 390px) {
    font-size: 2rem;
  }

  @media (max-width: 360px) {
    font-size: 1.5rem;
  }
`;

export const ButtonDarkMode = styled.button`
  width: 60px;
  height: 60px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.iconDark};
  border: none;
  background-color: transparent !important;

  svg {
    font-size: 40px;
  }

  @media (max-width: 1185px) {
    svg {
      font-size: 20px;
    }
  }

  @media (max-width: 320px) {
    svg {
      font-size: 20px;
    }
  }
`;
