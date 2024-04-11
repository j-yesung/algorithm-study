/**
 * [문제 설명]
 * 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.
 * 1. 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
 * 2. 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
 * 3. 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
 * 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 plays가 주어질 때,
 * 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.
 *
 * [제한사항]
 * genres[i]는 고유번호가 i인 노래의 장르입니다.
 * plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
 * genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
 * 장르 종류는 100개 미만입니다.
 * 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
 * 모든 장르는 재생된 횟수가 다릅니다.
 *
 * [입출력 예]
 * genres	                                          plays	                      return
 * ["classic", "pop", "classic", "classic", "pop"]	[500, 600, 150, 800, 2500]	[4, 1, 3, 0]
 *
 * [알고리즘]
 * 해시
 */
function solution(genres, plays) {
  const answer = [];
  const map = new Map();

  // 1. 장르별 총 재생 횟수와 노래 리스트를 저장
  for (let i = 0; i < genres.length; i++) {
    if (!map.has(genres[i])) {
      map.set(genres[i], { total: 0, songs: [] });
    }

    let info = map.get(genres[i]);
    info.total += plays[i];
    info.songs.push({ id: i, plays: plays[i] });
  }

  // 2. 장르별 총 재생 횟수를 기준으로 내림차순으로 정렬
  let sortedGenres = Array.from(map.entries()).sort((a, b) => b[1].total - a[1].total);

  // 3. 각 장르별로 노래를 재생 횟수와 고유 번호 기준으로 정렬하고, 상위 2개의 고유 번호를 결과 배열에 추가
  sortedGenres.forEach(([_, { songs }]) => {
    console.log('songs: ', songs);
    songs.sort((a, b) => b.plays - a.plays || a.id - b.id); // 재생 횟수가 같으면 고유 번호 기준으로 오름차순 정렬
    songs.slice(0, 2).forEach(song => answer.push(song.id)); // 상위 2개의 고유 번호 추가
  });

  return answer;
}
console.log(solution(['classic', 'pop', 'classic', 'classic', 'pop'], [500, 600, 150, 800, 2500])); // [4, 1, 3, 0]
