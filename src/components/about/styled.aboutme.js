import styled from 'styled-components';

export const ContainerAboutme = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const ContainerAboutMessage = styled.p`
  padding: 10px;
  text-align: left;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.2rem;
  line-height: 1.5rem;
`;
