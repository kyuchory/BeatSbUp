import styles from "./Floating.module.css";
function Floating() {
  return (
    <div className={styles.container}>
      <div className={styles.selGath}>
        <button className={styles.selButton}>모임1</button>
        <button className={styles.selButton}>모임2</button>
        <button className={styles.selButton}>모임3</button>
        <button className={styles.selButton}>모임4</button>
      </div>
      <div className={styles.info}>
        <div style={{ margin: "auto" }}>
          12/1 ~ 12/3 여행
          <br />
          맛집투어
        </div>
      </div>
      <div className={styles.pickdate}>
        <button className={styles.selButton2}>1일차</button>
        <button className={styles.selButton2}>2일차</button>
        <button className={styles.selButton2}>3일차</button>
      </div>
      <div className={styles.schedule}>
        <div className={styles.ele}>
          아산 피나클(명소)
          <br />
          15:00 ~ 18:00
          <div style={{ textAlign: "right" }}>x</div>
        </div>
      </div>
    </div>
  );
}

export default Floating;
