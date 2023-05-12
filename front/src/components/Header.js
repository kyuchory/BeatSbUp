import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./css/Header.module.css";
import { CgProfile } from "react-icons/cg";

import axios from 'axios';

function Header() {
    const [isLogin, setIsLogin] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:3001/authCheck")
            .then((response) => {
                setIsLogin(response.data.isLogin);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Link to='/' ><img src='./logo.png' /></Link>
            </div>
            {/* {isLogin ? '로그아웃' : '로그인'} */}
            {/* 추후에 로그인, 로그아웃 다르게 설정 */}
            <div className={styles.profile}>
                <CgProfile size={'50px'} color='rgb(72, 72, 72)' cursor='pointer' />
                <div className={styles.profileSelector}>
                    <div className={styles.profileSelect}><Link to="/mypage">내정보</Link></div>
                    <div className={styles.profileSelect}><Link to="./">정보 수정</Link></div>
                    <div className={styles.profileSelect}><Link to="./">로그아웃</Link></div>
                </div>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menus}>
                    <Link to='/boardviewrecommand' className={styles.link}>여행지 추천</Link>
                </div>
                <div className={styles.menus}>
                    <Link to='/regions' className={styles.link}>관광지 보기</Link>
                </div><div className={styles.menus}>
                    <Link to='#' className={styles.link}>게시판</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;
