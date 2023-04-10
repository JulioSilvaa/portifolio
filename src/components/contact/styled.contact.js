import styled from 'styled-components';

export const Contact = styled.section`
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
`;

export const Card = styled.div`
  display: flex;
  font-size: 2rem;
  color: #333;
  gap: 1rem;
  align-items: center;
  text-align: left;
  padding-bottom: 0.8rem;
  margin-bottom: 0.8rem;
  border-bottom: 1px solid #444;

  :nth-child(1) {
    color: #e93b81;
  }
  :nth-child(2) {
    color: #6ab5b9;
  }
  :nth-child(3) {
    color: #c17ceb;
  }
`;

export const ContentCard = styled.div`
  font-size: 1.2rem;

  h3 {
    color: #333;
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  p {
    font-weight: bold;
    color: #333;
  }
`;
