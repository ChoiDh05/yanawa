// 상위 목록에 마우스를 올리면 색 변화, 떼면 원래대로
document.querySelectorAll(".span-step").forEach((step) => {
    const stepInfo = step.querySelector(".span-step-1");

    step.addEventListener("mouseover", () => {
        stepInfo.style.display = "block";
        step.style.backgroundColor = "gray";
    });

    step.addEventListener("mouseout", () => {
        stepInfo.style.display = "none";
        step.style.backgroundColor = "";
    });
});

// 다음단계 이전단계 등록완료 버튼 가져오기
const nextButton1 = document.querySelector(".next-button-1");
const nextButton2 = document.querySelector(".next-button-2");
const beforeButton1 = document.querySelector(".before-button-1");
const beforeButton2 = document.querySelector(".before-button-2");
const finishButton = document.querySelector(".finish-button");

// 각 폼들 가져오기
const form1 = document.getElementById("form-1");
const form2 = document.getElementById("form-2");
const form3 = document.getElementById("form-3");

// 다음 버튼 클릭(Form 1 -> Form 2)
nextButton1.addEventListener("click", () => {
    form1.style.display = "none";
    form2.style.display = "block";
});

// 다음 버튼 클릭(Form 2 -> Form 3)
nextButton2.addEventListener("click", () => {
    form2.style.display = "none";
    form3.style.display = "block";
});

// 이전 버튼 클릭(Form 2 -> Form 1)
beforeButton1.addEventListener("click", () => {
    form2.style.display = "none";
    form1.style.display = "block";
});

// 이전 버튼 클릭 (Form 3 -> Form 2)
beforeButton2.addEventListener("click", () => {
    form3.style.display = "none";
    form2.style.display = "block";
});

// 등록완료 버튼 누를 시 alert로 알림
finishButton.addEventListener("click", () => {
    alert("매칭 등록 완료!!");
});

// 시/도 별로 구/군 데이터를 미리 정의
const districts = {
    서울특별시: [
        "강남구",
        "강동구",
        "강북구",
        "강서구",
        "관악구",
        "광진구",
        "구로구",
        "금천구",
        "노원구",
        "도봉구",
        "동대문구",
        "동작구",
        "마포구",
        "서대문구",
        "서초구",
        "성동구",
        "성북구",
        "송파구",
        "양천구",
        "영등포구",
        "용산구",
        "은평구",
        "종로구",
        "중구",
        "중랑구",
    ],
    부산광역시: [
        "강서구",
        "금정구",
        "남구",
        "동구",
        "동래구",
        "부산진구",
        "북구",
        "사상구",
        "사하구",
        "서구",
        "수영구",
        "연제구",
        "영도구",
        "중구",
        "해운대구",
        "기장군",
    ],
    대구광역시: [
        "중구",
        "동구",
        "서구",
        "남구",
        "북구",
        "수성구",
        "달서구",
        "달성군",
    ],
    인천광역시: [
        "중구",
        "동구",
        "미추홀구",
        "연수구",
        "남동구",
        "부평구",
        "계양구",
        "서구",
        "강화군",
        "옹진군",
    ],
    광주광역시: ["동구", "서구", "남구", "북구", "광산구"],
    대전광역시: ["동구", "중구", "서구", "유성구", "대덕구"],
    울산광역시: ["중구", "남구", "동구", "북구", "울주군"],
    세종특별자치시: [
        "가람동",
        "도담동",
        "새롬동",
        "어진동",
        "연서면",
        "연동면",
        "전의면",
        "전동면",
        "도래면",
        "불은면",
    ],
    경기도: [
        "수원시",
        "성남시",
        "의정부시",
        "안양시",
        "부천시",
        "광명시",
        "평택시",
        "동두천시",
        "안산시",
        "고양시",
        "과천시",
        "구리시",
        "남양주시",
        "오산시",
        "시흥시",
        "군포시",
        "의왕시",
        "하남시",
        "용인시",
        "파주시",
        "이천시",
        "안성시",
        "김포시",
        "화성시",
        "광주시",
        "양주시",
        "포천시",
        "여주시",
        "연천군",
        "가평군",
        "양평군",
    ],
    강원도: [
        "춘천시",
        "원주시",
        "강릉시",
        "동해시",
        "태백시",
        "속초시",
        "삼척시",
        "홍천군",
        "횡성군",
        "영월군",
        "평창군",
        "정선군",
        "철원군",
        "화천군",
        "양구군",
        "인제군",
        "고성군",
        "양양군",
    ],
    충청북도: [
        "청주시",
        "충주시",
        "제천시",
        "보은군",
        "옥천군",
        "영동군",
        "진천군",
        "괴산군",
        "음성군",
        "단양군",
    ],
    충청남도: [
        "천안시",
        "공주시",
        "보령시",
        "아산시",
        "서산시",
        "논산시",
        "계룡시",
        "당진시",
        "금산군",
        "부여군",
        "서천군",
        "청양군",
        "홍성군",
        "예산군",
        "태안군",
    ],
    전라북도: [
        "전주시",
        "군산시",
        "익산시",
        "정읍시",
        "남원시",
        "김제시",
        "완주군",
        "진안군",
        "무주군",
        "장수군",
        "임실군",
        "순창군",
        "고창군",
        "부안군",
    ],
    전라남도: [
        "목포시",
        "여수시",
        "순천시",
        "나주시",
        "광양시",
        "담양군",
        "곡성군",
        "구례군",
        "고흥군",
        "보성군",
        "화순군",
        "장흥군",
        "강진군",
        "해남군",
        "영암군",
        "무안군",
        "함평군",
        "영광군",
        "장성군",
        "완도군",
        "진도군",
        "신안군",
    ],
    경상북도: [
        "포항시",
        "경주시",
        "김천시",
        "안동시",
        "구미시",
        "영주시",
        "영천시",
        "상주시",
        "문경시",
        "경산시",
        "군위군",
        "의성군",
        "청송군",
        "영양군",
        "영덕군",
        "청도군",
        "고령군",
        "성주군",
        "칠곡군",
        "예천군",
        "봉화군",
        "울진군",
        "울릉군",
    ],
    경상남도: [
        "창원시",
        "진주시",
        "통영시",
        "사천시",
        "김해시",
        "밀양시",
        "거제시",
        "양산시",
        "의령군",
        "함안군",
        "창녕군",
        "고성군",
        "남해군",
        "하동군",
        "산청군",
        "함양군",
        "거창군",
        "합천군",
    ],
    제주특별자치도: ["제주시", "서귀포시"],
};

