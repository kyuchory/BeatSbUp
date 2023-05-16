import { useState } from "react";
import Header from "../../components/Header";
import styles from "./css/Recommand.module.css"
import axios from "axios";

function Recommand() {
    const [type, setType] = useState(0);
    const [cat, setCat] = useState('');  // 대분류

    const typeToTop = {
        12: ['자연', '인문(문화/예술/역사)'],
        28: ['육상레포츠', '수상레포츠', '항공레포츠', '복합레포츠'],
        38: ['쇼핑'],
        39: ['음식점'],
    };

    const topToMid = [
        ['자연관광지', '관광자원'],
        ['역사관광지', '휴양관광지', '체험관광지', '산업관광지', '건축/조형물', '문화시설'],
        ['육상레포츠', '수상레포츠', '항공레포츠', '복합레포츠'],
        ['쇼핑'],
        ['음식점']
    ];

    const category = {
        12: {
            title: '관광지/문화시설',
            A01: {
                title: '자연',
                A0101: {
                    title: '자연관광지'
                },
                A0102: {
                    title: '관광자원'
                }
            },
            A02: {
                title: '인문(문화/예술/역사)',
                A0201: {
                    title: '역사관광지'
                },
                A0202: {
                    title: '휴양관광지'
                },
                A0203: {
                    title: '체험관광지'
                },
                A0204: {
                    title: '산업관광지'
                },
                A0205: {
                    title: '건축/조형물'
                },
                A0206: {
                    title: '문화시설'
                }
            }
        },
        28: {
            title: '레포츠',
            A0302: {
                title: '육상 레포츠'
            },
            A0303: {
                title: '수상 레포츠'
            },
            A0304: {
                title: '항공 레포츠'
            },
            A0305: {
                title: '복합 레포츠'
            }
        },
        /*38: {
            title: '쇼핑'
        },
        39: {
            title: '음식점'
        }*/
    };


    console.log(cat)
    return (
        <div>
            <Header />
            <div className={styles.contents}>
                <div className={styles.type}>
                    <div className={styles.selectType}
                        onClick={() => setType(12)}>관광지, 문화시설</div>
                    <div className={styles.selectType}
                        onClick={() => setType(28)}>레포츠</div>
                    <div className={styles.selectType}
                        onClick={() => setType(38)}>쇼핑</div>
                    <div className={styles.selectType}
                        onClick={() => setType(39)}>음식점</div>
                </div>
                <div></div>
                <div className={styles.topcat}>
                    {category[type] && Object.keys(category[type]).map((key, index) => {
                        const value = category[type][key];
                        if (typeof value === 'object') {
                            return (
                                <div key={index} className={styles.selectTopcat} onClick={() => setCat(key)}>
                                    {value.title}
                                </div>
                            )
                        } else {
                            return (
                                <div key={index} className={styles.selectTopcat} onClick={() => setCat(key)}>
                                    {value}
                                </div>
                            )
                        }
                    })}
                </div>
                <div className={styles.midcat}>
                    {category[type] && category[type][cat] && Object.keys(category[type][cat]).map((key, index) => {
                        const value = category[type][cat][key];
                        if (typeof value === 'object' && category[type][key] != category[type][cat][key]) {
                            return (
                                <div key={index} className={styles.selectMidcat} onClick={() => setCat(key)}>
                                    {value.title}
                                </div>
                            )
                        }
                    })}
                </div>
                <button onClick={() => {
                    console.log('type : ' + type + 'cat : ' + cat);
                    axios.post("http://localhost:3001/data/recommand", {
                        type, cat
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