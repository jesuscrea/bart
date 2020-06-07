import React from 'react';

interface TitleProps {
  className?: string;
  title: string;
}

/**
 * TODO: Fix double typing
 */
const Title: React.FC<TitleProps> = ({ className = '', title = '' }: TitleProps) => (
  <h1 className={['Title', className].join(' ')}>{title}</h1>
);

export default Title;
