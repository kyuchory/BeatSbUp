import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";

function Gathering() {
  const [data, setData] = useState([]);
  function drop(item) {
    axios
      .get("http://localhost:3001/gathering/drop", {
        params: {
          name: item,
          user: 12345,
        }
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      });
  }
  function fetchData() {
    axios
      .get("http://localhost:3001/gathering/select", {
        params: {
          user: 12345,
        }
      })
      .then(function (response) {
        console.log(response);
        setData(response.data);
      });
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div>
        hi
      </div>
      <div>
        {data.length === 0 ? (
          <p>모임을 생성하거나 모임에 가입하세요!</p>
        ) : (
          data.map((item, index) => (
            <div>
            <p>{item.name}</p>
            <Link to={'/gather_modi'} state={{name : item.name}}>o</Link>
            <button onClick={()=>drop(item.name)}>x</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Gathering;
