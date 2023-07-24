import React, { useState, useEffect } from 'react';

function UserList() {
  const [userList, setUserList] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        setUsers(data);
        setUserList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    var newUserList = userList.filter((item,idx) => {
        return item.name.indexOf(e.target.value) != -1;
    });
    // console.log(newUserList);
    setUsers(newUserList);
  };
  return (
    <div>
      <h1>User List</h1>
      <label htmlFor="search">검색 : </label>
      <input type='text' value={value} onChange={handleChange} />
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;

