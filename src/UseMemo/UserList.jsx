import React, { useMemo } from 'react';

const UserList = ({ users }) => {
  const processUserData = (users) => {
    console.log('Processing user data...');
    // Simulate an expensive data processing task
    return users.map(user => ({
      ...user,
      fullName: `${user.firstName} ${user.lastName}`
    }));
  };

  const processedUsers = useMemo(() => processUserData(users), [users]);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {processedUsers.map(user => (
          <li key={user.id}>{user.fullName}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
