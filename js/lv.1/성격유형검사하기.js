function solution(survey, choices) {
  let answer = '';
  // 성격 유형 지표를 객체로 만들고 합산 점수를 value로 넣어준다.
  // 각 점수를 비교하여 가장 높은 점수를 가진 성격 유형을 찾아낸다.
  // 만약에 점수가 같은 성격 유형이 있다면 사전 순으로 빠른 성격 유형을 반환한다. (앞에 있는 성격 유형을 반환)
  const types = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };

  for (let i = 0; i < choices.length; i++) {
    const [leftWord, rightWord] = survey[i].split('');
    const score = Math.abs(choices[i] - 4); // 절대값을 이용하여 4를 기준으로 점수를 계산한다.

    // 비동의 1, 2, 3점은 왼쪽 성격 유형에 더해주고, 동의 5, 6, 7점은 오른쪽 성격 유형에 더해준다.
    if (choices[i] < 4) {
      types[leftWord] += score;
    } else {
      types[rightWord] += score;
    }
  }

  const type = Object.keys(types);

  // 가장 높은 점수를 가진 성격 유형을 찾아낸다.
  for (let i = 0; i < type.length; i += 2) {
    const leftScore = types[type[i]];
    const rightScore = types[type[i + 1]];

    // 같으면 사전 순으로 왼쪽 성격 유형을 반환한다.
    if (leftScore >= rightScore) {
      answer += type[i];
    } else {
      answer += type[i + 1];
    }
  }

  return answer;
}

console.log(solution(['AN', 'CF', 'MJ', 'RT', 'NA'], [5, 3, 2, 7, 5]));
console.log(solution(['TR', 'RT', 'TR'], [7, 1, 3]));
