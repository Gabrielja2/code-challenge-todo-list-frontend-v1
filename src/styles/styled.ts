import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Sans-Serif;
  }
`;

export const Button = styled.button`
  background: ${({ theme }) => theme};
  border: none;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  color: #fafafa;
  cursor: pointer;
  font-size: 16px;
  width: ${({ defaultValue }) => defaultValue};
  height: 40px;
`;

export const Header = styled.header`
  align-items: center;
  background-color: #000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-evenly;
`;

export const Title = styled.h1`
  color: #5e8edf;
  text-align: center;
  padding: 20px;
`;

export const Subtitle = styled.h3`
  color: #4c70af;
`;

export const CardContainer = styled.div`
  background-color: #000000;
  border-radius: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  width: auto;
  margin-block: 20px;
  padding: 20px;
  gap: 20px;
  overflow-wrap: break-word;
`;

export const CardsContainer = styled.form`
  width: 45%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 85%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const Id = styled.span`
  color: #fafafa;
`;

export const Text = styled.p`
  color: #fafafa;
  word-wrap: break-word;
  overflow-wrap: break-word;
`;

export const ButtonClose = styled.button`
  border: none;
  background: #000;
  color: #fafafa;
  cursor: pointer;
`;

export const IdContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Label = styled.label`
  color: #4c70af;
`;

export const Input = styled.input`
  background: #333;
  border: none;
  border-radius: 0.5rem;
  color: #fafafa;
  font-size: 16px;
  height: 40px;
  width: 100%;
  opacity: 0.7;
  margin-bottom: 1.5rem;
  padding-inline: 0.5rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px #5e8edf;
  }
`;

export const ToDoContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: 20px;
  width: 45%;
  margin: auto;

  @media (max-width: 1024px) {
    width: 85%;
  }
`;

export const Link = styled.a`
  color: #5e8edf;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
