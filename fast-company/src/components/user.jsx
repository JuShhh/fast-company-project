import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({
  _id,
  name,
  profession,
  qualities,
  completedMeetings,
  rate,
  bookmark,
  onDelete,
  onToggleBookmark,
}) => {
  return (
    <tr key={_id}>
      <td>{name}</td>
      <td>
        {qualities.map((q) => (
          <Qualitie key={q._id} {...q} />
        ))}
      </td>
      <td>{profession.name}</td>
      <td>{completedMeetings}</td>
      <td>{rate} / 5</td>
      <td>
        <BookMark status={bookmark} onClick={() => onToggleBookmark(_id)} />
      </td>
      <td>
        <button className='btn btn-danger' onClick={() => onDelete(_id)}>
          delete
        </button>
      </td>
    </tr>
  );
};

export default User;
