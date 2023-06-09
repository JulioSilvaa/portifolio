import styled from 'styled-components';

export const MidiasContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.2rem;
  margin: 2rem 0;
  padding: 0 1rem;

  > :nth-child(1) {
    color: #0072b0;
  }
  > :nth-child(2) {
    color: #111;
  }
  > :nth-child(3) {
    color: #5cb866;
  }
`;
export const Link = styled.div`
  transform: scale(1);
  font-size: 2.5rem;
  width: 40px;

  &:hover {
    transform: scale(1.2);
    transition: all 0.5s ease-in-out;
  }
`;
