import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function UserTable({ data, loading }) {
  const [user, setUser] = useState('M6RSfVNLiUPu44jlGOoEH5P5yql2');
  const [userData, setUserData] = useState({});
  const [displayTable, setDisplayTable] = useState(false);

  ////////////////////////////////////////////////////////////////////////////////
  // sort array object in order of calender
  const tempSort = Object.assign({}, data);
  delete tempSort.users;
  const today = new Date();
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
  ////////////////////////////////////////////////////////////////////////////////
  // Handle Event
  function handleOnChange(e) {
    setUser(e.target.value);
    setDisplayTable(false);
    setUserData(sortedObj);
  }
  // console.log(data);
  const handleRemoveObject = value => {
    setDisplayTable(true);
    const newData = { ...sortedObj };
    Object.keys(newData).forEach(date => {
      if (newData[date][value]) {
        if (value === 'M6RSfVNLiUPu44jlGOoEH5P5yql2') {
          const { zqrU6aemLKgrhOzHmRe4d38BD633, ...rest } = newData[date];
          newData[date] = rest;
        }
        if (value === 'zqrU6aemLKgrhOzHmRe4d38BD633') {
          const { M6RSfVNLiUPu44jlGOoEH5P5yql2, ...rest } = newData[date];
          newData[date] = rest;
        }
      }
    });
    setUserData(newData);
  };

  ////////////////////////////////////////////////////////////////////////////////
  // function
  const convertHour = value => {
    const hours = Math.floor(value);
    const minutes = Math.round((value - hours) * 60);
    const time =
      hours.toString().padStart(2, '0') +
      ':' +
      minutes.toString().padStart(2, '0');
    return time;
  };

  const calcEntry = value => {
    if (value === 0) {
      return 0;
    } else {
      if (value % 2 !== 0) {
        return Math.round(value / 2);
      }
      if (value % 2 === 0) {
        return Math.floor(value / 2);
      }
    }
  };
  const calcExit = value => {
    if (value === 0) {
      return 0;
    } else {
      return Math.floor(value / 2);
    }
  };
  ////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////
  // Render components
  if (loading) {
    return (
      <div className='section-center section page'>
        <div className='form-search'>
          <form onSubmit={e => e.preventDefault()}>
            <label htmlFor='sort'>
              <select
                name='sort'
                id='sort'
                className='user-select'
                value={user}
                onChange={handleOnChange}
              >
                <option value='M6RSfVNLiUPu44jlGOoEH5P5yql2'>KyHQ</option>
                <option value='zqrU6aemLKgrhOzHmRe4d38BD633'>KhoaTCD</option>
              </select>
            </label>
          </form>
          <button
            className='btn-search'
            type='button'
            onClick={() => {
              handleRemoveObject(user);
            }}
          >
            Search
          </button>
        </div>
        {displayTable && (
          <div className='table-container'>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date Working</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(userData).map((date, index) => {
                  return (
                    <tr key={index}>
                      <td>
                        {user === 'M6RSfVNLiUPu44jlGOoEH5P5yql2'
                          ? 'KyHQ'
                          : 'KhoaTCD'}
                      </td>
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
                {Object.values(userData).map((data, index) => {
                  const user = Object.keys(data)[0];
                  if (user === 'M6RSfVNLiUPu44jlGOoEH5P5yql2') {
                    return (
                      <tr key={index}>
                        <td>{`${data.M6RSfVNLiUPu44jlGOoEH5P5yql2.firstHourIn}:${data.M6RSfVNLiUPu44jlGOoEH5P5yql2.firstMinIn}`}</td>
                        <td>{`${data.M6RSfVNLiUPu44jlGOoEH5P5yql2.lastHourOut}:${data.M6RSfVNLiUPu44jlGOoEH5P5yql2.lastMinOut}`}</td>
                        <td>
                          {convertHour(
                            data.M6RSfVNLiUPu44jlGOoEH5P5yql2.officeTime
                          )}
                        </td>
                        <td>
                          {calcEntry(data.M6RSfVNLiUPu44jlGOoEH5P5yql2.Count)}
                        </td>
                        <td>
                          {calcExit(data.M6RSfVNLiUPu44jlGOoEH5P5yql2.Count)}
                        </td>
                      </tr>
                    );
                  }
                  if (user === 'zqrU6aemLKgrhOzHmRe4d38BD633') {
                    return (
                      <tr key={index}>
                        <td>{`${data.zqrU6aemLKgrhOzHmRe4d38BD633.firstHourIn}:${data.zqrU6aemLKgrhOzHmRe4d38BD633.firstMinIn}`}</td>
                        <td>{`${data.zqrU6aemLKgrhOzHmRe4d38BD633.lastHourOut}:${data.zqrU6aemLKgrhOzHmRe4d38BD633.lastMinOut}`}</td>
                        <td>
                          {convertHour(
                            data.zqrU6aemLKgrhOzHmRe4d38BD633.officeTime
                          )}
                        </td>
                        <td>
                          {calcEntry(data.zqrU6aemLKgrhOzHmRe4d38BD633.Count)}
                        </td>
                        <td>
                          {calcExit(data.zqrU6aemLKgrhOzHmRe4d38BD633.Count)}
                        </td>
                      </tr>
                    );
                  }
                })}
              </tbody>
            </Table>
          </div>
        )}
      </div>
    );
  }
}

export default UserTable;
// M6RSfVNLiUPu44jlGOoEH5P5yql2
// zqrU6aemLKgrhOzHmRe4d38BD633
