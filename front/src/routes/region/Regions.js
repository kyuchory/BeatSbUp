import styles from "./css/Regions.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { region } from "../datas";

import Header from "../../components/Header";

function Regions() {
    const [view, setView] = useState(false);
    const [selectedDo, setSelectedDo] = useState('')
    const [selectedSi, setSelectedSi] = useState('')
    console.log(selectedDo, selectedSi)
    return (
        <div className={styles.container}>
            <Header />
            <h2>지역별 관광지 보기</h2>
            <div className={styles.do}>
                {region.map((item, index) => {
                    const doName = Object.keys(item)[0];
                    const cities = item[doName]; // 도시 배열 추출

                    return (
                        <div key={index} className={styles.doName} onClick={() => setSelectedDo(doName)}>
                            {doName}
                        </div>
                    );
                })}
            </div>
            <div className={styles.si}>
                {selectedDo &&
                    region.find(item => Object.keys(item)[0] === selectedDo)[selectedDo].map((siName, index) => {
                        return (
                            <div key={index} className={styles.siName} onClick={() => setSelectedSi(siName)}>
                                {siName}
                            </div>
                        );
                    })}
            </div>

        </div>
    );
}

export default Regions;