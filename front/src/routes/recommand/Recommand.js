import { useState } from "react";
import Header from "../../components/Header";
import styles from "./css/Recommand.module.css"
import axios from "axios";

function Recommand() {
    const categoryData = {
        12: {
            title: "관광지/문화시설",
            A01: {
                title: "자연",
                A0101: {
                    title: "자연관광지"
                },
                A0102: {
                    title: "관광자원"
                }
            },
            A02: {
                title: "인문(문화/예술/역사)",
                A0201: {
                    title: "역사관광지"
                },
                A0202: {
                    title: "휴양관광지"
                },
                A0203: {
                    title: "체험관광지"
                },
                A0204: {
                    title: "산업관광지"
                },
                A0205: {
                    title: "건축/조형물"
                },
                A0206: {
                    title: "문화시설"
                }
            }
        },
        28: {
            title: "레포츠",
            A0302: {
                title: "육상 레포츠"
            },
            A0303: {
                title: "수상 레포츠"
            },
            A0304: {
                title: "항공 레포츠"
            },
            A0305: {
                title: "복합 레포츠"
            }
        },
        38: {
            title: "쇼핑",
            A04010120: {
                title: "시장"
            },
            A04010340: {
                title: "백화점/면세점"
            },
            A04010600: {
                title: "전문매장/상가"
            },
            A04010700: {
                title: "공예/공방"
            },
            A04010900: {
                title: "특산물판매점"
            },
        },
        39: {
            title: "음식점",
            A05020100: {
                title: "한식"
            },
            A05020200: {
                title: "양식"
            },
            A05020300: {
                title: "일식"
            },
            A05020400: {
                title: "중식"
            },
            A05020700: {
                title: "이색음식점"
            },
            A05020900: {
                title: "카페/전통찻집"
            },
        }
    };
    const [selectedTopCategory, setSelectedTopCategory] = useState("");
    const [selectedMidCategory, setSelectedMidCategory] = useState("");
    const [selectedSubCategory, setSelectedSubCategory] = useState("");

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
    console.log('selectedTopCategory' + selectedTopCategory + 'selectedMidCategory' + selectedMidCategory + 'selectedSubCategory' + selectedSubCategory);

    return (
        <div>
            <Header />
            <div className={styles.contents}>
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
                    console.log('type : ' + selectedTopCategory + '\ncat : ' + selectedMidCategory + '\ncat : ' + selectedSubCategory);
                    axios.post("http://localhost:3001/data/recommand", {
                        type: selectedTopCategory,
                        cat: selectedSubCategory ? selectedSubCategory : selectedMidCategory ? selectedMidCategory : ""
                    }).then(function (response) {
                        console.log(response.data.length + "개의 데이터 : ")
                        console.log(response.data);
                    });

                }

                }>검색</button>

            </div>

        </div>
    );
}

export default Recommand;