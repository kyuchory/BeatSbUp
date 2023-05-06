import { Link } from "react-router-dom";
import { useState } from "react";
import './modal.css';
import axios from 'axios';

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
  const [data, setData] = useState();


  const dataInsert = () => {
    const typeId = [12, 14, 28, 38, 39]  // 차례대로 관광지, 문화시설, 레포츠, 쇼핑, 음식점

    axios.get(`https://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=SaXEWBrqfLH2I6uYF88gUq7wTPmI7VxP7lAvYCJmsAo80LmwmPB8tDMoZRM3%2Bo39PLk32tOm6exWqvROqh0aDg%3D%3D&numOfRows=1000&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&listYN=Y&arrange=A&mapX=126.981611&mapY=37.568477&radius=1000000&contentTypeId=15`)
      .then(function (response) {
        const resdata = response.data.response.body.items.item;
        console.log(typeof (resdata));
        setData(resdata);
      });

    axios.post("http://localhost:3001/insertdata", {
      data
    })
      .then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      })
  }
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
      <button onClick={() => dataInsert()}>data 삽입</button>
    </div>
  );
}

export default MainTest;