import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserTable({ data, loading }) {
  const [user, setUser] = useState('');
  // console.log(data);

  const tempData = Object.values(data);
  tempData.pop();

  // sort array object in order of calender
  const tempSort = data;
  delete tempSort.users;
  const sortedKey = Object.keys(tempSort).sort((a, b) => {
    const [dayA, monthA, yearA] = a.split('-').map(Number);
    const [dayB, monthB, yearB] = b.split('-').map(Number);
    return (
      new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB)
    );
  });
  const sortedObj = {};
  for (const key of sortedKey) {
    sortedObj[key] = data[key];
  }
  const tempDate = Object.keys(sortedObj);
  console.log(tempData);

  if (loading) {
    return (
      <div className='section-center section page'>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Date Working</th>
              <th>First Entry</th>
              <th>Last Exit</th>
              <th>In Office</th>
              <th>Number of Entry</th>
              <th>Number of Exit</th>
            </tr>
            {tempData.map((value, index) => {
              const {
                M6RSfVNLiUPu44jlGOoEH5P5yql2: user1,
                zqrU6aemLKgrhOzHmRe4d38BD633: user2,
              } = value;
              return <tbody></tbody>;
            })}
          </thead>
        </Table>
      </div>
    );
  }
}

export default UserTable;
// M6RSfVNLiUPu44jlGOoEH5P5yql2
// zqrU6aemLKgrhOzHmRe4d38BD633
