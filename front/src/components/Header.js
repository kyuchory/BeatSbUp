import { Link } from 'react-router-dom';
import styles from './css/Header.module.css';

function Header() {
    return (
        <div>
            <div className={styles.logoContainer}>
                <Link to='/' ><img src='./logo.png' /></Link>
            </div>
            <div className={styles.menuContainer}>
                <div className={styles.menus}>
                    <Link to='/boardviewrecommand'>여행지 추천</Link>
                </div>
                <div className={styles.menus}>
                    <Link to='/regions'>관광지 보기</Link>
                </div><div className={styles.menus}>
                    <Link to='#'>게시판</Link>
                </div>
            </div>
        </div>
    );
}

export default Header;