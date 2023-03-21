import styles from "./css/Main.module.css";

function Main() {
  return (
    <div className={styles.mainPageContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.logoHeaderContainer}>logo</div>
        <div className={styles.menuHedaerContainer}>menu</div>
      </div>
      <div className={styles.mainImageContainer}>mainImage</div>
      <div className={styles.contentContainer}>content</div>
    </div>
  );
}

export default Main;