import styled from 'styled-components';

export const ContainerCardProjects = styled.div`
  margin: 0 auto;
  max-width: 470px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.principal};
`;

export const title = styled.h2`
  color: ${({ theme }) => theme.colors.textColor};
  padding: 8px;
  margin: 15px auto;
`;

export const ContainerImage = styled.div`
  max-width: 100%;
`;

export const ImageCard = styled.img`
  width: 100%;
  object-fit: cover;
  transform: scale(0.94);
  transition: all ease 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1);
  }
`;

export const ContainerLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: center;
  margin: 10px auto;
  max-width: 90%;
`;

export const Links = styled.a`
  text-decoration: none !important;
  font-size: 1.2rem;
  font-weight: bold;
  background: ${({ theme }) => theme.colors.gradienteH1};
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  border: none;
  cursor: pointer;
  color: #fff;
  transform: scale(0.94);
  transition: all ease 0.3s;
  cursor: pointer;
  :hover {
    transform: scale(1);
  }
`;

export const ContainerDescriptions = styled.div`
  max-width: 90%;
  margin: 0 auto;
  text-align: left;
`;

export const Description = styled.span`
  padding: 20px;
  margin: 12px;
  line-height: 1.5rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.textColor};
  text-align: start;
`;
