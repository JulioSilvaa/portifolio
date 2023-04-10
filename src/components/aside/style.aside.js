import styled from 'styled-components';

export const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  flex: 1 1 0;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.principal};
  text-align: center;
  position: relative;
  padding: 3rem 0;
  border-radius: 10px;
`;

export const Avatar = styled.img`
  max-width: 50%;
  border-radius: 50%;
  position: absolute;
  top: -4rem;
`;

export const Title = styled.h1`
  color: #fff;
  background-color: lightblue;
  border-radius: 8px;
  margin-top: 8rem;
  padding: 0.8rem 1.2rem;
`;
