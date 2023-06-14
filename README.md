# 여행정보제공사이트  - `여기저기`
![img](./front/public/logo44.png)
- 컴퓨터공학과 김용원, 신규철, 김준하

## 배경

- 코로나19 유행의 감소세는 많은 사람들이 예전처럼 여행을 즐기기를 원함. 
- 하지만 여행을 계획하려면 많은 정보를 수집해야 함. 
    - ex) 여행지의 명소나 먹거리나 놀거리, 숙소 등 정보들이 필요.
- 이에 따라, 여행객들이 필요로 하는 정보들을 제공하고, 여행을 계획하는데 도움이 되는 다양한 기능을 가진 웹 사이트를 제작하고자 함. 
- 이 웹 사이트에서는 국내의 다양한 여행지 정보를 제공할 뿐만 아니라, 계획을 세우는데 도움이 되는 기능을 제공할 예정.

## 목표
1. 여행을 계획하고 있는 사람들에게는 여행에 필요한 정보와 일정을 계획할 수 있는 기능을 제공
2. 여행을 계획하고 있지 않은 사람들에게도 여행에 대한 마음을 불러일으키는 목적을 가짐

## 효과
- 여행객들에게 여행에 대한 정보 탐색을 도움으로 질 좋은 여행을 할 수 있도록 돕고, 새로운 사람들과 여행을 함께 가며 새로운 인연을 찾고 친목을 도모함.

## 사용 기술
- Front-end - React.js
- Bacn-end - Node.js (express), MYSQL
- Open source API - 한국관광공사 오픈 api

## LICENSE
- ISC

## 기능
1. 지역별 여행 정보를 제공
    - 오픈소스 api를 이용한 명소 정보 제공 및 해당 지역 주변의 식당,숙소,놀거리 등을 추천
    - 전국 행사 정보를 출력
2. 모임기능
    - 모임을 생성하고 모임원을 모집
    - 모임원끼리 서로 공유하며 함께 여행코스를 설계
    - 추가적으로 여행 일정을 플로팅 배너와 같이 사용자가 보기 쉽게 출력
3. 게시판 기능
    - 위 항목에서의 모임원 모집 게시판
    - 자신이 방문한 여행지를 추천하는 블로그 형식의 게시판
    - 그 외의 자유게시판 등
4. 여행지 추천 기능
    - 사용자가 원하는 지역, 카테고리 등을 선택하여 해당 사용자에게 맞는 여행지 추천
5. 키워드 검색 기능
    - 오픈소스 api에서 제공해주는 키워드 검색 기능 사용한 검색창 기능

## 사용 방법
front 디렉토리, back 디렉토리에서 각각 아래의 명령어 실행
```
npm i

npm start
```
- 로그인 / 회원가입 기능을 통해 로그인
- 여행지 추천
    1. 원하는 지역이 있을시 선택(선택하지 않으면 전국에서 추천)
    2. 상위 카테고리부터 관광지 타입 선택
    3. `검색` 버튼 클릭 시 지역, 타입에 맞는 여행지 10곳 추천
- 지역별 관광지 보기
    - 보고 싶은 관광지의 지역 선택
    - 보고 싶은 관광지 카테고리 선택
    - 선택시 마다 해당 여행지 모든 정보를 페이지별로 나누어 화면에 보여줌
    - `+` 버튼 클릭시 해당 관광지의 세부정보 출력 
- 게시판
    - 모임 게시판
    - 자유 게시판
    - 추천 게시판
- 여행 일정

## 실제 화면
- 메인 페이지
- 관광지 추천
- 지역별 관광지 보기
- 게시판
- 일정
- 모임

## 참고
- [대한민국 구석구석](https://korean.visitkorea.or.kr/)
- [한국관광공사](https://knto.or.kr/index)
- [공공데이터포털](https://www.data.go.kr/)

## DOCS

- [프로젝트 제안서](./docs/%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8%20%EC%A0%9C%EC%95%88%EC%84%9C.pdf)
- [테스트 계획서](./docs/%ED%85%8C%EC%8A%A4%ED%8A%B8%20%EA%B3%84%ED%9A%8D%EC%84%9C.pdf)
- [중간 보고서](./docs/%EC%97%AC%ED%96%89%EC%A0%95%EB%B3%B4%EC%82%AC%EC%9D%B4%ED%8A%B8_%EC%A4%91%EA%B0%84%EB%B3%B4%EA%B3%A0%EC%84%9C_%EA%B9%80%EC%A4%80%ED%95%98_%EA%B9%80%EC%9A%A9%EC%9B%90_%EC%8B%A0%EA%B7%9C%EC%B2%A0.pdf)
- [최종 보고서](./docs/%EC%B5%9C%EC%A2%85%20%EB%B3%B4%EA%B3%A0%EC%84%9C.docx/)
