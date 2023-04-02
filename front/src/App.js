import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainTest from './routes/MainTest.js';

import Main from './routes/Main.js';
import Mypage from './routes/Mypage.js';
import Class from './routes/Class.js';
import Login from './routes/Login.js';
import Register from './routes/Register.js';
import AddSchedule from './routes/AddSchedule.js';

import RegionMain from './routes/region/RegionMain'
import Regions from './routes/region/Regions'
import RegionDetail from './routes/region/RegionDetail'
import RegionAttraction from './routes/region/RegionAttraction'

import BoardRecommand from './routes/board/BoardRecommand'
import BoardTogether from './routes/board/BoardTogether'
import BoardWriteRecommand from './routes/board/BoardWriteRecommand'
import BoardWriteTogether from './routes/board/BoardWriteTogether'
import BoardViewTogether from './routes/board/BoardViewTogether'
import BoardViewRecommand from './routes/board/BoardViewRecommand'


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<MainTest />} />  {/* 개발 초기 테스트용 페이지 전환할때 사용 */}

        <Route path="/main" element={<Main />} />   {/* 추후에 path="/" 으로 변경 */}
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/class" element={<Class />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/addschedule" element={<AddSchedule />} />

        <Route path="/regionmain" element={<RegionMain />} />
        <Route path="/regions" element={<Regions />} />
        <Route path="/regiondetail" element={<RegionDetail />} />
        <Route path="/regionattraction" element={<RegionAttraction />} />

        <Route path="/boardrecommand" element={<BoardRecommand />} />
        <Route path="/boardtogether" element={<BoardTogether />} />
        <Route path="/boardwriterecommand" element={<BoardWriteRecommand />} />
        <Route path="/boardwritetogether" element={<BoardWriteTogether />} />
        <Route path="/boardviewtogether" element={<BoardViewTogether />} />
        <Route path="/boardviewrecommand" element={<BoardViewRecommand />} />


      </Routes>
    </Router >
  );
}

export default App;