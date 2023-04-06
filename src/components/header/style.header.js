import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 16px;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
`;

export const ButtonDarkMode = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.iconDark};
  border: none;
  background-color: transparent !important;
`;
