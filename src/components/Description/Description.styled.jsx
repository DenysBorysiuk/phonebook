import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Text = styled.p`
  margin-bottom: 30px;
  padding: 20px;
  max-width: 350px;
  background-color: #232f3d;
  color: #8f9eb2;
  font-size: 18px;

  border-radius: ${props => props.theme.borderRadius};
`;

export const Link = styled(NavLink)`
  color: #6487ef;
`;
