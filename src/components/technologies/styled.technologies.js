import styled from 'styled-components';

export const ContainerTechnologies = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  margin: 10px 0;

  @media (max-width: 768px) {
    margin: 0 auto;
    text-align: center;
    max-width: 700px;
  }
  @media (max-width: 320px) {
    display: flex;
    flex-direction: column;
  }
`;

export const IconTechnologies = styled.div`
  flex-wrap: wrap;
  padding: 5px;
  margin: 0 auto;

  :nth-child(1) {
    color: #e44d26;
  }
  :nth-child(2) {
    color: #1572b6;
  }
  :nth-child(3) {
    color: #f0db4f;
  }
  :nth-child(4) {
    color: #61dafb;
  }

  :nth-child(5) {
    color: #83cd29;
  }
  :nth-child(6) {
    color: #ffcb2d;
  }
  :nth-child(7) {
    color: #118d4d;
  }

  svg {
    font-size: 3rem;
  }
`;
