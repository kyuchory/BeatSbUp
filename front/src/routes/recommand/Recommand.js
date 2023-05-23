import { useState, useEffect } from "react";
import Header from "../../components/Header";
import styles from "./css/Recommand.module.css"
import axios from "axios";

import categoryData, { region } from './datas'

function Recommand() {

    const [selectedTopCategory, setSelectedTopCategory] = useState("");
    const [selectedMidCategory, setSelectedMidCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

    const [resCount, setResCount] = useState(0)

    const handleTopCategorySelect = (topCategory) => {
        setSelectedTopCategory(topCategory);
        setSelectedMidCategory("");
        setSelectedSubCategory("");
    };

    const handleMidCategorySelect = (midCategory) => {
        setSelectedMidCategory(midCategory);
        setSelectedSubCategory("");
    };

    const handleSubCategorySelect = (subCategory) => {
        setSelectedSubCategory(subCategory);
    };


    const [selectedDo, setSelectedDo] = useState('');
    const [selectedSi, setSelectedSi] = useState('');

    // 선택된 도 정보 변경 함수
    const handleDoSelect = (selectedDo) => {
        setSelectedDo(selectedDo);
        setSelectedSi(''); // 선택된 도 변경 시 선택된 시 초기화
    };

    // 선택된 시 정보 변경 함수
    const handleSiSelect = (selectedSi) => {
        setSelectedSi(selectedSi);
    };

    const initAll = () => {
        setSelectedTopCategory('');
        setSelectedMidCategory('');
        setSelectedSubCategory('');
        setSelectedDo('');
        setSelectedSi('');
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post("http://localhost:3001/data/recommand", {
                    type: selectedTopCategory,
                    cat: selectedSubCategory ? selectedSubCategory : selectedMidCategory ? selectedMidCategory : "",
                    region: selectedSi ? selectedSi : selectedDo ? selectedDo : ""
                });
                console.log(response.data.length + "개의 데이터");
                setResCount(response.data.length);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [selectedTopCategory, selectedMidCategory, selectedSubCategory, selectedDo, selectedSi]);



    return (
        <div>
            <Header />
            <div className={styles.contents}>
                <div>{resCount}개의 목적지가 존재합니다.</div>
                <div className={styles.regionContainer}>
                    {true &&
                        region.map((area, index) => {
                            const doName = Object.keys(area)[0];
                            return (
                                <div key={index}>
                                    <h3 className={styles.doName} onClick={() => handleDoSelect(doName)}>
                                        {doName}
                                    </h3>
                                    {selectedDo === doName && (
                                        <ul className={styles.cityList}>
                                            {area[doName].map((city, i) => (
                                                <li className={styles.cityItem} key={i} onClick={() => handleSiSelect(city)}>
                                                    {city}
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            );
                        })}
                </div>
                <div className={styles.topcat}>
                    {Object.keys(categoryData).map((topCategory) => (
                        <div
                            key={topCategory}
                            className={styles.selectTopcat}
                            onClick={() => handleTopCategorySelect(topCategory)}
                        >
                            {categoryData[topCategory].title}
                        </div>
                    ))}
                </div>
                <div className={styles.midcat}>
                    {selectedTopCategory &&
                        Object.keys(categoryData[selectedTopCategory]).map((midCategory) => (
                            <div
                                key={midCategory}
                                className={styles.selectMidcat}
                                onClick={() => handleMidCategorySelect(midCategory)}
                            >
                                {categoryData[selectedTopCategory][midCategory].title}
                            </div>
                        ))}
                </div>
                <div className={styles.subcat}>
                    {selectedMidCategory &&
                        Object.keys(categoryData[selectedTopCategory][selectedMidCategory]).map((subCategory) => (
                            <div
                                key={subCategory}
                                className={styles.selectSubcat}
                                onClick={() => handleSubCategorySelect(subCategory)}
                            >
                                {categoryData[selectedTopCategory][selectedMidCategory][subCategory].title}
                            </div>
                        ))}
                </div>
                <button onClick={() => {
                    console.log('type : ' + selectedTopCategory + '\ncat : ' + selectedMidCategory + '\ncat : ' + selectedSubCategory + '\nregion : ' + selectedDo + selectedSi);
                    axios.post("http://localhost:3001/data/recommand", {
                        type: selectedTopCategory,
                        cat: selectedSubCategory ? selectedSubCategory : selectedMidCategory ? selectedMidCategory : "",
                        region: selectedSi ? selectedSi : selectedDo ? selectedDo : ""
                    }).then(function (response) {
                        console.log(response.data.length + "개의 데이터 : ")
                        console.log(response.data);
                    });
                }

                }>검색</button>
                <button onClick={() => {
                    initAll();
                }}>초기화</button>

            </div>

        </div>
    );
}

export default Recommand;