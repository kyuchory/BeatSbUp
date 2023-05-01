import Header from '../components/Header';

import styles from "./css/Mypage.module.css";

function Mypage() {
    return (
        <div className={styles.container}>
            <Header />
            
            <div className={styles.content}>
                <div className={styles.title}>마이페이지</div>
                <div className={styles.profile}>
                    <div className={styles.image}></div>
                    <div className={styles.detail}>
                        <div className={styles.name}>이름 : {'김OO'}</div>
                        <div className={styles.gender}>성별 : {'남'}</div>
                        <div className={styles.birth}>생년월일 : {'1999.01.01'}</div>
                        <div className={styles.buttons}>
                            <div className={styles.edit}>정보 수정</div>
                            <div className={styles.delete}>회원 탈퇴</div>
                        </div>
                    </div>
                </div>
                <div className={styles.meeting}>
                    <div className={styles.meetingTitle}>참여중인 모임</div>
                    <ol>
                        <li className={styles.meetingList}>강릉 여행</li>
                        <li className={styles.meetingList}>제주 여행</li>
                        {/* map 함수 이용해서 리스트 표시 */}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default Mypage;