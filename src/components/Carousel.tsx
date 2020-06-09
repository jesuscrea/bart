import React, { useEffect, useState } from 'react';
import { CarouselProps } from '../schemas/Carousel';
import cat from '../assets/images/black-cat.svg';

const initialImg = { src: '', alt: '' };

const Carousel: React.FC<CarouselProps> = ({ imgs = [initialImg] }: CarouselProps) => {
  const [max, setMax] = useState(0);
  const [active, setActive] = useState(0);
  const [img, setImg] = useState(initialImg);
  const [src, setSrc] = useState(cat);
  const notFoundMsg = 'No image provided';

  useEffect(() => {
    if (imgs.length) {
      setMax(imgs.length - 1);
    }
  }, []);

  useEffect(() => {
    setImg(imgs[active]);
  }, [active]);

  useEffect(() => {
    if (img.src) {
      import(`../assets/${img.src}`).then((image) => setSrc(image.default));
    }
  }, [img]);

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
        {true ? (
          <img className="Carousel__img" src={src} alt={img.alt} />
        ) : (
          <span className="red">{notFoundMsg}</span>
        )}
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
