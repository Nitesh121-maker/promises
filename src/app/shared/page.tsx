import React from 'react';

const UserList = () => {
  // Sample user names
  const users = [
    'user1',
    'user2',
    'user3',
    'user4',
    'user5'
  ];

  return (
    <div className="max-w-lg mx-auto">
      <h2 className="text-2xl text-purple-300 font-bold mb-4">User List</h2>
      <ul className="divide-y divide-gray-200">
        {users.map((user, index) => (
          <li key={index} className="py-2">
            <p className="text-purple-600 font-bold">{user}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;