import React from 'react';
import { PaginationProps } from '../schemas/Pagination';

const Pagination: React.FC<PaginationProps> = ({ length, active }: PaginationProps) => {
  return (
    <div className="Pagination">
      {Array(length)
        .fill(null)
        .map((_: any, index: any) => (index === active ? '●' : '○'))}
    </div>
  );
};

export default Pagination;
