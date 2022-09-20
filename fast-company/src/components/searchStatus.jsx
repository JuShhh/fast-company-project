import React from 'react';

const SearchStatus = ({ users }) => {
  const renderPhrase = (num) => {
    return num >= 2 && num <= 4 ? 'человека тусанут' : 'человек тусанет';
  };

  return (
    <>
      {users.length <= 0 ? (
        <span className='badge bg-danger'>Никто с тобой не тусанет</span>
      ) : (
        <>
          <span className='badge bg-primary'>
            {users.length} {renderPhrase(users.length)} с тобой сегодня
          </span>
        </>
      )}
    </>
  );
};

export default SearchStatus;
