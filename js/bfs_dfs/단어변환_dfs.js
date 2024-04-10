/**
 * [문제 설명]
 * 두 개의 단어 begin, target과 단어의 집합 words가 있습니다. 아래와 같은 규칙을 이용하여 begin에서 target으로 변환하는 가장 짧은 변환 과정을 찾으려고 합니다.
 * 1. 한 번에 한 개의 알파벳만 바꿀 수 있습니다.
 * 2. words에 있는 단어로만 변환할 수 있습니다.
 * 예를 들어 begin이 "hit", target가 "cog", words가 ["hot","dot","dog","lot","log","cog"]라면 "hit" -> "hot" -> "dot" -> "dog" -> "cog"와 같이 4단계를 거쳐 변환할 수 있습니다.
 * 두 개의 단어 begin, target과 단어의 집합 words가 매개변수로 주어질 때, 최소 몇 단계의 과정을 거쳐 begin을 target으로 변환할 수 있는지 return 하도록 solution 함수를 작성해주세요.
 *
 * [제한사항]
 * 각 단어는 알파벳 소문자로만 이루어져 있습니다.
 * 각 단어의 길이는 3 이상 10 이하이며 모든 단어의 길이는 같습니다.
 * words에는 3개 이상 50개 이하의 단어가 있으며 중복되는 단어는 없습니다.
 * begin과 target은 같지 않습니다.
 * 변환할 수 없는 경우에는 0를 return 합니다.
 *
 * [입출력 예]
 * begin	target	words	                                        return
 * "hit"	"cog"	  ["hot", "dot", "dog", "lot", "log", "cog"]	  4
 * "hit"	"cog"	  ["hot", "dot", "dog", "lot", "log"]	          0
 */
function solution(begin, target, words) {
  let answer = 0;
  const visited = Array(words.length).fill(0);

  const dfs = (current, index) => {
    // 현재 단어가 타겟 단어와 같은 경우
    if (current === target) {
      answer = index;
      return;
    }

    // 단어를 한 글자씩 비교하여 다른 글자가 하나인 경우
    for (let i = 0; i < words.length; i++) {
      if (visited[i]) continue; // 방문한 경우 무시

      let count = 0; // 다른 글자 개수
      // 한 글자씩 비교
      for (let j = 0; j < words[i].length; j++) {
        if (current[j] !== words[i][j]) count++; // 다른 글자가 하나인 경우
      }

      // 한 글자만 다른 경우
      if (count === 1) {
        visited[i] = 1; // 방문 처리
        dfs(words[i], index + 1); // 다음 단어로 이동
        // 방문 처리를 해제하지 않으면 다음 단어로 이동할 때 방문 처리가 되어 있어서 다음 단어로 이동하지 않음
        visited[i] = 0; // 방문 처리 해제
      }
    }
  };

  dfs(begin, 0);

  return answer;
}
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog'])); // 4
// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log'])); // 0
// console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog', 'cot'])); // 5
