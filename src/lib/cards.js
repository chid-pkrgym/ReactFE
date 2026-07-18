const SUITS = { S: "spade", H: "heart", D: "diamond", C: "club" };

export function parseCard(code) {
  if (!code) return null;
  return { rank: code.slice(0, -1), suit: SUITS[code.slice(-1)] };
}

export function parseHoleCardPair(pair) {
  return pair.split(",").map(parseCard);
}
