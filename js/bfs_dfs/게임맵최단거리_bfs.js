/**
 * [문제 설명]
 * ROR 게임은 두 팀으로 나누어서 진행하며, 상대 팀 진영을 먼저 파괴하면 이기는 게임입니다. 따라서, 각 팀은 상대 팀 진영에 최대한 빨리 도착하는 것이 유리합니다.
 * 지금부터 당신은 한 팀의 팀원이 되어 게임을 진행하려고 합니다. 다음은 5 x 5 크기의 맵에, 당신의 캐릭터가 (행: 1, 열: 1) 위치에 있고, 상대 팀 진영은 (행: 5, 열: 5) 위치에 있는 경우의 예시입니다.
 * 위 그림에서 검은색 부분은 벽으로 막혀있어 갈 수 없는 길이며, 흰색 부분은 갈 수 있는 길입니다. 캐릭터가 움직일 때는 동, 서, 남, 북 방향으로 한 칸씩 이동하며, 게임 맵을 벗어난 길은 갈 수 없습니다.
 * 아래 예시는 캐릭터가 상대 팀 진영으로 가는 두 가지 방법을 나타내고 있습니다.
 * 첫 번째 방법은 11개의 칸을 지나서 상대 팀 진영에 도착했습니다.
 * 게임 맵의 상태 maps가 매개변수로 주어질 때, 캐릭터가 상대 팀 진영에 도착하기 위해서 지나가야 하는 칸의 개수의 최솟값을 return 하도록 solution 함수를 완성해주세요.
 * 단, 상대 팀 진영에 도착할 수 없을 때는 -1을 return 해주세요.
 *
 * [제한사항]
 * maps는 n x m 크기의 게임 맵의 상태가 들어있는 2차원 배열로, n과 m은 각각 1 이상 100 이하의 자연수입니다.
 * n과 m은 서로 같을 수도, 다를 수도 있지만, n과 m이 모두 1인 경우는 입력으로 주어지지 않습니다.
 * maps는 0과 1로만 이루어져 있으며, 0은 벽이 있는 자리, 1은 벽이 없는 자리를 나타냅니다.
 * 처음에 캐릭터는 게임 맵의 좌측 상단인 (1, 1) 위치에 있으며, 상대방 진영은 게임 맵의 우측 하단인 (n, m) 위치에 있습니다.
 *
 * [입출력 예]
 * maps	                                                          answer
 * [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,1],[0,0,0,0,1]]	11
 * [[1,0,1,1,1],[1,0,1,0,1],[1,0,1,1,1],[1,1,1,0,0],[0,0,0,0,1]]	-1
 *
 * 효율성 테스트
 */

// 효율성 개선 코드
function solution(maps) {
  // 게임 맵의 크기
  const n = maps.length;
  const m = maps[0].length;

  // 방문 여부를 저장하는 배열
  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  const dx = [0, 0, 1, -1]; // [동, 서, 0, 0]
  const dy = [1, -1, 0, 0]; // [0, 0, 남, 북]
  const queue = [[0, 0]]; // 현재 위치 담을 공간
  visited[0][0] = 1; // 처음 캐릭터는 (1, 1)이므로 1로 초기화

  // BFS : 큐에 값이 있을 때까지 반복
  while (queue.length) {
    const [x, y] = queue.shift(); // 현재 위치

    for (let i = 0; i < 4; i++) {
      // 이동 후 위치
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵 범위를 벗어나면 무시
      if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
      // 벽이 있거나(0일 때) 또는 이미 방문한 곳이면 무시
      if (maps[nx][ny] === 0 || visited[nx][ny] !== 0) continue;

      // 벽이 없고 처음 방문하는 경우, 최단 거리 기록
      visited[nx][ny] = visited[x][y] + 1;
      queue.push([nx, ny]);
      console.log('visited:', visited);
    }
  }

  // 상대 팀 진영에 도착할 수 없을 때는 -1을 return
  return visited[n - 1][m - 1] === 0 ? -1 : visited[n - 1][m - 1];
}
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ]),
); // 11
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ]),
); // -1

// 효율성 개선 전 코드
function solution2(maps) {
  // 1 0 1 1 1
  // 1 0 1 0 1
  // 1 0 1 1 1
  // 1 1 1 0 1
  // 0 0 0 0 1

  // 게임 맵의 크기
  const n = maps.length;
  const m = maps[0].length;

  const dx = [1, -1, 0, 0]; // [동, 서, 0, 0]
  const dy = [0, 0, 1, -1]; // [0, 0, 남, 북]
  const queue = [[0, 0]]; // 현재 위치 담을 공간

  while (queue.length) {
    const [x, y] = queue.shift(); // 현재 위치

    // 현재 위치에서 "동, 서, 남, 북" 으로 이동
    for (let i = 0; i < 4; i++) {
      // 이동 후 위치
      const nx = x + dx[i];
      const ny = y + dy[i];

      // 맵 범위를 벗어나면 무시 (x축은 x축으로만, y축은 y축으로만)
      if (nx < 0 || ny < 0 || nx >= n || ny >= m) continue;
      // 벽이 있는 경우(0일 때) 이동 무시
      // nx, ny는 이동 후 거리를 의미하니까 이동 후 벽이 있을 때 무시
      if (maps[nx][ny] === 0) continue;

      // 벽이 없고 처음 방문하는 경우, 최단 거리 기록
      if (maps[nx][ny] === 1) {
        maps[nx][ny] = maps[x][y] + 1;
        queue.push([nx, ny]); // 현재 위치 큐에 저장
      }
    }
  }

  // 처음 캐릭터는 (1, 1)인데 그러지 않을 경우에는 -1 return
  return maps[n - 1][m - 1] > 1 ? maps[n - 1][m - 1] : -1;
}
// console.log(
//   solution2([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 1],
//     [0, 0, 0, 0, 1],
//   ]),
// ); // 11
// console.log(
//   solution2([
//     [1, 0, 1, 1, 1],
//     [1, 0, 1, 0, 1],
//     [1, 0, 1, 1, 1],
//     [1, 1, 1, 0, 0],
//     [0, 0, 0, 0, 1],
//   ]),
// ); // -1
