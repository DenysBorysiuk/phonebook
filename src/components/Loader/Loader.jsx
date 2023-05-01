import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './Loader.styled';

export const Loader = () => {
  return (
    <Wrapper>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#8f9eb2"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName="wrapper"
        visible={true}
      />
    </Wrapper>
  );
};
