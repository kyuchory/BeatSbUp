import React from "react";
import { useState } from "react";
import axios from "axios";
function Gather_new() {

    const [name, setName] = useState("");
    const onNameChange = (e) => {
        setName(e.target.value);
    };
    function insert() {
        axios
          .get("http://localhost:3001/gathering/insert", {
            params: {
              name: name,
              user: 12345
            },
          })
          .then(function (response) {
            console.log(response);
          });
      }
    return (
        <div>
            <div>
            <input
              type="name"
              value={name}
              onChange={onNameChange}
              placeholder="모임 이름을 입력해주세요"
            />
          </div>
          <button onClick={insert}>생성하기</button>
        </div>
    );
}

export default Gather_new;