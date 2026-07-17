import Board from "./Board";
import Seat from "./Seat";

const SEATS = [
  {
    id: 1,
    name: "Vera",
    initial: "V",
    variant: "cool",
    pos: "BTN",
    holeCards: [
      { rank: "A", suit: "spade" },
      { rank: "A", suit: "heart" },
    ],
  },
  {
    id: 2,
    name: "Blaze",
    initial: "B",
    variant: "warm",
    pos: "SB",
    holeCards: [
      { rank: "A", suit: "club" },
      { rank: "A", suit: "diamond" },
    ],
  },
  {
    id: 3,
    name: "Greta",
    initial: "G",
    variant: "cool",
    pos: "BB",
    holeCards: [
      { rank: "A", suit: "spade" },
      { rank: "A", suit: "club" },
    ],
  },
  {
    id: 4,
    name: "Wanda",
    initial: "W",
    variant: "warm",
    pos: "UTG",
    holeCards: [
      { rank: "A", suit: "heart" },
      { rank: "A", suit: "diamond" },
    ],
  },
  {
    id: 5,
    name: "Duke",
    initial: "D",
    variant: "cool",
    pos: "UTG+1",
    holeCards: [
      { rank: "A", suit: "spade" },
      { rank: "A", suit: "diamond" },
    ],
  },
  {
    id: 6,
    name: "Rhea",
    initial: "R",
    variant: "warm",
    pos: "CO",
    holeCards: [
      { rank: "A", suit: "heart" },
      { rank: "A", suit: "club" },
    ],
  },
];

// Clockwise from SB: SB(2) → BB(3) → UTG+1(5) → UTG(4) → CO(6) → BTN(1)
const DEAL_ORDER = { 2: 0, 3: 1, 5: 2, 4: 3, 6: 4, 1: 5 };

function Seats({ seats, dealt }) {
  const top = seats.filter((s) => [1, 2].includes(s.id));
  const left = seats.find((s) => s.id === 6);
  const right = seats.find((s) => s.id === 3);
  const bottom = seats.filter((s) => [5, 4].includes(s.id));

  return (
    <>
      <div
        style={{ gridColumn: 2, gridRow: 1 }}
        className="flex justify-around pt-2 md:pt-4"
      >
        {top.map((s) => (
          <Seat key={s.id} {...s} dealt={dealt} dealIndex={DEAL_ORDER[s.id]} />
        ))}
      </div>
      <div
        style={{ gridColumn: 1, gridRow: 2 }}
        className="flex items-center justify-end pr-4 md:pr-8 lg:pr-12 xl:pr-14 2xl:pr-16"
      >
        {left && <Seat {...left} dealt={dealt} dealIndex={DEAL_ORDER[left.id]} />}
      </div>
      <div
        style={{ gridColumn: 3, gridRow: 2 }}
        className="flex items-center justify-start pl-4 md:pl-8 lg:pl-12 xl:pl-14 2xl:pl-16"
      >
        {right && <Seat {...right} dealt={dealt} dealIndex={DEAL_ORDER[right.id]} />}
      </div>
      <div
        style={{ gridColumn: 2, gridRow: 3 }}
        className="flex justify-around pb-2 md:pb-4"
      >
        {bottom.map((s) => (
          <Seat key={s.id} {...s} dealt={dealt} dealIndex={DEAL_ORDER[s.id]} />
        ))}
      </div>
    </>
  );
}

function Grid({ seats = SEATS, dealt = false }) {
  return (
    <div
      id="grid"
      className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_35%_1fr] w-full h-full"
    >
      <Seats seats={seats} dealt={dealt} />
      <div
        style={{ gridColumn: 2, gridRow: 2 }}
        className="flex items-center justify-center h-full w-full"
      >
        <Board />
      </div>
    </div>
  );
}

export default Grid;
