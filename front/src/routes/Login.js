import { Link } from 'react-router-dom';
import { useState } from 'react';

import styles from './css/Login.module.css'


function Login() {
    const [id, setId] = useState("");
    const onIdChange = (e) => {
        setId(e.target.value)
    }
    const [pw, setPw] = useState("");
    const onPwChange = (e) => {
        setPw(e.target.value)
    }
    return (
        <div className={styles.container}>
            <div className={styles.logoContainer}>
                <Link to='/' ><img src='./logo.png' /></Link>
            </div>
            <div className={styles.contentContainer}>
                <div className={styles.title}>로그인</div>
                <div className={styles.inputs}>
                    <div className={styles.inputContainer}>
                        <input
                            type="text"
                            value={id}
                            onChange={onIdChange}
                            placeholder="ID를 입력해주세요."
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.inputContainer}>
                        <input
                            type="password"
                            value={pw}
                            onChange={onPwChange}
                            placeholder="비밀번호를 입력해주세요."
                            className={styles.input}
                        />
                    </div>
                    <div className={styles.loginButton} >
                        로그인
                    </div>
                    <div className={styles.others}>
                        <div className={styles.other}>
                            아이디 찾기
                        </div>
                        <div className={styles.other}>
                            비밀번호 찾기
                        </div>
                        <div className={styles.other}>
                            회원가입
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Login;