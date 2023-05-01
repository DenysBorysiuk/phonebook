import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks/useAuth';
import { Header, Container, Logo } from './AppBar.styled.jsx';
import { FaRegAddressBook } from 'react-icons/fa';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Header>
      <Container>
        <Logo>
          <FaRegAddressBook />
          PhoneBook
        </Logo>
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </Container>
    </Header>
  );
};
