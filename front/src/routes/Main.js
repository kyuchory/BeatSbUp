import { useState } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Header from '../components/Header';

import styles from "./css/Main.module.css";

function Main() {
  const [search, setSearch] = useState("");
  const onSearchChange = (e) => {
    setSearch(e.target.value)
  }
  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <div className={styles.imageContainer}>
        <AiFillCaretLeft size={50} color='grey' className={styles.imageLeft} cursor='pointer' />
        <AiFillCaretRight size={50} color='grey' className={styles.imageRight} cursor='pointer' />
        <input
          type="text"
          value={search}
          onChange={onSearchChange}
          placeholder="검색어를 입력해주세요."
          className={styles.search}
        />

      </div>
      <div className={styles.contentContainer}>content</div>
    </div>
  );
}

export default Main;