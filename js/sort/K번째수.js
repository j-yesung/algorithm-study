/**
 * [문제 설명]
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구하려 합니다.
 * 예를 들어 array가 [1, 5, 2, 6, 3, 7, 4], i = 2, j = 5, k = 3이라면
 * array의 2번째부터 5번째까지 자르면 [5, 2, 6, 3]입니다.
 * 1에서 나온 배열을 정렬하면 [2, 3, 5, 6]입니다.
 * 2에서 나온 배열의 3번째 숫자는 5입니다.
 * 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
 * commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 */
function solution(array, commands) {
  const answer = [];
  const newArr = [];

  for (let i = 0; i < commands.length; i++) {
    const start = commands[i][0] - 1; // -1을 해주는 이유는 slice() 메서드가 start부터 end - 1까지의 요소를 반환하기 때문
    const end = commands[i][1]; // end는 포함하지 않으므로 그대로 사용

    newArr.push(array.slice(start, end).sort((a, b) => a - b)); // start부터 end까지의 요소를 반환하고 정렬
    answer.push(newArr[i][commands[i][2] - 1]); // k번째 수 push
  }

  return answer;
}
console.log(
  solution(
    [1, 5, 2, 6, 3, 7, 4],
    [
      [2, 5, 3],
      [4, 4, 1],
      [1, 7, 3],
    ],
  ),
); // [5, 6, 3]
