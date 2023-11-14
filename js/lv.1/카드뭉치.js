function solution(cards1, cards2, goal) {
  let [index1, index2] = [0, 0];

  for (let word of goal) {
    if (cards1[index1] === word) index1++;
    else if (cards2[index2] === word) index2++;
    else return 'No';
  }

  return 'Yes';
}

console.log(solution('foobar'));
