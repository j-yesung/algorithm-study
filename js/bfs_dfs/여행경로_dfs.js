/**
 * [문제 설명]
 * 주어진 항공권을 모두 이용하여 여행경로를 짜려고 합니다. 항상 "ICN" 공항에서 출발합니다.
 * 항공권 정보가 담긴 2차원 배열 tickets가 매개변수로 주어질 때, 방문하는 공항 경로를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 *
 * [제한사항]
 * 모든 공항은 알파벳 대문자 3글자로 이루어집니다.
 * 주어진 공항 수는 3개 이상 10,000개 이하입니다.
 * tickets의 각 행 [a, b]는 a 공항에서 b 공항으로 가는 항공권이 있다는 의미입니다.
 * 주어진 항공권은 모두 사용해야 합니다.
 * 만일 가능한 경로가 2개 이상일 경우 알파벳 순서가 앞서는 경로를 return 합니다.
 * 모든 도시를 방문할 수 없는 경우는 주어지지 않습니다.
 *
 * [입출력 예]
 * tickets	                                                                        return
 * [["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]	                                ["ICN", "JFK", "HND", "IAD"]
 * [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]	["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
 *
 * 필수사항: 방문 경로 체크
 */
function solution(tickets) {
  let answer = [];
  const ICN = 'ICN';
  const visited = Array(tickets.length).fill(0);

  // path: 방문 경로 (구해야 하는 값)
  const dfs = (current, index, path) => {
    // 모든 항공권을 사용한 경우
    if (index === tickets.length) {
      answer.push(path);
      return;
    }

    // 모든 항공권 탐색
    for (let i = 0; i < tickets.length; i++) {
      if (visited[i]) continue;

      // 현재 공항과 다음 공항이 같은 경우
      if (current === tickets[i][0]) {
        visited[i] = 1;
        // path에 현재 공항을 추가하여 다음 공항(tickets[i][1])으로 이동
        dfs(tickets[i][1], index + 1, [...path, tickets[i][1]]);
        visited[i] = 0;
      }
    }
  };

  // 항상 "ICN" 공항에서 출발
  dfs(ICN, 0, ['ICN']);

  console.log('answer.sort(): ', answer.sort());
  return answer.sort()[0];
}
console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ]),
); // ["ICN", "JFK", "HND", "IAD"]
console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ]),
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]
