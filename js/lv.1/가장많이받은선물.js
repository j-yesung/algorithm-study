function solution(friends, gifts) {
  let giftCounts = {};

  // 선물 주고받은 기록을 분석하여 친구들의 선물 지수 계산
  gifts.forEach(gift => {
    const [giver, receiver] = gift.split(' ');
    giftCounts[receiver] = (giftCounts[receiver] || 0) - 1;
    giftCounts[giver] = (giftCounts[giver] || 0) + 1;
  });
  console.log(giftCounts);

  const maxGifts = Math.max(...Object.values(giftCounts));

  // 가장 많은 선물을 받을 친구의 수 세기
  const maxGiftFriends = Object.values(giftCounts).filter(count => count === maxGifts).length;
  console.log(maxGiftFriends);

  return maxGiftFriends;
}
