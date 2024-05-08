/**
 * [문제 설명]
 * 정수 배열 arr가 주어집니다. arr의 각 원소에 대해 값이 50보다 크거나 같은 짝수라면 2로 나누고, 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
 * 이러한 작업을 x번 반복한 결과인 배열을 arr(x)라고 표현했을 때, arr(x) = arr(x + 1)인 x가 항상 존재합니다.
 * 이러한 x 중 가장 작은 값을 return 하는 solution 함수를 완성해 주세요.
 * 단, 두 배열에 대한 "="는 두 배열의 크기가 서로 같으며, 같은 인덱스의 원소가 각각 서로 같음을 의미합니다.
 *
 * [제한사항]
 * 1 ≤ arr의 길이 ≤ 1,000,000
 * 1 ≤ arr의 원소의 값 ≤ 100
 *
 * [입출력 예]
 * arr	                  result
 * [1, 2, 3, 100, 99, 98]	5
 */
function transformElement(element) {
  // 50보다 크거나 같은 짝수라면 2로 나누고 50보다 작은 홀수라면 2를 곱하고 다시 1을 더합니다.
  return element >= 50 && element % 2 === 0 ? element / 2 : element < 50 && element % 2 !== 0 ? element * 2 + 1 : element;
}

function arraysEqual(a, b) {
  // a, b 배열의 길이가 같고, 모든 요소가 같은지 확인합니다.
  return a.length === b.length && a.every((val, index) => val === b[index]);
}

function solution(arr) {
  let iterations = 0;
  let newArr = arr.map(transformElement);

  // arr(x) = arr(x + 1)인 x가 항상 존재합니다.
  while (!arraysEqual(arr, newArr)) {
    arr = newArr; // arr(x) = arr(x + 1)
    newArr = arr.map(transformElement);
    iterations++;
  }

  return iterations;
}
console.log(solution([1, 2, 3, 100, 99, 98])); // 5
