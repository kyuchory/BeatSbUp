import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import styles from "./css/Recommand.module.css";
import axios from "axios";

import categoryData, { region } from "./datas";

function Recommand() {
  const navigate = useNavigate();

  const [selectedTopCategory, setSelectedTopCategory] = useState("");
  const [selectedMidCategory, setSelectedMidCategory] = useState("");

  const [resCount, setResCount] = useState(0);

  const handleTopCategorySelect = (topCategory) => {
    setSelectedTopCategory(topCategory);
    setSelectedMidCategory("");
  };

  const handleMidCategorySelect = (midCategory) => {
    setSelectedMidCategory(midCategory);
  };

  const [isRegion, setIsRegion] = useState(false);
  const [selectedDo, setSelectedDo] = useState("");
  const [selectedSi, setSelectedSi] = useState("");

  // 선택된 도 정보 변경 함수
  const handleDoSelect = (selectedDo) => {
    setSelectedDo(selectedDo);
    setSelectedSi(""); // 선택된 도 변경 시 선택된 시 초기화
  };

  // 선택된 시 정보 변경 함수
  const handleSiSelect = (selectedSi) => {
    setSelectedSi(selectedSi);
  };

  const initAll = () => {
    setSelectedTopCategory("");
    setSelectedMidCategory("");
    setSelectedDo("");
    setSelectedSi("");
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:3001/data/recommand",
          {
            type: selectedTopCategory,
            cat: selectedMidCategory
              ? selectedMidCategory
              : "",
            region: selectedSi ? selectedSi : selectedDo ? selectedDo : "",
          }
        );
        setResCount(response.data.length);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [
    selectedTopCategory,
    selectedMidCategory,
    selectedDo,
    selectedSi,
  ]);

  return (
    <div>
      <Header />
      <div className={styles.contents}>
        <div>{resCount}개의 목적지가 존재합니다.</div>
        <div className={styles.regionSelect}>
          <div>지역을 선택하시겠습니까?</div>
          <div onClick={() => setIsRegion(true)}>예</div>
          <div onClick={() => setIsRegion(false)}>아니오</div>
          <div className={styles.regionContainer}>
            {isRegion && (
              <div className={styles.regionContainer}>
                {region.map((area, index) => {
                  const doName = Object.keys(area)[0];
                  const cities = area[doName]; // 도시 배열 추출

                  return (
                    <div key={index}>
                      <h3
                        className={styles.doName}
                        onClick={() => handleDoSelect(doName)}
                      >
                        {doName}
                      </h3>

                      {selectedDo === doName && (
                        <ul className={styles.cityList}>
                          {cities.map((city, i) => (
                            <li
                              className={styles.cityItem}
                              key={i}
                              onClick={() => handleSiSelect(city)}
                            >
                              {city}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
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
            Object.keys(categoryData[selectedTopCategory]).map(
              (midCategory) => (
                <div
                  key={midCategory}
                  className={styles.selectMidcat}
                  onClick={() => handleMidCategorySelect(midCategory)}
                >
                  {categoryData[selectedTopCategory][midCategory].title}
                </div>
              )
            )}
        </div>
        <button
          onClick={() => {
            console.log("type : " + selectedTopCategory + "\ncat : " + selectedMidCategory + "\nregion : " + selectedDo + selectedSi);
            axios.post("http://localhost:3001/data/recommand", {
              type: selectedTopCategory,
              cat: selectedMidCategory ? selectedMidCategory : "",
              region: selectedSi ? selectedSi : selectedDo ? selectedDo : "",
            })
              .then(function (response) {
                console.log(response.data.length + "개의 데이터 : ");
                try {
                  navigate('/recommandDetail', {
                    state: { datas: response.data }
                  });
                } catch (error) {
                  console.error(error);
                }
              });

          }}
        >
          검색
        </button>
        <button
          onClick={() => {
            initAll();
          }}
        >
          초기화
        </button>
      </div>
    </div>
  );
}

export default Recommand;
