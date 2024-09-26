// 상위 목록에 마우스 가져다대면 색변화 때면 원래대로
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
// 다음단계 이전단계 등록완료 버튼 가져오가
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
// 등록완료 버튼 누를시 alert로 알림뜸
finishButton.addEventListener("click", () => {
    alert("매칭 등록 완료!!");
});

// 시/도 별로 구/군 데이터를 미리 정의합니다.
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

// 첫 번째 셀렉트 요소와 두 번째 셀렉트 요소를 가져옵니다.
const citySelect = document.querySelector('select[name="place"]');
const districtSelect = document.querySelector('select[name="place-detail"]');

// 첫 번째 셀렉트의 값이 변경될 때 이벤트 리스너 추가
citySelect.addEventListener("change", function () {
    // 선택된 시/도 값을 가져옵니다.
    const selectedCity = citySelect.value;

    // 두 번째 셀렉트를 초기화합니다.
    districtSelect.innerHTML =
        '<option value="" disabled selected>상세 지역 선택</option>';

    // 선택된 시/도의 구/군 데이터를 추가합니다.
    if (districts[selectedCity]) {
        districts[selectedCity].forEach(function (district) {
            const option = document.createElement("option");
            option.value = district;
            option.textContent = district;
            districtSelect.appendChild(option);
        });
    }
});



// ====================화면과 서버연결 작업 ========================================

// ====================화면과 서버연결 작업 ========================================

// 스포츠 종목 선택 처리
const sportRadios = document.querySelectorAll("input[name='sport']");
sportRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        const selectedSport = e.target.value;
        document.querySelector("input[name='sportKindValue']").value = selectedSport;
        console.log("선택된 스포츠 종목:", selectedSport);
    });
});

const city = document.getElementById("city");
const local = document.getElementById("localCity");

city.addEventListener("change", (e) => {
    let text = `<option value="" selected>상세 지역 선택</option>`;
    districts[city.value].forEach((district) => {
        text += `<option value="${district}">${district}</option>`;
    });
    local.innerHTML = text;
    document.querySelector("input[name='city']").value = city.value;
    console.log("선택된 값:", city.value);
});

local.addEventListener("change", (e) => {
    document.querySelector("input[name='localCity']").value = local.value;
    console.log("선택된 값:", local.value);
});

const choiceAmPm = document.querySelector("select[name='times']");
choiceAmPm.addEventListener("change", (e) => {
    document.querySelector("input[name='choiceAmPm']").value = choiceAmPm.value;
    console.log("선택된 값:", choiceAmPm.value);
});

const timeCordinateRadios = document.querySelectorAll("input[name='time-coordinate']");
timeCordinateRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        const selectedTimeCordinate = e.target.value;
        document.querySelector("input[name='timeCordinate']").value = selectedTimeCordinate;
        console.log("경기시간 조율 여부 선택된 값:", selectedTimeCordinate);
    });
});

const dateCordinateRadios = document.querySelectorAll("input[name='date-coordinate']");
dateCordinateRadios.forEach(radio => {
    radio.addEventListener("change", (e) => {
        const selectedDateCordinate = e.target.value;
        document.querySelector("input[name='dateCordinate']").value = selectedDateCordinate;
        console.log("경기 날짜 협의 여부 선택된 값:", selectedDateCordinate);
    });
});

// ====================유효성 검사 부분 ========================================
// 유효성 검사 함수들
function validateField(field, errorField) {
    if (!field.value) {
        errorField.style.display = "block";
        return false;
    } else {
        errorField.style.display = "none";
        return true;
    }
}

function validateSelect(selectField, errorField) {
    if (!selectField || !selectField.value) {
        errorField.style.display = "block";
        return false;
    } else {
        errorField.style.display = "none";
        return true;
    }
}

function validateRadio(radioName, errorField) {
    const selected = document.querySelector(`input[name='${radioName}']:checked`);
    if (!selected) {
        errorField.style.display = "block";
        return false;
    } else {
        errorField.style.display = "none";
        return true;
    }
}

// 첫 번째 단계 유효성 검사
function validateStep1() {
    let isValid = true;

    const sportSelect = document.querySelector("select[name='sport']");
    const sportError = document.querySelector(".input-explain-error-sport");

    if (!validateSelect(sportSelect, sportError)) isValid = false;

    return isValid;
}

// 두 번째 단계 유효성 검사
function validateStep2() {
    let isValid = true;

    const city = document.querySelector("select[name='place']");
    const cityError = document.querySelector(".input-explain-error-city");
    if (!validateSelect(city, cityError)) isValid = false;

    const localCity = document.querySelector("select[name='place-detail']");
    const localCityError = document.querySelector(".input-explain-error-local");
    if (!validateSelect(localCity, localCityError)) isValid = false;

    return isValid;
}

// 다음 단계 버튼 클릭 시
document.querySelector(".next-button-1").addEventListener("click", function(e) {
    if (validateStep1()) {
        document.getElementById("form-1").style.display = "none";
        document.getElementById("form-2").style.display = "block";
    } else {
        e.preventDefault();
    }
});

