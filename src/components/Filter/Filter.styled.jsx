import styled from '@emotion/styled';

export const Label = styled.label`
  display: block;
  margin: 30px auto;
  padding-top: 10px;
  padding-bottom: 10px;
  max-width: 400px;
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  background-color: ${props => props.theme.secondaryBgCl};
  border-radius: ${props => props.theme.borderRadius};

  > span {
    margin-left: 10px;
  }
`;

export const Input = styled.input`
  display: block;
  margin-top: 8px;
  margin-right: auto;
  margin-left: auto;
  padding: 8px 10px;
  width: 80%;
  color: #8f9eb2;
  background-color: transparent;
  border: 1px solid rgba(143, 158, 178, 0.5);
  outline: none;
  border-radius: ${props => props.theme.borderRadius};
  transition: border-color 300ms ease-in-out;

  &::placeholder {
    text-align: center;
    color: #8f9eb2;
  }

  &:hover,
  &:focus {
    border-color: rgba(100, 135, 239, 0.8);
  }
`;
