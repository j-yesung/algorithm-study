/**
 * [문제 설명]
 * 문자열 my_string과 이차원 정수 배열 queries가 매개변수로 주어집니다.
 * queries의 원소는 [s, e] 형태로, my_string의 인덱스 s부터 인덱스 e까지를 뒤집으라는 의미입니다.
 * my_string에 queries의 명령을 순서대로 처리한 후의 문자열을 return 하는 solution 함수를 작성해 주세요.
 *
 * [제한사항]
 * my_string은 영소문자로만 이루어져 있습니다.
 * 1 ≤ my_string의 길이 ≤ 1,000
 * queries의 원소는 [s, e]의 형태로 0 ≤ s ≤ e < my_string의 길이를 만족합니다.
 * 1 ≤ queries의 길이 ≤ 1,000
 *
 * [입출력 예]
 * my_string	    queries	                            result
 * "rermgorpsam"	[[2, 3], [0, 7], [5, 9], [6, 10]]	  "programmers"
 */
function solution(my_string, queries) {
  const arr = my_string.split('');

  /**
   * splice() 메서드는 배열의 요소를 삭제 또는 교체하거나 새 요소를 추가하여 배열의 내용을 변경
   * arr.splice(시작 인덱스, 삭제할 요소의 개수, 추가할 요소1, 추가할 요소2, ...);
   */
  queries.forEach(([s, e]) => arr.splice(s, e - s + 1, ...arr.slice(s, e + 1).reverse()));

  return arr.join('');
}
console.log(
  solution('rermgorpsam', [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ]),
); // "programmers"
