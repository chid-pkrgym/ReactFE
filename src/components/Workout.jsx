import { useState } from "react";
import Grid from "./Grid";
import Navigation from "./Navigation";
import { Street } from "../constants/street";
import { parseCard, parseHoleCardPair } from "../lib/cards";
import drill from "../../drills/dr_01.json";

const holeCardsBySeat = drill.hole_cards.map(parseHoleCardPair);
const communityCards = drill.community_cards.map(parseCard);

function Workout() {
  const [street, setStreet] = useState(Street.NEW);

  const handleDeal = () => {
    setStreet((s) => (s === Street.NEW ? Street.PRE_FLOP : Street.NEW));
  };

  const handleHoleCardsDealt = () => {
    setStreet((s) => (s === Street.PRE_FLOP ? Street.FLOP : s));
  };

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <div className="w-full aspect-video max-h-175">
        <Grid
          street={street}
          holeCardsBySeat={holeCardsBySeat}
          communityCards={communityCards}
          onDealComplete={handleHoleCardsDealt}
        />
      </div>
      <div className="flex-1 min-h-0">
        <Navigation street={street} onDeal={handleDeal} />
      </div>
    </div>
  );
}

export default Workout;
