import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Link to='/' ><img src='./logo.png' /></Link>
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