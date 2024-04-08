/**
 * Pascal's Triangle
 * row = 1 => [[1]]
 * row = 2 => [[1],[1,1]]
 * row = 3 => [[1],[1,1],[1,2,1]]
 * row = 4 => [[1],[1,1],[1,2,1],[1,3,3,1]]
 * row = 5 => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
 * row = 6 => [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1],[1,5,10,10,5,1]]
 *
 * ex)
 *     1
 *    1 1
 *   1 2 1
 *  1 3 3 1
 * 1 4 6 4 1
 */

function solution(row) {
  const triangle = [];

  for (let i = 0; i < row; i++) {
    // 삼각형의 각 줄을 생성하고 1로 초기화
    triangle[i] = new Array(i + 1).fill(1);
    // for문 시작은 1부터 i까지
    for (let j = 1; j < i; j++) {
      // 삼각형의 각 줄의 첫 번째와 마지막 요소를 제외한 나머지 요소는 바로 위 줄의 왼쪽과 오른쪽 값을 더한 값
      triangle[i][j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
    }
  }

  return triangle;
}
console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
