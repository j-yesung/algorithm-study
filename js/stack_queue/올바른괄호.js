/**
 * 문제 설명
 * 괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어
 * "()()" 또는 "(())()" 는 올바른 괄호입니다.
 * ")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
 * '(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고,
 * 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
 */

// 풀이 (count가 0이 되어야하는 이유는 '('와 ')'의 개수가 같아야하기 때문이다.)
// 1. '('가 나오면 count를 1 증가시키고 ')'가 나오면 count를 1 감소시킨다.
// 2. count가 음수가 되면 false를 반환한다.
// 3. 문자열을 모두 탐색한 후 count가 0이면 true를 반환하고 아니면 false를 반환한다.
// 4. count가 음수가 되는 경우는 ')'가 먼저 나오는 경우이다. 이 경우는 올바르지 않은 괄호이다.
// 5. 시간 복잡도는 O(n)이다.

function solution(s) {
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === '(' ? count++ : count--;

    if (count < 0) return false;
  }

  return count === 0 ? true : false;
}
console.log(solution('()()'));
console.log(solution('(())()'));
console.log(solution(')()('));
console.log(solution('(()('));
