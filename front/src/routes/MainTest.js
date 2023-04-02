import { Link } from "react-router-dom";

function MainTest() {
    return (
        <div>
            개발단계용입니다.
            <hr />

            <div>
                <Link to="/main">메인</Link>
            </div>
            <div>
                <Link to="/mypage">Mypage</Link>
            </div>
            <div>
                <Link to="/class">Class</Link>
            </div>
            <div>
                <Link to="/login">login</Link>
            </div>
            <div>
                <Link to="/register">register</Link>
            </div>
            <div>
                <Link to="/addschedule">addschedule</Link>
            </div>
            <hr />

            <div>
                <Link to="/regionmain">regionmain</Link>
            </div>
            <div>
                <Link to="/regions">regions</Link>
            </div>
            <div>
                <Link to="/regiondetail">regiondetail</Link>
            </div>
            <div>
                <Link to="/regionattraction">regionattraction</Link>
            </div>
            <hr />

            <div>
                <Link to="/boardrecommand">boardrecommand</Link>
            </div>
            <div>
                <Link to="/boardtogether">boardtogether</Link>
            </div>
            <div>
                <Link to="/boardwriterecommand">boardwriterecommand</Link>
            </div>
            <div>
                <Link to="/boardwritetogether">boardwritetogether</Link>
            </div>
            <div>
                <Link to="/boardviewtogether">boardviewtogether</Link>
            </div>
            <div>
                <Link to="/boardviewrecommand">boardviewrecommand</Link>
            </div>
        </div>
    );
}

export default MainTest;