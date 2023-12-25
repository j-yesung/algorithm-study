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
  const can = ['aya', 'ye', 'woo', 'ma'];
  let count = 0;

  for (let i = 0; i < babbling.length; i++) {
    let babble = babbling[i];

    for (let j = 0; j < can.length; j++) {
      // 연속되는 발음은 할 수 없음
      if (babble.includes(can[j].repeat(2))) {
        break;
      }

      // 네 가지 발음 중 일치하다면
      // 검사한 문자는 지우고 오타 방지를 위해 join(' ')으로 공백으로 바꿔줌
      babble = babble.split(can[j]).join(' ');
    }

    // 전부 검사했으면 빈 배열 빈 문자열로 바꿔줌
    if (babble.split(' ').join('').length === 0) {
      count += 1;
    }
  }

  return count;
}
// console.log(solution(['aya', 'yee', 'u', 'maa']));
// console.log(solution(['ayaye', 'uuu', 'yeye', 'yemawoo', 'ayaayaa'])); // 2
