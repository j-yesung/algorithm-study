/**
 * 문제 설명
 * 트럭 여러 대가 강을 가로지르는 일차선 다리를 정해진 순으로 건너려 합니다. 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 알아내야 합니다.
 * 다리에는 트럭이 최대 bridge_length대 올라갈 수 있으며, 다리는 weight 이하까지의 무게를 견딜 수 있습니다. 단, 다리에 완전히 오르지 않은 트럭의 무게는 무시합니다.
 * 예를 들어, 트럭 2대가 올라갈 수 있고 무게를 10kg까지 견디는 다리가 있습니다.
 * 무게가 [7, 4, 5, 6]kg인 트럭이 순서대로 최단 시간 안에 다리를 건너려면 다음과 같이 건너야 합니다.
 * 따라서, 모든 트럭이 다리를 지나려면 최소 8초가 걸립니다.
 * solution 함수의 매개변수로 다리에 올라갈 수 있는 트럭 수 bridge_length, 다리가 견딜 수 있는 무게 weight, 트럭 별 무게 truck_weights가 주어집니다.
 * 이때 모든 트럭이 다리를 건너려면 최소 몇 초가 걸리는지 return 하도록 solution 함수를 완성하세요.
 */
function solution(bridge_length, weight, truck_weights) {
  let answer = 0;
  let bridge = new Array(bridge_length).fill(0); // 다리를 나타내는 배열
  let currentWeight = 0; // 현재 다리에 올라간 트럭들의 무게

  while (bridge.length) {
    currentWeight -= bridge.shift(); // 다리를 건너는 트럭의 무게를 빼준다.
    // 다리에 올라갈 트럭이 남아있으면 다리를 이동시킨다.
    if (truck_weights.length) {
      // 다리에 올라갈 수 있는 무게인지 확인한다.
      if (currentWeight + truck_weights[0] <= weight) {
        currentWeight += truck_weights[0];
        bridge.push(truck_weights.shift());
      } else {
        bridge.push(0);
      }
    }
    answer++;
  }

  return answer;
}
console.log(solution(2, 10, [7, 4, 5, 6])); // 8
