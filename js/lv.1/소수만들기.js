function solution(nums) {
  let result = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        sum = nums[i] + nums[j] + nums[k];

        if (findPrimeNumber(sum)) {
          console.log(sum);
          result++;
        }
      }
    }
  }

  return result;

  // 소수 찾기
  function findPrimeNumber(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // 소수 아님
    }
    return true; // 소수 맞음
  }
}
