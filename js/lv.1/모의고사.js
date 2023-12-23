function solution(answers) {
  const supoza1 = [1, 2, 3, 4, 5];
  const supoza2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supoza3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  let tempSupoza = [];
  let topScore = 0;
  let answer = [];

  for (let i = 0; i < answers.length; i++) {
    if (supoza1[i % supoza1.length] === answers[i]) {
      count1++;
    }
    if (supoza2[i % supoza2.length] === answers[i]) {
      count2++;
    }
    if (supoza3[i % supoza3.length] === answers[i]) {
      count3++;
    }
  }

  tempSupoza.push(count1);
  tempSupoza.push(count2);
  tempSupoza.push(count3);

  topScore = Math.max(...tempSupoza);

  tempSupoza.forEach((e, i) => {
    if (topScore === e) {
      answer.push(i + 1);
    }
  });

  return answer;
}
