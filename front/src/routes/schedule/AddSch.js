import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import styles from "./AddSch.module.css";

function AddSch() {
    const [data, setData] = useState([])
    const [selected, setSelected] = useState(0);
    const [date, setDate] = useState([])

    function select(index){
        setSelected(index)

    }

    function fetchData() {
        axios
            .get("http://localhost:3001/gathering/select", {
                params: {
                    user: 12345,
                }
            })
            .then(function (response) {
                console.log(response);
                setData(response.data);
            });
    }

    function fetchGathering(){
        axios
            .get("http://localhost:3001/schedule/checkDate",{
                params:{
                    name : data[selected].name,
                    admin : data[selected].name,
                }
            })
            .then(function(response){
                setDate(response.data);
            });
            }
    
    useEffect(() => {
        fetchData();
        // fetchGathering();
    }, [data]);

    return (
        <div className={styles.container}>
            <div>모임 : 
            <div className={styles.gathering}> 
                {data.length === 0 ? (
                    <p>참가한 모임이 없습니다.</p>
                    ) : (
                        data.map((item, index) => (
                            (index === selected ?
                            <button onClick={()=>select(index)} className={styles.gatheringEles}>{item.name}</button>
                             :
                            <button onClick={()=>select(index)} className={styles.gatheringEle}>{item.name}</button> 
                            )
                        ))
                    )
                }
                
            </div>
            </div>       
            <br/>
            <div>날짜 : <textarea></textarea><br/></div>
            <div>시간 : <textarea></textarea><br/></div>
            <div>장소 : <textarea></textarea><br/></div>
        </div>
    );
}

export default AddSch;