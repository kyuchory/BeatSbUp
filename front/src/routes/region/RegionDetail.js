import styles from "./RegionDetail.module.css";

function RegionDetail() {
    return (
        <div className={styles.container}>
            <div className={styles.name}>강릉</div>
            <div className={styles.outline}>개요~~~</div>
            <div className={styles.sight}>
                <div>
                    이미지 꽉 채우고 아래쪽에 글씨 보이게 
                    <image></image>
                    <p></p>
                </div>
            </div>
            <div className={styles.list}>놀거리, 먹거리 등등 </div>
        </div>
    );
}

export default RegionDetail;