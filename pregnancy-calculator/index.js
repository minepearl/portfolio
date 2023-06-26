function calculatePregnancy() {
    // 월경 주기 (일)
    var cycleLength = parseInt(document.getElementById("cycleLength").value);
    
    // 마지막 월경 일
    var lastPeriodMonth = parseInt(document.getElementById("lastPeriodMonth").value);
    var lastPeriodDay = parseInt(document.getElementById("lastPeriodDay").value);
    
    // 마지막 월경 일을 날짜 객체로 변환
    var lastPeriodDate = new Date(new Date().getFullYear(), lastPeriodMonth - 1, lastPeriodDay);
    
    // 다음 월경 예정일 계산
    var nextPeriodDate = new Date(lastPeriodDate.getTime() + cycleLength * 24 * 60 * 60 * 1000);
    
    // 배란 기간 계산 (월경 예정일의 12~16일 전)
    var ovulationStartDate = new Date(nextPeriodDate.getTime() - 16 * 24 * 60 * 60 * 1000);
    var ovulationEndDate = new Date(nextPeriodDate.getTime() - 12 * 24 * 60 * 60 * 1000);
    
    // 임신 가능 기간 계산 (월경 예정일 전 12~19일)
    var fertilityStartDate = new Date(nextPeriodDate.getTime() - 19 * 24 * 60 * 60 * 1000);
    var fertilityEndDate = new Date(nextPeriodDate.getTime() - 12 * 24 * 60 * 60 * 1000);
    
    // 출산 예정일 계산 (마지막 월경 시작날 + 280일)
    var dueDate = new Date(new Date().getFullYear(), lastPeriodMonth - 1, lastPeriodDay);
    dueDate.setMonth(dueDate.getMonth() + 9);
    dueDate.setDate(dueDate.getDate() + 7);
    
    // 결과 출력
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = "다음 월경 예정일: " + formatDate(nextPeriodDate) + "<br>" +
                              "배란 기간: " + formatDate(ovulationStartDate) + " ~ " + formatDate(ovulationEndDate) + "<br>" +
                              "임신 가능 기간: " + formatDate(fertilityStartDate) + " ~ " + formatDate(fertilityEndDate) + "<br>" +
                              "출산 예정일: " + formatDate(dueDate);
  }
  
  // 날짜를 "YYYY년 MM월 DD일" 형식으로 포맷하는 함수
  function formatDate(date) {
    var year = date.getFullYear();
    var month = (date.getMonth() + 1).toString().padStart(2, '0');
    var day = date.getDate().toString().padStart(2, '0');
    
    return year + "년 " + month + "월 " + day + "일";
  }
  