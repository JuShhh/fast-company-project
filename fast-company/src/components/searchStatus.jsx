import React from 'react';

const SearchStatus = ({ length }) => {
  const renderPhrase = (num) => {
    return num >= 2 && num <= 4 ? 'человека тусанут' : 'человек тусанет';
  };

  return (
    <>
      {length <= 0 ? (
        <span className='badge bg-danger'>Никто с тобой не тусанет</span>
      ) : (
        <>
          <span className='badge bg-primary'>
            {length} {renderPhrase(length)} с тобой сегодня
          </span>
        </>
      )}
    </>
  );
};

export default SearchStatus;
