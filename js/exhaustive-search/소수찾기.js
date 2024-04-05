/**
 * 문제 설명
 * 한자리 숫자가 적힌 종이 조각이 흩어져있습니다. 흩어진 종이 조각을 붙여 소수를 몇 개 만들 수 있는지 알아내려 합니다.
 * 각 종이 조각에 적힌 숫자가 적힌 문자열 numbers가 주어졌을 때, 종이 조각으로 만들 수 있는 소수가 몇 개인지 return 하도록 solution 함수를 완성해주세요.
 *
 * 제한사항
 * numbers는 길이 1 이상 7 이하인 문자열입니다.
 * numbers는 0~9까지 숫자만으로 이루어져 있습니다.
 * "013"은 0, 1, 3 숫자가 적힌 종이 조각이 흩어져있다는 의미입니다.
 *
 * 입출력 예
 * numbers	return
 * "17"	    3
 * "011"	  2
 */
function solution(numbers) {
  const answer = new Set();
  const arr = numbers.split('');
  const visited = new Array(arr.length).fill(false);

  // 소수인지 판단하는 함수
  const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  // 순열을 구하는 함수 DFS 알고리즘
  const dfs = current => {
    if (current.length > 0) {
      const num = Number(current);
      if (isPrime(num)) answer.add(num);
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      dfs(current + arr[i]);
      visited[i] = false;
    }
  };

  dfs('');

  return answer.size;
}
console.log(solution('17')); // 3
console.log(solution('011')); // 2
