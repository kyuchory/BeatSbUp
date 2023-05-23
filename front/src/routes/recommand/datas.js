const categoryData = {
    12: {
        title: "관광지/문화시설",
        A01: {
            title: "자연",
            A0101: {
                title: "자연관광지"
            },
            A0102: {
                title: "관광자원"
            }
        },
        A02: {
            title: "인문(문화/예술/역사)",
            A0201: {
                title: "역사관광지"
            },
            A0202: {
                title: "휴양관광지"
            },
            A0203: {
                title: "체험관광지"
            },
            A0204: {
                title: "산업관광지"
            },
            A0205: {
                title: "건축/조형물"
            },
            A0206: {
                title: "문화시설"
            }
        }
    },
    28: {
        title: "레포츠",
        A0302: {
            title: "육상 레포츠"
        },
        A0303: {
            title: "수상 레포츠"
        },
        A0304: {
            title: "항공 레포츠"
        },
        A0305: {
            title: "복합 레포츠"
        }
    },
    38: {
        title: "쇼핑",
        A04010120: {
            title: "시장"
        },
        A04010340: {
            title: "백화점/면세점"
        },
        A04010600: {
            title: "전문매장/상가"
        },
        A04010700: {
            title: "공예/공방"
        },
        A04010900: {
            title: "특산물판매점"
        },
    },
    39: {
        title: "음식점",
        A05020100: {
            title: "한식"
        },
        A05020200: {
            title: "양식"
        },
        A05020300: {
            title: "일식"
        },
        A05020400: {
            title: "중식"
        },
        A05020700: {
            title: "이색음식점"
        },
        A05020900: {
            title: "카페/전통찻집"
        },
    }
};

const region = [
    {
        "서울특별시": [
            "종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구", "강동구"
        ]
    },
    {
        "부산광역시": [
            "중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "강서구", "해운대구", "사하구", "금정구", "연제구", "수영구", "사상구", "기장군"
        ]
    },
    {
        "인천광역시": [
            "중구", "동구", "남구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"
        ]
    },
    {
        "대구광역시": [
            "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"
        ]
    },
    {
        "광주광역시": [
            "동구", "서구", "남구", "북구", "광산구"
        ]
    },
    {
        "대전광역시": [
            "동구", "중구", "서구", "유성구", "대덕구"
        ]
    },
    {
        "울산광역시": [
            "중구", "남구", "동구", "북구", "울주군"
        ]
    },
    {
        "세종특별자치시": [

        ]
    },
    {
        "경기도": [
            "가평군", "고양시", "과천시", "광명시", "광주시", "구리시", "군포시", "김포시", "남양주시", "동두천시", "부천시", "성남시", "수원시", "시흥시", "안산시", "안성시", "안양시", "양주시", "양평군", "여주시", "연천군", "오산시", "용인시", "의왕시", "의정부시", "이천시", "파주시", "평택시", "포천시", "하남시", "화성시"
        ]
    },
    {
        "강원도": [
            "원주시", "춘천시", "강릉시", "동해시", "속초시", "삼척시", "홍천군", "태백시", "철원군", "횡성군", "평창군", "영월군", "정선군", "인제군", "고성군", "양양군", "화천군", "양구군"
        ]
    },
    {
        "충청북도": [
            "청주시", "충주시", "제천시", "보은군", "옥천군", "영동군", "증평군", "진천군", "괴산군", "음성군", "단양군"
        ]
    },
    {
        "충청남도": [
            "천안시", "공주시", "보령시", "아산시", "서산시", "논산시", "계룡시", "당진시", "금산군", "부여군", "서천군", "청양군", "홍성군", "예산군", "태안군"
        ]
    },
    {
        "경상북도": [
            "포항시", "경주시", "김천시", "안동시", "구미시", "영주시", "영천시", "상주시", "문경시", "경산시", "군위군", "의성군", "청송군", "영양군", "영덕군", "청도군", "고령군", "성주군", "칠곡군", "예천군", "봉화군", "울진군", "울릉군"
        ]
    },
    {
        "경상남도": [
            "창원시", "김해시", "진주시", "양산시", "거제시", "통영시", "사천시", "밀양시", "함안군", "거창군", "창녕군", "고성군", "하동군", "합천군", "남해군", "함양군", "산청군", "의령군"
        ]
    },
    {
        "전라북도": [
            "전주시", "익산시", "군산시", "정읍시", "완주군", "김제시", "남원시", "고창군", "부안군", "임실군", "순창군", "진안군", "장수군", "무주군"
        ]
    },
    {
        "전라남도": [
            "여수시", "순천시", "목포시", "광양시", "나주시", "무안군", "해남군", "고흥군", "화순군", "영암군", "영광군", "완도군", "담양군", "장성군", "보성군", "신안군", "장흥군", "강진군", "함평군", "진도군", "곡성군", "구례군"
        ]
    },
    {
        "제주특별자치도": [
            "제주시", "서귀포시"
        ]
    }
]


export { categoryData as default, region };