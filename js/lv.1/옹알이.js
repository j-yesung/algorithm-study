/**
 * 옹알이 (2)
 * 문제 설명
 * 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과
 * 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다.
 * 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * 1 ≤ babbling의 길이 ≤ 100
 * 1 ≤ babbling[i]의 길이 ≤ 30
 * 문자열은 알파벳 소문자로만 이루어져 있습니다.
 *
 * 입출력 예
 * babbling	result
 * ["aya", "yee", "u", "maa"]	1
 * ["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"]	2
 */

function solution(babbling) {
  const words = ['aya', 'ye', 'woo', 'ma'];
  let result = 0;

  babbling.forEach(word => {
    let status = true;
    let prevWord = '';

    while (status) {
      for (let i = 0; i < words.length; i++) {
        // 단어 맨 앞이 일치하는 경우
        if (word.indexOf(words[i]) === 0) {
          // 일치해도 연속되는 경우
          if (prevWord !== words[i]) {
            // 맨 앞 단어를 이전 단어로 저장
            prevWord = words[i];
            // 비교하는 단어 중 words에 포함하는 부분만 제거하고 저장
            word = word.slice(words[i].length);
            break;
          } else {
            status = false;
            break;
          }
        }

        // 네 가지 발음 중 마지막 단어까지 일치하지 않은 경우
        if (i === words.length - 1) {
          status = false;
          break;
        }
      }
      // 단어가 빈 문자열이 되면 반복문 종료
      if (word.length === 0) {
        result++;
        status = false;
      }
    }
  });
  return result;
}
// console.log(solution(['aya', 'yee', 'u', 'maa']));
console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
