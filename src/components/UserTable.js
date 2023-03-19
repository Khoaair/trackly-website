import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserTable({ data, loading }) {
  const [user, setUser] = useState('KyHQ');
  const [workigData, setWorkingData] = useState([]);
  // console.log(data);

  const tempData = Object.values(data);
  tempData.pop();

  // sort array object in order of calender
  const tempSort = data;
  delete tempSort.users;
  const today = new Date();
  const todayStr = `${today.getDate().toString().padStart(2, '0')}-${(
    today.getMonth() + 1
  )
    .toString()
    .padStart(2, '0')}-${today.getFullYear()}`;
  const sortedKey = Object.keys(tempSort)
    .filter(key => {
      const [day, month, year] = key.split('-').map(Number);
      const keyDate = new Date(year, month - 1, day);
      return keyDate <= today;
    })
    .sort((a, b) => {
      const [dayA, monthA, yearA] = a.split('-').map(Number);
      const [dayB, monthB, yearB] = b.split('-').map(Number);
      return (
        new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA)
      );
    });
  const sortedObj = {};
  for (const key of sortedKey) {
    sortedObj[key] = data[key];
  }
  const tempDate = Object.keys(sortedObj);
  console.log(tempData);

  // console.log(tempUser);
  const updateSort = e => {
    setUser(e.target.value);
  };

  const removeUser = () => {
    const newData = { ...tempData };
    console.log(newData);
  };

  if (loading) {
    return (
      <div className='section-center section page'>
        <form onSubmit={e => e.preventDefault()}>
          <label htmlFor='sort'>
            <select
              name='sort'
              id='sort'
              className='sort-input'
              value={user}
              onChange={updateSort}
            >
              <option value='KyHQ'>KyHQ</option>
              <option value='KhoaTCD'>KhoaTCD</option>
            </select>
          </label>
          <button className='btn' onClick={removeUser}>
            OK
          </button>
        </form>
        <div className='table-container'>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Name</th>
                <th>Date Working</th>
              </tr>
            </thead>
            <tbody>
              {tempDate.map((date, index) => {
                return (
                  <tr key={index}>
                    <td>{user}</td>
                    <td>{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>First Entry</th>
                <th>Last Exit</th>
                <th>In Office</th>
                <th>Number of Entry</th>
                <th>Number of Exit</th>
              </tr>
            </thead>
            <tbody>
              {tempDate.map((date, index) => {
                return (
                  <tr key={index}>
                    <td>{user}</td>
                    <td>{date}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

export default UserTable;
// M6RSfVNLiUPu44jlGOoEH5P5yql2
// zqrU6aemLKgrhOzHmRe4d38BD633

// tempData.map((data, index) => {
//   const {
//     M6RSfVNLiUPu44jlGOoEH5P5yql2: user1,
//     zqrU6aemLKgrhOzHmRe4d38BD633: user2,
//   } = data;
//   return (
//     <tr key={index}>
//       <td>{user}</td>
//     </tr>
//   );
// })
