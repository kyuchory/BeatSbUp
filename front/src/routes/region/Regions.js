import styles from "./css/Regions.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categoryData, { region } from "../datas";
import axios from "axios";

import Header from "../../components/Header";

function Regions() {
    const [selectedDo, setSelectedDo] = useState('')
    const [selectedSi, setSelectedSi] = useState('')
    const [selectedCat, setSelectedCat] = useState('')
    const [data, setData] = useState(null)
    const [dataLength, setDataLEngth] = useState(0);

    const handleDo = (value) => {
        setSelectedDo(value);
        setSelectedSi('');
        setSelectedCat('');
    }
    const handleSi = (value) => {
        setSelectedSi(value);
        setSelectedCat('');
    }
    const handleCat = (value) => {
        setSelectedCat(value);
    }

    useEffect(() => {
        axios.post("http://localhost:3001/data/recommand", {
              cat: selectedCat ? selectedCat : "",
              region: selectedSi ? selectedSi : selectedDo ? selectedDo : "",
            })
              .then(function (response) {
                setData(response.data);
                setDataLEngth(response.data.length)
              });
    }, [selectedDo, selectedSi, selectedCat])
    console.log(data)
    return (
        <div className={styles.container}>
            <Header />
            <h2>지역별 관광지 보기</h2>
            <div className={styles.contents}>
                <div className={styles.select}>
                    <div className={styles.regionSelect}>
                        <div className={styles.do}>
                            <div className={styles.doName} onClick={() => handleDo('')}>
                                전체
                            </div>
                            {region.map((item, index) => {
                                const doName = Object.keys(item)[0];
                                const cities = item[doName]; // 도시 배열 추출

                                return (
                                    <div key={index} className={styles.doName} onClick={() => handleDo(doName)}>
                                        {doName}
                                    </div>
                                );
                            })}
                        </div>
                        {selectedDo &&
                        <div className={styles.si}>
                            <div className={styles.siName} onClick={() => handleSi('')}>
                                전체
                            </div>
                            {region.find(item => Object.keys(item)[0] === selectedDo)[selectedDo].map((siName, index) => {
                                return (
                                    <div key={index} className={styles.siName} onClick={() => handleSi(siName)}>
                                        {siName}
                                    </div>
                                );
                            })
                            
                            }
                        </div>

                        }
                        
                    </div>
                    <div className={styles.categorySelect}>
                        <div
                            className={styles.cat}
                            onClick={() => handleCat('')}>
                            전체
                        </div>
                    {Object.keys(categoryData).map((topCategory) => (
                        Object.keys(categoryData[topCategory]).map(
                            (midCategory) => (
                            <div
                                key={midCategory}
                                className={styles.cat}
                                onClick={() => handleCat(midCategory)}
                            >
                                {categoryData[topCategory][midCategory].title}
                            </div>
                            )
                        )
                    ))}
                    </div>
                </div>
                <div className={styles.datas}>
                    <div className={styles.banner}>
                        총 <span style={{color:'blue', fontWeight:'bold'}}>{dataLength}</span>개의 데이터가 존재합니다.
                    </div>
                    <div className={styles.lists}>
                    {data &&
                        data.map((item, index) => {
                        return (
                        <div key={index}
                        className={styles.list}>
                            <div className={styles.imgBox}>
                                <img src={item.image} className={styles.img}/>
                            </div>
                            <div className={styles.cont}>
                                <div className={styles.title}>
                                    {item.title}
                                </div>
                                <div className={styles.title}>
                                    {item.addr}
                                </div>
                                <div className={styles.cat}>
                                    {categoryData[item.contentTypeId].title} {categoryData[item.contentTypeId][item.cat]}
                                </div>
                            </div>
                            

                        </div>
                        );
                        })}
                    </div>

                </div>
            </div>
            
            

        </div>
    );
}

export default Regions;