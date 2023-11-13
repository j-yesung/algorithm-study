function setDateFromString(dateString) {
  const [year, month, day] = dateString.split('.'); // 입력된 문자열을 '.'을 기준으로 분리하여 년, 월, 일로 나눕니다.
  console.log('year, month, day: ', year, month, day);
  const date = new Date();

  date.setFullYear(year);
  date.setMonth(month);
  date.setDate(day);

  return date;
}

const dateString = '2023.01.01';
const date = setDateFromString(dateString);

console.log(date); // Date 객체 출력
