/**
 * [문제 설명]
 * 피보나치 수는 F(0) = 0, F(1) = 1일 때, 1 이상의 n에 대하여 F(n) = F(n-1) + F(n-2) 가 적용되는 수 입니다.
 * 예를들어
 * F(2) = F(0) + F(1) = 0 + 1 = 1
 * F(3) = F(1) + F(2) = 1 + 1 = 2
 * F(4) = F(2) + F(3) = 1 + 2 = 3
 * F(5) = F(3) + F(4) = 2 + 3 = 5
 * 와 같이 이어집니다.
 * 2 이상의 n이 입력되었을 때, n번째 피보나치 수를 1234567으로 나눈 나머지를 리턴하는 함수, solution을 완성해 주세요.
 *
 * [제한 사항]
 * n은 2 이상 100,000 이하인 자연수입니다.
 *
 * [입출력 예]
 * n	return
 * 3	2
 * 5	5
 */
function solution(n) {
  function solution(n) {
    const div = 1234567;
    let fibo = [0, 1]; // 피보나치 초기화

    for (let i = 2; i <= n; i++) {
      fibo[i] = (fibo[i - 1] + fibo[i - 2]) % div;
      // F(n) = F(n-1) + F(n-2)
    }

    return fibo[n];
  }
}
console.log(solution(5));
