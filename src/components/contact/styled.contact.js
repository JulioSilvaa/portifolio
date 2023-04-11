import styled from 'styled-components';

export const Contact = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;

  @media (max-width: 320px) {
    svg {
      display: none;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.textColor};
  gap: 1rem;
  align-items: center;
  text-align: left;
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid;
  border-color: ${({ theme }) => theme.colors.textColor};

  :nth-child(1) {
    color: #e93b81;
  }
  :nth-child(2) {
    color: #ff8c42;
  }
  :nth-child(3) {
    color: #f0db4f;
  }
`;

export const ContentCard = styled.div`
  font-size: 1.2rem;

  h3 {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: bold;
    color: ${({ theme }) => theme.colors.textColor};
  }
`;
