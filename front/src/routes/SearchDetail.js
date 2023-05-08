import axios from 'axios';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import styles from './css/SearchDetail.module.css'

function SearchDetail() {
    const location = useLocation();
    const searchText = location.state.searchText;

    const [res, setRes] = useState(null);

    useEffect(() => {
        axios
            .get(
                `https://apis.data.go.kr/B551011/KorService1/searchKeyword1?serviceKey=SaXEWBrqfLH2I6uYF88gUq7wTPmI7VxP7lAvYCJmsAo80LmwmPB8tDMoZRM3%2Bo39PLk32tOm6exWqvROqh0aDg%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&keyword=${searchText}&contentTypeId=12`
            )
            .then(response => {
                setRes(response.data.response.body.items.item);
                console.log(response.data.response.body.items.item);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    return (
        <div>
            <Header />
            <div className={styles.content}>
                {res ? (
                    <ul className={styles.lists}>
                        <li className={styles.list}>
                            <div className={styles.imageContainer}>
                                <img src="./logo.png" />
                            </div>
                        </li>
                        {res.map(item => (
                            <li key={item.contentid}>{item.title}</li>
                        ))}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </div>
    );
}

export default SearchDetail;
