import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Header from '../components/Header';

import styles from "./css/Main.module.css";
import axios from 'axios';

function Main() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onSearchChange = (e) => {
    setSearchText(e.target.value)
  }

  const searchKeyword = () => {
    try {
      navigate('/searchDetail', {
        state: { searchText }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const enterKeyPress = e => {
    if (e.key === 'Enter') {
      searchKeyword(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };


  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <div className={styles.imageContainer}>
        <AiFillCaretLeft size={50} color='grey' className={styles.imageLeft} cursor='pointer' />
        <AiFillCaretRight size={50} color='grey' className={styles.imageRight} cursor='pointer' />
        <form className={styles.searchForm}>
          <input
            type="text"
            value={searchText}
            onChange={onSearchChange}
            placeholder="검색어를 입력해주세요."
            className={styles.search}
            onKeyPress={enterKeyPress}
          />
        </form>
        <Link to='/' ><img src='./logo.png' size="100%" /></Link>

      </div>
      <div className={styles.contentContainer}>
      </div>
    </div>
  );
}

export default Main;