import styles from "./Regions.module.css";

function Regions() {
    return (
        <div className={styles.container}>
            <div className={styles.regions}>강원도</div>
            <div className={styles.outline}>
                대한민국의 도. 서쪽으로 경기도, 남서쪽으로 충청북도, 남쪽으로 경상북도, 동쪽으로 동해 바다와 맞닿아 있으며 북쪽으로는 북한 강원도와 맞닿아 있다. 휴전선 이북 지역을 제외한 실질 행정구역은 7시 11군으로 총 18개 시군으로 이루어진다. 이름의 유래는 조선시대 강원도의 주요 지역이었던 강릉과 원주 두 지역의 앞 글자를 따온 것이다.
            </div>
            <div className={styles.list}>
                춘천, 강릉 ,...
            </div>
            <div className={styles.sight}>
                명소들 리스트
            </div>
        </div>
    );
}

export default Regions;