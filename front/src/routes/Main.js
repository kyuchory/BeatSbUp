import Header from '../components/Header';

import styles from "./css/Main.module.css";

function Main() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.mainImageContainer}>mainImage</div>
      <div className={styles.contentContainer}>content</div>
    </div>
  );
}

export default Main;