// [문제 설명]
// 문자열 s는 한 개 이상의 단어로 구성되어 있습니다.
// 각 단어는 하나 이상의 공백문자로 구분되어 있습니다.
// 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴하는 함수, solution을 완성하세요.

// [제한 사항]
// 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야합니다.
// 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야 합니다.

// [입출력 예]
// s	return
// "try hello world"	"TrY HeLlO WoRlD"

// 배열 단위로 인덱스 짝/홀 계산해서 바꿔주고 다시 조인? 그리고 replace로 , 을 ' ' 로 변경
function solution(s) {
  const stringChangeUpperCase = (i, str) => {
    return i % 2 === 0 ? str.toUpperCase() : str.toLowerCase();
  };

  const answer = s
    .split(' ')
    .map(item =>
      item
        .split('')
        .map((str, i) => stringChangeUpperCase(i, str))
        .join(''),
    )
    .join(' ');
  return answer;
}
console.log(solution('try hello world'));
// console.log('2.6456546456456544545' | 0);