// 첫 번째 셀렉트 요소와 두 번째 셀렉트 요소 가져오기
const citySelect = document.querySelector('select[name="place"]');
const districtSelect = document.querySelector('select[name="place-detail"]');

// 시/도 선택 시 구/군 목록 업데이트
citySelect.addEventListener("change", function () {
    const selectedCity = citySelect.value;
    districtSelect.innerHTML = '<option value="" disabled selected>상세 지역 선택</option>';

    if (districts[selectedCity]) {
        districts[selectedCity].forEach(function (district) {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});






// ==================== 화면과 서버 연결 작업 ====================
// DOM이 로드된 후 자바스크립트 실행
document.addEventListener("DOMContentLoaded", function() {
    // 스포츠 종목 선택 처리
    const sportRadios = document.querySelectorAll("input[name='sport']");
    sportRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            const selectedSport = e.target.value;
            const sportKindValue = document.querySelector("input[name='sportKindValue']");
            if (sportKindValue) {
                sportKindValue.value = selectedSport;
            } else {
                console.warn("sportKindValue input field not found.");
            }
            console.log("선택된 스포츠 종목:", selectedSport);
        });
    });

    // 지역 선택 처리
    const city = document.querySelector("select[name='place']");
    const local = document.querySelector("select[name='place-detail']");

    city.addEventListener("change", (e) => {
        const selectedCity = city.value;
        local.innerHTML = `<option value="" selected>상세 지역 선택</option>`;
        if (districts[selectedCity]) {
            districts[selectedCity].forEach((district) => {
                const option = document.createElement("option");
                option.value = district;
                option.textContent = district;
                local.appendChild(option);
            });
        }
        const cityInput = document.querySelector("input[name='city']");
        if (cityInput) {
            cityInput.value = selectedCity;
        } else {
            console.warn("City input field not found.");
        }
        console.log("선택된 값:", selectedCity);
    });

    local.addEventListener("change", (e) => {
        const selectedLocal = local.value;
        const localCityInput = document.querySelector("input[name='localCity']");
        if (localCityInput) {
            localCityInput.value = selectedLocal;
        } else {
            console.warn("LocalCity input field not found.");
        }
        console.log("선택된 값:", selectedLocal);
    });

    // 오전/오후 선택 처리
    const choiceAmPm = document.querySelector("select[name='times']");
    choiceAmPm.addEventListener("change", (e) => {
        const selectedAmPm = choiceAmPm.value;
        const amPmInput = document.querySelector("input[name='choiceAmPm']");
        if (amPmInput) {
            amPmInput.value = selectedAmPm;
        } else {
            console.warn("ChoiceAmPm input field not found.");
        }
        console.log("선택된 값:", selectedAmPm);
    });

    // 경기 시간 조율 여부 처리
    const timeCordinateRadios = document.querySelectorAll("input[name='time-coordinate']");
    timeCordinateRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            const selectedTimeCordinate = e.target.value;
            const timeCordinateInput = document.querySelector("input[name='timeCordinate']");
            if (timeCordinateInput) {
                timeCordinateInput.value = selectedTimeCordinate;
            } else {
                console.warn("TimeCordinate input field not found.");
            }
            console.log("경기 시간 조율 여부 선택된 값:", selectedTimeCordinate);
        });
    });

    // 경기 날짜 협의 여부 처리
    const dateCordinateRadios = document.querySelectorAll("input[name='date-coordinate']");
    dateCordinateRadios.forEach(radio => {
        radio.addEventListener("change", (e) => {
            const selectedDateCordinate = e.target.value;
            const dateCordinateInput = document.querySelector("input[name='dateCordinate']");
            if (dateCordinateInput) {
                dateCordinateInput.value = selectedDateCordinate;
            } else {
                console.warn("DateCordinate input field not found.");
            }
            console.log("경기 날짜 협의 여부 선택된 값:", selectedDateCordinate);
        });
    });

    // 등록완료 버튼 클릭 시 값 전송 처리
    document.querySelector(".finish-button").addEventListener("click", function(event) {
        event.preventDefault(); // 기본 submit 동작 방지

        // 사용자가 입력한 값 가져오기
        const localCityDetail = document.querySelector("input[name='localCityDetail']");
        const timeRegister = document.querySelector("input[name='timeRegister']");
        const dateRegister = document.querySelector("input[name='dateRegister']");
        const postTitle = document.querySelector("input[name='title']");
        const postContent = document.querySelector("textarea[name='postContent']");

        // POST_TYPE을 2로 설정
        const postTypeInput = document.querySelector("input[name='postType']");
        if (postTypeInput) {
            postTypeInput.value = 2;  // 매칭 글의 POST_TYPE은 항상 2
        } else {
            console.warn("PostType input field not found.");
        }

        // MATCHING_STATUS 값을 기본적으로 '매칭중'으로 설정
        const matchingStatusInput = document.querySelector("input[name='matchingStatus']");
        if (matchingStatusInput) {
            matchingStatusInput.value = '매칭중'; // 기본값 설정
        } else {
            console.warn("MatchingStatus input field not found.");
        }


        // 값 확인 및 할당
        if (localCityDetail) {
            document.querySelector("input[name='localCityDetail']").value = localCityDetail.value || '';
        } else {
            console.warn("LocalCityDetail input field not found.");
        }

        if (timeRegister) {
            document.querySelector("input[name='timeRegister']").value = timeRegister.value || '';
        } else {
            console.warn("TimeRegister input field not found.");
        }

        if (dateRegister) {
            document.querySelector("input[name='dateRegister']").value = dateRegister.value || '';
        } else {
            console.warn("DateRegister input field not found.");
        }

        if (postTitle) {
            document.querySelector("input[name='postTitle']").value = postTitle.value || '';
        } else {
            console.warn("PostTitle input field not found.");
        }

        if (postContent) {
            document.querySelector("input[name='postContent']").value = postContent.value || '';
        } else {
            console.warn("PostContent input field not found.");
        }

        // 콘솔로 확인
        console.log("상세 지역명:", localCityDetail ? localCityDetail.value : 'not found');
        console.log("매칭 등록 시간:", timeRegister ? timeRegister.value : 'not found');
        console.log("매칭 희망 날짜:", dateRegister ? dateRegister.value : 'not found');
        console.log("매칭글 제목:", postTitle ? postTitle.value : 'not found');
        console.log("매칭글 내용:", postContent ? postContent.value : 'not found');
        console.log("POST_TYPE:", 2);
        console.log("POST_TYPE:", postTypeInput ? postTypeInput.value : 'not found');
        // 모든 값이 들어간 것을 확인 후 제출
        document.querySelector("form[name='join-form']").submit();
    });
});







// ==================== 유효성 검사 함수들 ====================
