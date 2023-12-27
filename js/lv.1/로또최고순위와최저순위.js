function solution(lottos, win_nums) {
  let highRank = 0;
  let lowRank = 0;
  let ranking = [];
  const nums = lottos.filter(num => num === 0).length;

  for (let i = 0; i < lottos.length; i++) {
    for (let j = 0; j < win_nums.length; j++) {
      // lottos가 알 수 없는 번호이고 일치하지 않는 번호이면 일치한 번호라고 가정
      if (lottos[i] === 0 && lottos[i] !== win_nums[j]) {
        lowRank = nums;
        break;
      }
      // lottos와 win_nums 번호가 일치하다면 카운트 증가
      else if (lottos[i] === win_nums[j]) {
        win_nums.splice(j, 1);
        highRank++;
      }
    }
  }
  // highRank가 count 다 된 거 마지막으로 더해주기
  lowRank = highRank + nums;

  // lowRank, highRank가 1 또는 0이면 6등, 2개면 5등, 3개면 4등, 4개면 3등, 5개면 2등, 6개면 1등

  // lowRank
  if (lowRank <= 1) lowRank = 6;
  else lowRank = 7 - lowRank;
  // highRank
  if (highRank <= 1) highRank = 6;
  else highRank = 7 - highRank;

  ranking.push(lowRank);
  ranking.push(highRank);
}
console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
console.log(solution([0, 0, 0, 0, 0, 0], [38, 19, 20, 40, 15, 25]));
