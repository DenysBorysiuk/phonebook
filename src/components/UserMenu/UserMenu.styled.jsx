import styled from '@emotion/styled';

export const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const Email = styled.p`
  color: #fff;

  @media (min-width: 200px) {
    font-size: 10px;
  }

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const LogoutBtn = styled.button`
  color: #8f9eb2;
  padding: 4px 0;
  width: 100px;
  border-radius: ${props => props.theme.borderRadius};
  border: 1px solid #8f9eb2;
  background-color: transparent;
  transition: color 300ms ease-in-out, background-color 300ms ease-in-out;

  &:hover {
    border-color: #6487ef;
    background-color: #6487ef;
    color: #ddf2ff;
  }
`;
