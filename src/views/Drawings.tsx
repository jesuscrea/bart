import React from 'react';
import { Carousel } from '../components';

const getDrawings = (): any =>
  (require as any)
    .context('../assets/images/drawings', false, /\.(png|jpe?g|svg)$/)
    .keys()
    .map((el: string) => ({
      src: el.replace('./', 'images/drawings/'),
      alt: el.replace('./', '').replace(/_/g, ' ').replace('.png', '')
    }));

const Drawings: React.FC = () => <Carousel imgs={getDrawings()} />;

export default Drawings;
