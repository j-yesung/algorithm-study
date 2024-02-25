function serachTree(arr, target) {
  let low = 0; // 첫 번째 인덱스
  let high = arr.length - 1; // 마지막 인덱스

  // 서로가 만나는 지점이 없을 때까지 반복
  while (low <= high) {
    let mid = Math.floor((low + high) / 2); // 중간 인덱스
    let guess = arr[mid]; // 중간 인덱스의 값

    if (guess === target) return mid; // 찾으려는 값이 중간 값이면 인덱스 반환

    // 좁혀 나가야 할 범위를 설정
    if (guess > target) {
      high = mid - 1; // 찾으려는 값이 중간 값보다 작으면 high를 중간 값 - 1로 설정
    } else {
      low = mid + 1; // 찾으려는 값이 중간 값보다 크면 low를 중간 값 + 1로 설정
    }
  }
  return -1; // 찾으려는 값이 없으면 -1 반환
}

console.log(serachTree([-15, -4, 2, 8, 9, 13, 15], 9));
