/**
 * [문제 설명]
 * 위와 같은 삼각형의 꼭대기에서 바닥까지 이어지는 경로 중, 거쳐간 숫자의 합이 가장 큰 경우를 찾아보려고 합니다.
 * 아래 칸으로 이동할 때는 대각선 방향으로 한 칸 오른쪽 또는 왼쪽으로만 이동 가능합니다. 예를 들어 3에서는 그 아래칸의 8 또는 1로만 이동이 가능합니다.
 * 삼각형의 정보가 담긴 배열 triangle이 매개변수로 주어질 때, 거쳐간 숫자의 최댓값을 return 하도록 solution 함수를 완성하세요.
 *
 * [제한사항]
 * 삼각형의 높이는 1 이상 500 이하입니다.
 * 삼각형을 이루고 있는 숫자는 0 이상 9,999 이하의 정수입니다.
 *
 * [입출력 예]
 * triangle	                                                result
 * [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]	30
 *
 *     7
 *    3 8
 *   8 1 0
 *  2 7 4 4
 * 4 5 2 6 5
 */
function solution(triangle) {
  // 삼각형의 바닥부터 시작하여 위로 올라가면서 각 위치에서 가능한 최대 합 계산
  // 바닥에서 두 번째 줄부터 시작하여 삼각형의 꼭대기까지 반복
  // 삼각형의 높이에서 -2 한 이유는 마지막 줄은 계산할 필요가 없기 때문 (길이는 1부터 시작하므로 -2 해줘야 하고 인덱스는 0부터임)
  for (let i = triangle.length - 2; i >= 0; i--) {
    // 현재 삼각형 줄의 각 요소에 대해서 반복
    for (let j = 0; j < triangle[i].length; j++) {
      // 현재 위치에서 가능한 두 경로 중 더 큰 값을 현재 위치의 값에 더함
      // 이는 현재 위치에서 바로 아래층의 (i+1, j => 왼쪽)와 (i+1, j+1 => 오른쪽) 위치 중
      // 더 큰 값에 현재 위치(i, j)의 값을 더하는 것을 의미
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }

  // 삼각형 꼭대기에 도달했을 때의 값이 최대 합
  return triangle[0][0];
}

console.log(solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]])); // 30
