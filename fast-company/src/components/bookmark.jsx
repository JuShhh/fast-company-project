import React from 'react';

const Bookmark = ({status, ...rest}) => {


  return (
    <button {...rest}>
      {status ? (
        <i class="bi bi-bookmark-star-fill"></i>
      ) : (
        <i class="bi bi-bookmark-star"></i>
      )}
    </button>
  );
};

export default Bookmark;
