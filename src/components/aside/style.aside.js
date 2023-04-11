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

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    max-width: 700px;
    padding: 0.8rem 10px;
  }

  @media (max-width: 360px) {
    max-width: 355px;
    padding: 0.5rem 0;
  }
`;

export const Avatar = styled.img`
  max-width: 45%;
  border-radius: 50%;
  position: absolute;
  top: -4rem;
`;

export const Title = styled.h1`
  color: #fff;
  background-color: #885ea8;
  border-radius: 8px;
  margin-top: 8rem;
  padding: 0.8rem 1.2rem;
`;

export const LinkDownload = styled.a`
  font-size: 1.2rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.gradienteH1};
  border-radius: 8px;
  margin-top: 3rem;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  color: #fff;
  text-decoration: none;
`;
