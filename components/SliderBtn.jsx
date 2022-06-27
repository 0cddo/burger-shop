import styled from '@emotion/styled';
import Image from 'next/image';
import arrowl from '../public/img/arrowl.png';
import arrowr from '../public/img/arrowr.png';
Image;

const SliderBtn = ({ moveSlide, direction }) => {
  return (
    <Button onClick={moveSlide}>
      <Image src={direction === 'next' ? arrowr : arrowl} alt="arrow button" />
    </Button>
  );
};

const Button = styled.button`
  cursor: pointer;
`;

export default SliderBtn;
