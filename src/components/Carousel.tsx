import React, { useState } from 'react';
import { Pagination } from '.';
import { LEFT_ARROW, RIGHT_ARROW, IMAGE_NOT_FOUND } from '../core/config/constants';
import { CarouselProps } from '../schemas/Carousel';

const Carousel: React.FC<CarouselProps> = ({ imgs = [] }: CarouselProps) => {
  const [active, setActive] = useState(0);

  const getValidActive = (value: number) =>
    value > imgs.length - 1 ? 0 : value < 0 ? imgs.length - 1 : value;
  const getNewActive = (forward?: boolean) => (forward ? active + 1 : active - 1);

  const handleClick = (forward?: boolean): void => {
    const newActive = getValidActive(getNewActive(forward));
    setActive(newActive);
  };

  return (
    <div className="Carousel">
      <div className="Carousel__main">
        <div className="Carousel__next" onClick={() => handleClick()}>
          {LEFT_ARROW}
        </div>
        {imgs.length ? (
          <div className="Carousel__container">
            <img className="Carousel__img" src={imgs[active].src} alt={imgs[active].title} />
            <span className="Carousel__title">{imgs[active].title}</span>
            <Pagination length={imgs.length} active={active} />
          </div>
        ) : (
          <span className="red">{IMAGE_NOT_FOUND}</span>
        )}
        <div className="Carousel__next" onClick={() => handleClick(true)}>
          {RIGHT_ARROW}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
