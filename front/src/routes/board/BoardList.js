import React, { useEffect } from "react";
import styles from "./css/BoardList.module.css";
import { useState } from "react";
import Pagination from "react-js-pagination";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import axios from "axios";

const BoardList = () => {
  const test = [
    {
      title: "테스트제목1",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 1,
    },
    {
      title: "테스트제목2",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 2,
    },
    {
      title: "테스트제목3",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 3,
    },
    {
      title: "테스트제목4",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 4,
    },
    {
      title: "테스트제목5",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 5,
    },
    {
      title: "테스트제목6",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 6,
    },
    {
      title: "테스트제목7",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 7,
    },
    {
      title: "테스트제목8",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 8,
    },
    {
      title: "테스트제목9",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 9,
    },
    {
      title: "테스트제목10",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 10,
    },
    {
      title: "테스트제목11",
      Views: 1,
      Date: 2,
      Comments: 3,
      User: "신규철",
      id: 11,
    },
  ];

  //pagination --
  //실제로 데이터 받아오면 여기다가 넣기
  const [data, setData] = useState([]);

  const [page, setPage] = useState(1);
  const [items] = useState(7);

  const handlePageChange = (page) => {
    setPage(page);
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const td = await axios.get("http://localhost:3001/BoardList");
        setData(td.data);
      } catch (e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);

  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.BoardListTitle}>자유 게시판</div>
        <div className={styles.BoardListAttribute}>
          <div className={styles.BoardListAttributeTitle}>제목</div>
          <div className={styles.BoardListAttributeViews}>조회수</div>
          <div className={styles.BoardListAttributeDate}>작성일</div>
          <div className={styles.BoardListAttributeComents}>댓글</div>
          <div className={styles.BoardListAttributeUser}>작성자</div>
        </div>
        <div className={styles.BoardLists}>
          <div className={styles.BoardList}>
            {data
              .slice(items * (page - 1), items * (page - 1) + items)
              .map((p) => (
                <Link to="/BoardView">
                  <ul>
                    <li>{p.title}</li>
                    <li>{p.view_count}</li>
                    <li>{p.regdate}</li>
                    <li>댓글수 구현</li>
                    <li>{p.writer}</li>
                  </ul>
                </Link>
              ))}
          </div>
          <div className={styles.PaginationBox}>
            <Pagination
              className={styles.Pagination}
              activePage={page}
              itemsCountPerPage={items}
              totalItemsCount={test.length - 1}
              pageRangeDisplayed={5}
              onChange={handlePageChange}
              prevPageText={"<"}
              nextPageText={">"}
            ></Pagination>
          </div>
          <div>
            <Link to="/BoardWrite">
              <div>글작성</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardList;
