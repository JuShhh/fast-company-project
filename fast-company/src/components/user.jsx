import React from 'react';
import Qualitie from './qualitie';
import BookMark from './bookmark';

const User = ({ users, setUsers }) => {
  const handleDelete = (userId) => {
    setUsers((prevState) => prevState.filter((user) => user._id !== userId));
  };

  return users.map((user) => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>
        <Qualitie user={user} />
      </td>
      <td>{user.profession.name}</td>
      <td>{user.completedMeetings}</td>
      <td>{user.rate} / 5</td>
      <td>
        <BookMark user={user} />
      </td>
      <td>
        <button
          className='btn btn-danger'
          onClick={() => handleDelete(user._id)}
        >
          delete
        </button>
      </td>
    </tr>
  ));
};

export default User;
