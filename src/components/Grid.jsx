import Board from "./Board";
import Seat from "./Seat";
import { Street } from "../constants/street";

const SEATS = [
  { id: 1, name: "Vera", initial: "V", pos: "BTN" },
  { id: 2, name: "Blaze", initial: "B", pos: "SB" },
  { id: 3, name: "Greta", initial: "G", pos: "BB" },
  { id: 4, name: "Wanda", initial: "W", pos: "UTG" },
  { id: 5, name: "Duke", initial: "D", pos: "UTG+1" },
  { id: 6, name: "Rhea", initial: "R", pos: "CO" },
];

// Clockwise from SB: SB(2) → BB(3) → UTG+1(5) → UTG(4) → CO(6) → BTN(1)
const DEAL_ORDER = { 2: 0, 3: 1, 5: 2, 4: 3, 6: 4, 1: 5 };
const LAST_DEAL_INDEX = Math.max(...Object.values(DEAL_ORDER));

function Seats({ seats, street, onDealComplete }) {
  const top = seats.filter((s) => [1, 2].includes(s.id));
  const left = seats.find((s) => s.id === 6);
  const right = seats.find((s) => s.id === 3);
  const bottom = seats.filter((s) => [5, 4].includes(s.id));

  const dealCompleteFor = (id) =>
    DEAL_ORDER[id] === LAST_DEAL_INDEX ? onDealComplete : undefined;

  return (
    <>
      <div
        style={{ gridColumn: 2, gridRow: 1 }}
        className="flex justify-around pt-2 md:pt-4"
      >
        {top.map((s) => (
          <Seat
            key={s.id}
            {...s}
            street={street}
            dealIndex={DEAL_ORDER[s.id]}
            onDealComplete={dealCompleteFor(s.id)}
          />
        ))}
      </div>
      <div
        style={{ gridColumn: 1, gridRow: 2 }}
        className="flex items-center justify-end pr-4 md:pr-8 lg:pr-12 xl:pr-14 2xl:pr-16"
      >
        {left && (
          <Seat
            {...left}
            street={street}
            dealIndex={DEAL_ORDER[left.id]}
            onDealComplete={dealCompleteFor(left.id)}
          />
        )}
      </div>
      <div
        style={{ gridColumn: 3, gridRow: 2 }}
        className="flex items-center justify-start pl-4 md:pl-8 lg:pl-12 xl:pl-14 2xl:pl-16"
      >
        {right && (
          <Seat
            {...right}
            street={street}
            dealIndex={DEAL_ORDER[right.id]}
            onDealComplete={dealCompleteFor(right.id)}
          />
        )}
      </div>
      <div
        style={{ gridColumn: 2, gridRow: 3 }}
        className="flex justify-around pb-2 md:pb-4"
      >
        {bottom.map((s) => (
          <Seat
            key={s.id}
            {...s}
            street={street}
            dealIndex={DEAL_ORDER[s.id]}
            onDealComplete={dealCompleteFor(s.id)}
          />
        ))}
      </div>
    </>
  );
}

function Grid({
  seats = SEATS,
  street = Street.NEW,
  holeCardsBySeat = [],
  communityCards = [],
  onDealComplete,
}) {
  const seatsWithCards = seats.map((s, i) => ({
    ...s,
    holeCards: holeCardsBySeat[i],
  }));

  return (
    <div
      id="grid"
      className="grid grid-cols-[1fr_auto_1fr] grid-rows-[1fr_35%_1fr] w-full h-full"
    >
      <Seats
        seats={seatsWithCards}
        street={street}
        onDealComplete={onDealComplete}
      />
      <div
        style={{ gridColumn: 2, gridRow: 2 }}
        className="flex items-center justify-center h-full w-full"
      >
        <Board street={street} communityCards={communityCards} />
      </div>
    </div>
  );
}

export default Grid;
