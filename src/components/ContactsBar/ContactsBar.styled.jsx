import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  margin: 20px auto;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
`;

export const AddBtn = styled.button`
  padding: 8px 16px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid #8f9eb2;
  background-color: transparent;
  color: #8f9eb2;
  font-weight: 500;
  font-size: 16px;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    border-color: #6487ef;
    background-color: #6487ef;
    color: #ddf2ff;
  }
`;

export const Info = styled.p`
  color: #8f9eb2;
  font-weight: 500;
  font-size: 16px;
`;
