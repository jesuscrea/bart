import React, { useState } from 'react';
import { Pagination } from '.';
import { IMAGE_NOT_FOUND } from '../core/config/constants';
import { CarouselProps } from '../schemas/Carousel';
import left from '../assets/images/left.png';
import right from '../assets/images/right.png';

const Carousel: React.FC<CarouselProps> = ({ images = [] }: CarouselProps) => {
  const [active, setActive] = useState(0);

  const getValidActive = (value: number) =>
    value > images.length - 1 ? 0 : value < 0 ? images.length - 1 : value;
  const getNewActive = (forward?: boolean) => (forward ? active + 1 : active - 1);

  const handleClick = (forward?: boolean): void => {
    const newActive = getValidActive(getNewActive(forward));
    setActive(newActive);
  };

  return (
    <div className="Carousel">
      <div className="Carousel__main">
        <img src={left} alt="left" className="Carousel__next" onClick={() => handleClick()} />
        {images.length ? (
          <div className="Carousel__container">
            <img className="Carousel__img" src={images[active].src} alt={images[active].title} />
            <span className="Carousel__title">{images[active].title}</span>
            <Pagination className="Carousel__pagination" length={images.length} active={active} />
          </div>
        ) : (
          <span className="red">{IMAGE_NOT_FOUND}</span>
        )}
        <img src={right} alt="right" className="Carousel__next" onClick={() => handleClick(true)} />
      </div>
    </div>
  );
};

export default Carousel;
