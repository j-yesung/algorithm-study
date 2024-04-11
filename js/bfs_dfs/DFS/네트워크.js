/**
 * [문제 설명]
 * 네트워크란 컴퓨터 상호 간에 정보를 교환할 수 있도록 연결된 형태를 의미합니다.
 * 예를 들어, 컴퓨터 A와 컴퓨터 B가 직접적으로 연결되어있고,
 * 컴퓨터 B와 컴퓨터 C가 직접적으로 연결되어 있을 때 컴퓨터 A와 컴퓨터 C도 간접적으로 연결되어 정보를 교환할 수 있습니다.
 * 따라서 컴퓨터 A, B, C는 모두 같은 네트워크 상에 있다고 할 수 있습니다.
 * 컴퓨터의 개수 n, 연결에 대한 정보가 담긴 2차원 배열 computers가 매개변수로 주어질 때, 네트워크의 개수를 return 하도록 solution 함수를 작성하시오.
 *
 * [제한사항]
 * 컴퓨터의 개수 n은 1 이상 200 이하인 자연수입니다.
 * 각 컴퓨터는 0부터 n-1인 정수로 표현합니다.
 * i번 컴퓨터와 j번 컴퓨터가 연결되어 있으면 computers[i][j]를 1로 표현합니다.
 * computer[i][i]는 항상 1입니다.
 *
 * [입출력 예]
 * n	computers	                          return
 * 3	[[1, 1, 0], [1, 1, 0], [0, 0, 1]]	  2
 * 3	[[1, 1, 0], [1, 1, 1], [0, 1, 1]]	  1
 */
function solution(n, computers) {
  let count = 0;
  const visited = new Array(n).fill(false); // 방문 여부를 저장하는 배열

  // dfs를 이용하여 네트워크 개수를 찾는 함수
  const dfs = start => {
    visited[start] = true; // 방문한 컴퓨터는 true로 변경
    // 현재 컴퓨터와 연결된 컴퓨터를 찾아서 재귀적으로 방문
    for (let i = 0; i < n; i++) {
      // 현재 컴퓨터와 연결되어 있고 방문하지 않은 컴퓨터라면 재귀적으로 방문 (네트워크 개수 찾기 위해 dfs 함수 실행)
      if (computers[start][i] === 1 && !visited[i]) {
        dfs(i);
      }
    }
  };

  // 모든 컴퓨터에 대해서 dfs 수행
  for (let i = 0; i < n; i++) {
    // 방문하지 않은 컴퓨터라면 dfs 수행
    if (!visited[i]) {
      dfs(i);
      count++;
    }
  }

  return count;
}
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ]),
); // 2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ]),
); // 1