document.querySelector(".next-button-2").addEventListener("click", function(e) {
    if (validateStep2()) {
        document.getElementById("form-2").style.display = "none";
        document.getElementById("form-3").style.display = "block";
    } else {
        e.preventDefault();
    }
});

// '등록 완료' 버튼 클릭 시 (데이터를 최종 form에 넣고 제출)
document.querySelector(".finish-button").addEventListener("click", function(e) {
    const mainForm = document.querySelector("form#join-form"); // 최종 form

    // 스포츠 종목 값 추가
    const sportKindValue = document.querySelector("input[name='sport']:checked").value;
    const hiddenSportField = document.createElement("input");
    hiddenSportField.setAttribute("type", "hidden");
    hiddenSportField.setAttribute("name", "sportKindValue");
    hiddenSportField.setAttribute("value", sportKindValue);
    mainForm.appendChild(hiddenSportField);

    // 매칭 등록 지역 값 추가
    const placeValue = document.querySelector("select[name='place']").value;
    const hiddenPlaceField = document.createElement("input");
    hiddenPlaceField.setAttribute("type", "hidden");
    hiddenPlaceField.setAttribute("name", "city");
    hiddenPlaceField.setAttribute("value", placeValue);
    mainForm.appendChild(hiddenPlaceField);

    // 상세 지역 값 추가
    const localCityValue = document.querySelector("select[name='place-detail']").value;
    const hiddenLocalCityField = document.createElement("input");
    hiddenLocalCityField.setAttribute("type", "hidden");
    hiddenLocalCityField.setAttribute("name", "localCity");
    hiddenLocalCityField.setAttribute("value", localCityValue);
    mainForm.appendChild(hiddenLocalCityField);

    // 매칭 등록 시간 값 추가
    const choiceAmPmValue = document.querySelector("select[name='times']").value;
    const hiddenChoiceAmPmField = document.createElement("input");
    hiddenChoiceAmPmField.setAttribute("type", "hidden");
    hiddenChoiceAmPmField.setAttribute("name", "choiceAmPm");
    hiddenChoiceAmPmField.setAttribute("value", choiceAmPmValue);
    mainForm.appendChild(hiddenChoiceAmPmField);

    // 경기 시간 값 추가
    const timeRegisterValue = document.querySelector("input[th\\:field='*{timeRegister}']").value;
    const hiddenTimeRegisterField = document.createElement("input");
    hiddenTimeRegisterField.setAttribute("type", "hidden");
    hiddenTimeRegisterField.setAttribute("name", "timeRegister");
    hiddenTimeRegisterField.setAttribute("value", timeRegisterValue);
    mainForm.appendChild(hiddenTimeRegisterField);

    // 경기 날짜 값 추가
    const dateRegisterValue = document.querySelector("input[th\\:field='*{dateRegister}']").value;
    const hiddenDateRegisterField = document.createElement("input");
    hiddenDateRegisterField.setAttribute("type", "hidden");
    hiddenDateRegisterField.setAttribute("name", "dateRegister");
    hiddenDateRegisterField.setAttribute("value", dateRegisterValue);
    mainForm.appendChild(hiddenDateRegisterField);

    // 경기 시간 조율 여부 값 추가
    const timeCordinateValue = document.querySelector("input[name='time-coordinate']:checked").value;
    const hiddenTimeCordinateField = document.createElement("input");
    hiddenTimeCordinateField.setAttribute("type", "hidden");
    hiddenTimeCordinateField.setAttribute("name", "timeCordinate");
    hiddenTimeCordinateField.setAttribute("value", timeCordinateValue);
    mainForm.appendChild(hiddenTimeCordinateField);

    // 경기 날짜 협의 여부 값 추가
    const dateCordinateValue = document.querySelector("input[name='date-coordinate']:checked").value;
    const hiddenDateCordinateField = document.createElement("input");
    hiddenDateCordinateField.setAttribute("type", "hidden");
    hiddenDateCordinateField.setAttribute("name", "dateCordinate");
    hiddenDateCordinateField.setAttribute("value", dateCordinateValue);
    mainForm.appendChild(hiddenDateCordinateField);

    // 매칭 제목 값 추가
    const postTitleValue = document.querySelector("input[name='postTitle']").value;
    const hiddenPostTitleField = document.createElement("input");
    hiddenPostTitleField.setAttribute("type", "hidden");
    hiddenPostTitleField.setAttribute("name", "postTitle");
    hiddenPostTitleField.setAttribute("value", postTitleValue);
    mainForm.appendChild(hiddenPostTitleField);

    // 매칭 내용 값 추가
    const postContentValue = document.querySelector("textarea[th\\:field='*{postContent}']").value;
    const hiddenPostContentField = document.createElement("input");
    hiddenPostContentField.setAttribute("type", "hidden");
    hiddenPostContentField.setAttribute("name", "postContent");
    hiddenPostContentField.setAttribute("value", postContentValue);
    mainForm.appendChild(hiddenPostContentField);

    mainForm.submit();  // 폼 제출
});



