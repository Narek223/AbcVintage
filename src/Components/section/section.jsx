import React, { forwardRef } from 'react';

const section = forwardRef(({children }, ref) => {
  return (
    <div  ref={ref}>
      {children}
    </div>
  );
});

export default section;