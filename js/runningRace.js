function solution(players, callings) {
  const playerObj = {}; // 선수 이름과 인덱스를 매핑하는 객체를 생성합니다.
  const rankings = [...players]; // 선수들의 이름을 복사하여 등수 배열을 초기화합니다.

  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    playerObj[player] = i; // 선수 이름과 인덱스를 매핑합니다.
  }

  for (let i = 0; i < callings.length; i++) {
    const calling = callings[i];
    const index = playerObj[calling]; // 객체에서 인덱스를 직접 찾아옵니다.

    console.log(calling, index);
    if (index > 0) {
      [rankings[index], rankings[index - 1]] = [rankings[index - 1], rankings[index]];
      // console.log('업데이트 전 => ', rankings);
      playerObj[calling] = index - 1; // 인덱스를 업데이트합니다.
      playerObj[rankings[index]] = index; // 다음 선수의 인덱스도 업데이트합니다.
      // console.log('업데이트 후 => ', rankings);
    }
    console.log('playerObj: ', playerObj);
  }

  return rankings;
}

let testArr1 = ['mumu', 'soe', 'poe', 'kai', 'mine'];
let testArr2 = ['kai', 'kai', 'mine', 'mine'];
console.log(solution(testArr1, testArr2));
