import { useState, useEffect } from 'react';
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

  const [festivalData, setFestivalData] = useState({});
  const [random10FData, setRandom10FData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/festival/show')
      .then(function (response) {
        setFestivalData(response.data);
      });
  }, []);

  useEffect(() => {
    if (Object.keys(festivalData).length > 0) {
      const randomFestivals = [];
      while (randomFestivals.length < 10) {
        const randomIndex = Math.floor(Math.random() * festivalData.length);
        const randomFestival = festivalData[randomIndex];
        if (!randomFestivals.includes(randomFestival)) {
          randomFestivals.push(randomFestival);
        }
      }
      setRandom10FData(randomFestivals);
    }
  }, [festivalData]);
  const [fPage, setFPage] = useState(0);
  const fNext = () => {
    if (fPage == 9) setFPage(0);
    else setFPage(fPage + 1);
  }
  const fPrevious = () => {
    if (fPage == 0) setFPage(9);
    else setFPage(fPage - 1);
  }
  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <div className={styles.imageContainer}>
        <AiFillCaretLeft size={50} color='grey'
          className={styles.imageLeft} cursor='pointer'
          onClick={() => fPrevious()} />
        <AiFillCaretRight size={50} color='grey'
          className={styles.imageRight} cursor='pointer'
          onClick={() => fNext()} />
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
        <Link to='/'>
          {random10FData.length > 0 && <img src={random10FData[fPage].image} style={{ maxWidth: '100%', height: 'auto' }} />}
        </Link>
      </div>
      <div className={styles.contentContainer}>
      </div>
    </div>
  );
}

export default Main;