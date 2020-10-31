import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Spinner } from '../components';
import { Image } from '../schemas/Carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const getImgSrc = async (src: string) => {
  const img = await import(`../assets/${src}`);
  return img.default || '';
};

const getDrawings = async () => {
  const files = (require as any)
    .context('../assets/images/gallery', false, /\.(png|jpe?g|svg)$/)
    .keys()
    .map((x: string) => x.replace('./', 'images/gallery/'));
  const imported = await (Promise as any).allSettled(files.map((x: string) => getImgSrc(x)));
  const srcs = imported.filter((x: any) => x.status === 'fulfilled').map((x: any) => x.value);

  return srcs.map((src: string) => ({
    src,
    title: src.replace(/(.*\/)*/, '').replace(/\..*/g, '')
  }));
};

const Gallery: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [images, setImages] = useState([]);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };

  useEffect(() => {
    (async () => {
      setLoading(true);
      setImages(await getDrawings());
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    console.log(images);
  }, [images]);

  return (
    <div className="Gallery">
      {loading && !images.length ? (
        <Spinner />
      ) : (
        // <Slider {...settings}>
        //   {images.map((image: Image, index: any) => (
        //     <div key={index}>
        //       <img src={image.src} alt="" height="5%" />
        //     </div>
        //   ))}
        // </Slider>
        // <div>
        //   {images.map((image: Image, index: any) => (
        //     <div key={index}>
        //       <img src={image.src} alt="" width="5%" />
        //     </div>
        //   ))}
        // </div>
        <div></div>
      )}
    </div>
  );
};

export default Gallery;
