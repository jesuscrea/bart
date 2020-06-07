import React from 'react';

interface LinkProps {
  className: string;
  href: string;
  text: string;
}

const Link: React.FC<LinkProps> = ({ className = '', href = '#', text = 'Link' }: LinkProps) => (
  <a className={['Link', className].join(' ')} href={href}>
    {text}
  </a>
);

export default Link;
