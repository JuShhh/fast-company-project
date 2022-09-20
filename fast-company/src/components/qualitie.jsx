import React from 'react';

const Qualitie = ({ user }) => {
  return user.qualities.map((quality) => {
    return (
      <span key={quality._id} className={`badge bg-${quality.color} mx-1`}>
        {quality.name}
      </span>
    );
  });
};

export default Qualitie;
