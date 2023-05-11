import { Link } from "react-router-dom";
import { useState } from "react";
import './modal.css';
// import axios from 'axios';

const Modal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close, header } = props;

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? 'openModal modal' : 'modal'}>
      {open ? (
        <section>
          <header>
            {header}
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>{props.children}</main>
          <footer>
            <button className="close" onClick={close}>
              close
            </button>
          </footer>
        </section>
      ) : null}
    </div>
  );
};

function MainTest() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  // axios.get('http://localhost:3001/test').then(function (response) {
  //   console.log(response.data[0]);
  // });
  return (
    <div>
      개발단계용입니다.
      <hr />

      <div>
        <Link to="/main">메인</Link>
      </div>
      <div>
        <Link to="/admin">관리자 페이지</Link>
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
      <button onClick={openModal}>일정에 추가</button>
      <Modal open={modalOpen} close={closeModal} header="일정에 추가">
        날짜 : <textarea></textarea>
        시간 : <textarea></textarea>
      </Modal>
    </div>
  );
}

export default MainTest;