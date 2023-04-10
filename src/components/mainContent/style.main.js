import styled from 'styled-components';

export const MainContent = styled.main`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 2 1 0;
  align-items: center;
  text-align: center;
  position: relative;
  border-radius: 10px;
`;

export const Title = styled.h2`
  color: #555;
  font-size: 2.2rem;
  margin-bottom: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;

  &::after {
    content: '';
    background: ${({ theme }) => theme.colors.gradienteH1};
    height: 5px;
    width: 30%;
  }

  &::before {
    content: '';
    background: ${({ theme }) => theme.colors.gradienteH1};
    height: 5px;
    width: 30%;
  }
`;

export const About = styled.section`
  padding: 0.8rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 12px;
`;
