/**
 * 운영체제의 역할 중 하나는 컴퓨터 시스템의 자원을 효율적으로 관리하는 것입니다.
 * 이 문제에서는 운영체제가 다음 규칙에 따라 프로세스를 관리할 경우 특정 프로세스가 몇 번째로 실행되는지 알아내면 됩니다.
 * 예를 들어 프로세스 4개 [A, B, C, D]가 순서대로 실행 대기 큐에 들어있고, 우선순위가 [2, 1, 3, 2]라면 [C, D, A, B] 순으로 실행하게 됩니다.
 * 현재 실행 대기 큐(Queue)에 있는 프로세스의 중요도가 순서대로 담긴 배열 priorities와,
 * 몇 번째로 실행되는지 알고싶은 프로세스의 위치를 알려주는 location이 매개변수로 주어질 때, 해당 프로세스가 몇 번째로 실행되는지 return 하도록 solution 함수를 작성해주세요.
 */

function solution(priorities, location) {
  let answer = 0;
  const queue = priorities.map((priority, index) => ({ priority, index })); // 객체로 만들어서 큐에 넣는다.

  while (queue.length > 0) {
    const current = queue.shift(); // 가장 앞에 있는 프로세스를 꺼낸다.
    const isPrint = queue.some(item => item.priority > current.priority); // 꺼낸 프로세스보다 중요도가 높은 프로세스가 있는지 확인한다.

    // 꺼낸 프로세스보다 중요도가 높은 프로세스가 있으면 다시 큐에 넣는다.
    if (isPrint) {
      queue.push(current);
    } else {
      answer++; // 실행 순서를 증가시킨다.
      if (current.index === location) break; // 중복된 값이 있을 수 있으므로 index를 이용하여 확인한다.
    }
  }

  return answer;
}
// console.log(solution([2, 1, 3, 2], 2));
console.log(solution([1, 1, 9, 1, 1, 1], 0));
