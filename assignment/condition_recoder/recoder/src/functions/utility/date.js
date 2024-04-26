// "year-month-day" 포맷으로 변경
export const formattingDate = (dateStr) => {
    const date = new Date(dateStr);
    const year = date.getFullYear().toString();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");

    return `${year}-${month}-${day}`;
}

// 오늘 기준으로 1주일 date list 생성
export const makeWeekList = (inputDate="", type="") => {
    const dateList = Array.from({length: 7}, (_,index) => {
        const date = Boolean(inputDate) ? new Date(inputDate) : new Date();
        let day = index;
        switch (type) {
            case "PREV":
                day -= 7;
                break;
            case "NEXT":
                day += 1;
                break;
            default:
                break;   
        }
        date.setDate(date.getDate() + day);

        return formattingDate(date);
    })

    return dateList;
}

// 해당 날짜가 무슨 요일인지 return
export const getWeek = (dateStr) => {
    const weekList = ["일", "월", "화", "수", "목", "금", "토"];
    const date = new Date(dateStr);
    const weekNumber = date.getDay();
    
    return weekList[weekNumber];
}