import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

import Header from "../components/Header";

import styles from "./css/Main.module.css";
import axios from "axios";

import dayjs from "dayjs";
import Pagination from "react-js-pagination";
import Floating from "./schedule/Floating";

function Main() {
  const [searchText, setSearchText] = useState("");
  const navigate = useNavigate();

  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const searchKeyword = () => {
    try {
      navigate("/searchDetail", {
        state: { searchText },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const enterKeyPress = (e) => {
    if (e.key === "Enter") {
      searchKeyword(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };

  const [festivalData, setFestivalData] = useState({});
  const [random10FData, setRandom10FData] = useState([]);

  const [boardFreeData, setBoardFreeData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const td = await axios.get("http://localhost:3001/boardList");
        setBoardFreeData(td.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  const [boardPartyData, setBoardPartyData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const td = await axios.get("http://localhost:3001/BoardList_party");
        console.log(td.data);
        setBoardPartyData(td.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/festival/show").then(function (response) {
  //     setFestivalData(response.data);
  //   });
  // }, []);

  // useEffect(() => {
  //   if (Object.keys(festivalData).length > 0) {
  //     const randomFestivals = [];
  //     while (randomFestivals.length < 10) {
  //       const randomIndex = Math.floor(Math.random() * festivalData.length);
  //       const randomFestival = festivalData[randomIndex];
  //       if (!randomFestivals.includes(randomFestival)) {
  //         randomFestivals.push(randomFestival);
  //       }
  //     }
  //     setRandom10FData(randomFestivals);
  //   }
  // }, [festivalData]);

  const [fPage, setFPage] = useState(0);
  const fNext = () => {
    if (fPage == 9) setFPage(0);
    else setFPage(fPage + 1);
  };
  const fPrevious = () => {
    if (fPage == 0) setFPage(9);
    else setFPage(fPage - 1);
  };

  //pagination --
  //실제로 데이터 받아오면 여기다가 넣기

  const [page, setPage] = useState(1);
  const [items] = useState(7);

  const handlePageChange = (page) => {
    setPage(page);
  };

  ////////
  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <div className={styles.imageContainer}>
        <AiFillCaretLeft
          size={50}
          color="grey"
          className={styles.imageLeft}
          cursor="pointer"
          onClick={() => fPrevious()}
        />
        <AiFillCaretRight
          size={50}
          color="grey"
          className={styles.imageRight}
          cursor="pointer"
          onClick={() => fNext()}
        />
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
        <Link to="/">
          {random10FData.length > 0 && (
            <img
              src={random10FData[fPage].image}
              style={{ maxWidth: "100%", height: "auto" }}
            />
          )}
        </Link>
      </div>
      <div className={styles.testWrap}>
        <div className={styles.containerFaker}></div>
        <div className={styles.contentContainer}>
          <div className={styles.boardViews}>
            <div className={styles.boardFree}>
              <div className={styles.boardTitle}>자유 게시판</div>
              <div className={styles.line}></div>
              <div className={styles.contents}>
                {boardFreeData.map((p) => (
                  <Link
                    to="/BoardView"
                    state={{
                      boardData: p,
                    }}
                    className={styles.listLink}
                  >
                    <ul className={styles.BoardListEach}>
                      <li className={styles.title}>{p.title}　</li>
                      <li className={styles.commentsNum}>({"3"})</li>
                      <li className={styles.writer}>{p.writer}</li>
                    </ul>
                    <div className={styles.line2}></div>
                  </Link>
                ))}
                <div className={styles.PaginationBox}>
                  <Pagination
                    className={styles.Pagination}
                    activePage={page}
                    itemsCountPerPage={items}
                    totalItemsCount={boardFreeData.length - 1}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    prevPageText={"<"}
                    nextPageText={">"}
                  ></Pagination>
                </div>
              </div>
            </div>
            <div className={styles.boardParty}>
              <div className={styles.boardTitle}>함께 가요 게시판</div>
              <div className={styles.line}></div>
              <div className={styles.contents}>
                {boardPartyData.map((p) => (
                  <Link
                    to="/BoardView"
                    state={{
                      boardData: p,
                    }}
                    className={styles.listLink}
                  >
                    <ul className={styles.BoardListEach}>
                      <li className={styles.title}>{p.title}　</li>
                      <li className={styles.commentsNum}>({"3"})</li>
                      <li className={styles.writer}>{p.writer}</li>
                    </ul>
                    <div className={styles.line2}></div>
                  </Link>
                ))}
                <div className={styles.PaginationBox}>
                  <Pagination
                    className={styles.Pagination}
                    activePage={page}
                    itemsCountPerPage={items}
                    totalItemsCount={boardPartyData.length - 1}
                    pageRangeDisplayed={5}
                    onChange={handlePageChange}
                    prevPageText={"<"}
                    nextPageText={">"}
                  ></Pagination>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.floatingContainer}>
          <div className={styles.floatingBanner}>
            <Floating />
          </div>
        </div>
        <div
          style={{
            height: 5000,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Main;
