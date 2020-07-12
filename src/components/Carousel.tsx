import React, { useState } from 'react';
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
      <div className="Carousel__container">
        {imgs.length &&
          imgs.map((img: any, index: any) => (
            <div key={`carousel-img-${index}`} className="Carousel__img__container">
              <img className="Carousel__img" src={img.src} alt={img.title} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
