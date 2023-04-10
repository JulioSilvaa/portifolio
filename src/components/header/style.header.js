import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 8px 16px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6rem;
  text-align: center;
`;

export const Title = styled.h1`
  margin: 0 auto;
  font-size: 5rem;
  background: ${({ theme }) => theme.colors.gradienteH1};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const ButtonDarkMode = styled.button`
  width: 60px;
  height: 60px;
  margin-top: 20px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.iconDark};
  border: none;
  background-color: transparent !important;
`;
