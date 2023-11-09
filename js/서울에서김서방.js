function solution(seoul) {
  let str = '';

  for (let i = 0; i < seoul.length; i++) {
    if (seoul[i] === 'Kim') {
      str = `김서방은 ${i}에 있다`;
    } else {
      continue;
    }
  }

  return str;
}

console.log(solution(['Jane', 'asdasdasd', 'asd', 'Kim']));
