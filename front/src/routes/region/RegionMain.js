import styles from "./RegionMain.module.css";


function RegionMain() {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
            <div className={styles.side}>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
            </div>
            <div className={styles.center}></div>
            <div className={styles.side}>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
                <div className={styles.side_image}>
                    <div className={styles.regionImage}></div>
                    <p className={styles.regionName}>서울</p>
                </div>
            </div>
            </div>
            <div className={styles.list}>
                <button className={styles.listInner}></button>
                <button className={styles.listInner}></button>
                <button className={styles.listInner}></button>
                <button className={styles.listInner}></button>
                <button className={styles.listInner}>더 보기
                    <ul className={styles.detail}>
                        <li>강릉</li>
                        <li>강릉</li>
                        <li>강릉</li>
                        <li>강릉</li>
                        <li>강릉</li>
                    </ul>
                </button>
            </div>
        </div>
    );
}

export default RegionMain;