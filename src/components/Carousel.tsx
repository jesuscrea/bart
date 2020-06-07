import React, { useEffect, useState } from 'react';
import { CarouselProps } from '../schemas/Carousel';

const Carousel: React.FC<CarouselProps> = ({ imgs = [] }: CarouselProps) => {
  const [max, setMax] = useState(0);
  const [active, setActive] = useState(0);
  const [img, setImg] = useState({ src: '', alt: '' });

  useEffect(() => {
    if (imgs.length) {
      setMax(imgs.length - 1);
    }
  }, [imgs]);

  useEffect(() => setImg(imgs[active]), [active]);

  const handleNext = (next: boolean) => {
    const newActive = next ? active + 1 : active - 1;
    if (newActive > max) {
      setActive(0);
    } else if (newActive < 0) {
      setActive(max);
    } else {
      setActive(newActive);
    }
  };

  return (
    <div className="Carousel">
      <div className="Carousel__main">
        <div className="Carousel__next" onClick={() => handleNext(false)}>
          {'<'}
        </div>
        {img.src && <img className="Carousel__img" src={img.src} alt={img.alt} />}
        <div className="Carousel__next" onClick={() => handleNext(true)}>
          {'>'}
        </div>
      </div>
      <span className="Carousel__active pt--5">
        {active + 1} / {max + 1}
      </span>
    </div>
  );
};

export default Carousel;
