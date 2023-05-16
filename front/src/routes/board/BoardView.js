import React, { useEffect, useState } from "react";
import styles from "./css/BoardView.module.css";
import Header from "../../components/Header";

const BoardView = () => {
  useEffect(() => {
    submitComment();
  }, []);
  const [comment, setComment] = useState("");

  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const submitComment = () => {
    //comment의 내용을 db로 전송 -> 내용을 댓글 리스트에 표현.
    setComment("");
  };

  return (
    <div className={styles.mainPageContainer}>
      <Header />
      <div className={styles.contentContainer}>
        <div className={styles.title}>여행 같이 가실분 !</div>
        <div className={styles.date}>2023-05-01</div>
        <div className={styles.viewAndWriter}>
          <div>102 Views</div>
          <div className={styles.bar}> </div>
          <div className={styles.writer}>sls789456</div>
        </div>
        <div className={styles.contentBox}>
          <div>
            관세청(청장 윤태식)과 면세점협회(협회장 유신열)는 5월 1일(월)부터
            31일(수)까지 한 달 동안 ‘코리아 듀티프리 페스타’(「Korea Duty-Free
            FESTA 2023」)를 개최한다. 이번 행사는 국내 최초의 전국 단위 면세쇼핑
            축제로, 5월 여행 성수기*에 맞춰 외국인 관광객의 방한과 국내 소비를
            촉진하기 위해 마련됐다. * 일본 골든위크 : 4월 29일 ~ 5월 7일 / 중국
            노동절 연휴 : 4월 29일 ~ 5월 3일 인천, 서울, 부산, 제주 등 전국
            15개의 모든 면세점 업체가 참여하는 가운데, ▲온·오프라인 최대 20%
            가격할인, 경품제공 등 공동 행사, ▲업체별 특색을 살린 개별 행사 등
            다양한 프로그램으로 구성된다.
          </div>
        </div>
        <div className={styles.comment}>
          <div className={styles.commentBox}>
            <div className={styles.profileArea}>
              여기에 댓글작성하는 본인 아이디
            </div>
            <div className={styles.writeArea}>
              <div className={styles.wirteAreaInner}>
                <textarea
                  className={styles.commentTextArea}
                  placeholder="다양한 의견이 서로 존중될 수 있도록 다른사람에게 불쾌감을 주는 욕설, 혐오, 비하의 표현이나 타인의 권리를 침해하는 내용은 주의해주세요. 모든 작성자는 본인이 작성한 의견에 대해 법적 책임을 갖는다는 점 유의하시기 바랍니다."
                  onChange={handleComment}
                >
                  {/*추가로 로그인 되어있지 않다면 댓글 작성창 안보이게 하고 댓글작성은 로그인이 필요합니다. 문구 띄우기 */}
                </textarea>
              </div>
            </div>
            <div className={styles.uploadBox}>
              <button className={styles.uploadButton} onClick={submitComment}>
                등록
              </button>
            </div>
          </div>
          <div className={styles.commentList}>댓글 리스트</div>
        </div>
      </div>
    </div>
  );
};

export default BoardView;
