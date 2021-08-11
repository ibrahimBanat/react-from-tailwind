import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Data = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'https://form-backend-dev.herokuapp.com/getAll',
      data: {},
    }).then(response => {
      setData([...response.data]);
    });
  }, []);
  return (
    <div>
      {data.map(da => {
        return (
          <div>
            <ul>
              <li>{da.name}</li>
              <li>{da.email}</li>
              <li>{da.phone}</li>
              <li>{da.birth}</li>
              <li>{da.country}</li>
              <li>{da.university}</li>
              <li>{da.programmingLanguage}</li>
            </ul>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default Data;
