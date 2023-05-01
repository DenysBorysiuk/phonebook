import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 0 auto;
  padding: 10px;
  max-width: 400px;

  border-radius: ${props => props.theme.borderRadius};
`;

export const Notice = styled.p`
  display: inline-block;
  padding: 4px 16px;
  text-align: center;
  font-size: 18px;
  color: #8f9eb2;
  background-color: #232f3d;
  border-radius: ${props => props.theme.borderRadius};
`;
