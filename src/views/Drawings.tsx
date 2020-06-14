import React, { useEffect, useState } from 'react';
import { Carousel, Spinner } from '../components';

const getImgSrc = async (src: string) => {
  const img = await import(`../assets/${src}`);
  return img.default || '';
};

const getDrawings = async () => {
  const files = (require as any)
    .context('../assets/images/drawings', false, /\.(png|jpe?g|svg)$/)
    .keys()
    .map((x: string) => x.replace('./', 'images/drawings/'));
  const imported = await (Promise as any).allSettled(files.map((x: string) => getImgSrc(x)));
  const srcs = imported.filter((x: any) => x.status === 'fulfilled').map((x: any) => x.value);
  return srcs.map((src: string) => ({
    src,
    title: src.replace(/(.*\/)*/, '').replace(/\..*/g, '')
  }));
};

const Drawings: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [drawings, setDrawings] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      setDrawings(await getDrawings());
      setLoading(false);
    })();
  }, []);

  return (
    <div className="Drawings">
      {loading && !drawings.length ? <Spinner /> : <Carousel imgs={drawings} />}
    </div>
  );
};

export default Drawings;
