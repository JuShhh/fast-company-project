import React, { useState } from 'react';

const Bookmark = () => {
  let [status, setStatus] = useState(false);
  const handleClick = () => {
    setStatus(!status);
  };

  return (
    <button onClick={() => handleClick()}>
      {status ? (
        <i class="bi bi-bookmark-star-fill"></i>
      ) : (
        <i class="bi bi-bookmark-star"></i>
      )}
    </button>
  );
};

export default Bookmark;
