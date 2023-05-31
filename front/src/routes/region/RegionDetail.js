import styles from "./css/RegionDetail.module.css";
import { useLocation } from 'react-router-dom';
import Header from "../../components/Header";
import { useState, useEffect } from "react";
import axios from "axios";

function RegionDetail() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const location = useLocation();
    const [data, setData] = useState(location.state.data);
    const [intro, setIntro] = useState('')

    useEffect(() => {
        setData(location.state?.data);
        const fetchData = async () => {
            const response = await axios.get(`https://apis.data.go.kr/B551011/KorService1/detailCommon1?serviceKey=${API_KEY}&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${data.contentId}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&numOfRows=1&pageNo=1`);
            const resData = response.data.response.body.items.item;
            setIntro(resData[0]);
        };
        fetchData();
    }, [location.state]);


    console.log(intro)
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.title}>{data.title}</div>
            <div className={styles.addr}>{data.addr}</div>
            <img src={data.image} />
            <div className={styles.overview}>{intro.overview}</div>

        </div>
    );
}

export default RegionDetail;