import styled from 'styled-components';

export const ContainerTechnologies = styled.section`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  gap: 8px;
  margin: 10px 0;
`;

export const IconTechnologies = styled.div`
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
    color: #9feaf7;
  }
  :nth-child(6) {
    color: #83cd29;
  }
  :nth-child(7) {
    color: #ffcb2d;
  }
  :nth-child(8) {
    color: #118d4d;
  }
  :nth-child(9) {
    color: #00618a;
  }

  svg {
    font-size: 5rem;
  }
`;
