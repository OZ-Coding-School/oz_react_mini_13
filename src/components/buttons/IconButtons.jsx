import React from 'react';

export default function IconButtons({ children, ...props }) {
  return (
    <button type="button" className="" {...props}>
      {children}
    </button>
  );
}
