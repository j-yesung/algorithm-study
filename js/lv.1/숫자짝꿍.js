function solution(X, Y) {
  var answer = [];
  // 1) 0부터 9까지 0으로 채우기
  let x_arr = new Array(10).fill(0);
  let y_arr = new Array(10).fill(0);

  // 2) X와 Y 문자열 분리
  X = X.split('');
  Y = Y.split('');

  // 3) X와 Y 문자열 비교해서 나온 숫자만큼 해당 자리에 더해주기
  for (let i = 0; i < X.length; i++) {
    console.log('X[i]: ', X[i]);
    x_arr[X[i]] += 1;
  }
  console.log('x_arr: ', x_arr);
  // 3) X와 Y 문자열 비교해서 나온 숫자만큼 해당 자리에 더해주기
  for (let i = 0; i < Y.length; i++) {
    y_arr[Y[i]] += 1;
  }

  // 4) 9부터 0까지 비교
  for (let i = 9; i >= 0; i--) {
    if (x_arr[i] !== 0 && y_arr[i] !== 0) {
      //5) X와 Y의 인덱스를 비교해서 둘 중 최소값 찾기
      let minCount = Math.min(x_arr[i], y_arr[i]);

      // 둘 중 비교한 숫자 중 최소값이 X와 Y에서 공통으로 나타나는 수이기 때문에 해당 수만큼 반복해서 채워준다.
      /*-----------------------------------
          * [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]
          * [0, 1, 1, 0, 0, 2, 0, 0, 0, 0]
          *     i=2 minCount=1  /  [2]
          *     i=5 minCount=2  /  [5, 5]
          -----------------------------------*/

      // 6) 해당 최소값만큼 index 채우기
      // i를 minCount만큼 push
      answer.push(String(i).repeat(minCount));
    }
  }
  // 7) 배열 문자열로 바꾸기
  answer = answer.join('');

  // 8) 나머지 조건 처리
  if (answer == '') return '-1';
  if (answer[0] == '0') return '0';

  return answer;
}
// console.log(solution('100', '2345'));
console.log(solution('5525', '1255'));
