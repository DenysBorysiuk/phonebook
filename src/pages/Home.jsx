import { Description } from 'components/Description/Description';
import { Helmet } from 'react-helmet';
import { FaRegAddressBook } from 'react-icons/fa';

const styles = {
  container: {
    minHeight: 'calc(100vh - 140px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    gap: '50px',
  },
  title: {
    fontWeight: 500,
    fontSize: 40,
    textAlign: 'center',
    color: '#8f9eb2',
    marginTop: '30px',
  },
};

const Home = () => {
  return (
    <div style={styles.container}>
      <Helmet>
        <title>Phonebook | Home</title>
      </Helmet>
      <h1 style={styles.title}>
        Hi! Welcome to Phonebook App{' '}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </h1>
      <FaRegAddressBook size="250" color="#8f9eb2" />
      <Description />
    </div>
  );
};

export default Home;
