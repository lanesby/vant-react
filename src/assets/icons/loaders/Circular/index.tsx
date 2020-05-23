import React, { ReactElement } from 'react';
import './index.scss';

interface Props {
  className: string;
}

export default function CircularLoading({ className }: Props): ReactElement {
  return (
    <div className='circular-loading'>
      <svg
        className={className}
        viewBox='0 0 100 100'
        xmlns='http://www.w3.org/2000/svg'
      >
        <circle cx='50' cy='50' r='45' />
      </svg>
    </div>
  );
}
