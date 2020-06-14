import React, { useEffect, useState } from 'react';
import { CarouselProps } from '../schemas/Carousel';

const initialImg = { src: '', title: '' };

const Carousel: React.FC<CarouselProps> = ({ imgs = [initialImg] }: CarouselProps) => {
  const [max, setMax] = useState(0);
  const [active, setActive] = useState(0);
  const [img, setImg] = useState(initialImg);
  const [nextLeftClick, setNextLeftClick] = useState(false);
  const [nextRightClick, setNextRightClick] = useState(false);
  const notFoundMsg = 'No image provided';

  useEffect(() => {
    if (imgs.length) {
      setMax(imgs.length - 1);
    }
  }, []);

  useEffect(() => {
    setImg(imgs[active]);
  }, [active]);

  const handleNext = (next: boolean) => {
    if (next) {
      setNextRightClick(true);
    } else {
      setNextLeftClick(true);
    }

    const newActive = next ? active + 1 : active - 1;
    if (newActive > max) {
      setActive(0);
    } else if (newActive < 0) {
      setActive(max);
    } else {
      setActive(newActive);
    }

    const timer = setTimeout(() => {
      setNextRightClick(false);
      setNextLeftClick(false);
      clearTimeout(timer);
    }, 100);
  };

  return (
    <div className="Carousel">
      <div></div>
      <div className="Carousel__main">
        <div
          className={`Carousel__next${!nextLeftClick ? ' Carousel__next--3d' : ''}`}
          onClick={() => handleNext(false)}
        >
          {'🠸'}
        </div>
        {img.src ? (
          <div className="Carousel__container">
            <img className="Carousel__img" src={img.src} alt={img.title} />
            <span className="Carousel__title">{img.title}</span>
            <div className="Carousel__pagination">
              {imgs.map((_, index) => (index === active ? '●' : '○'))}
            </div>
          </div>
        ) : (
          <span className="red">{notFoundMsg}</span>
        )}
        <div
          className={`Carousel__next${!nextRightClick ? ' Carousel__next--3d' : ''}`}
          onClick={() => handleNext(true)}
        >
          {'🠺'}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
