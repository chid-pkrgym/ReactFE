import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Card from "./Card";
import { Street } from "../constants/street";

const CARD_SIZE =
  "h-20 sm:h-22 md:h-24 lg:h-26 xl:h-28 2xl:h-28 aspect-[110/154]";

const BOARD_SLOTS = 5;

const REVEALED_COUNT = {
  [Street.NEW]: 0,
  [Street.PRE_FLOP]: 0,
  [Street.FLOP]: 3,
  [Street.TURN]: 4,
  [Street.RIVER]: 5,
};

const STREET_LABEL = {
  [Street.FLOP]: "FLOP",
  [Street.TURN]: "TURN",
  [Street.RIVER]: "RIVER",
};

const SPRING = { type: "spring", duration: 0.6, bounce: 0.25 };
const STAGGER = 0.12;

function Board({ street = Street.NEW, communityCards = [] }) {
  const revealedCount = REVEALED_COUNT[street] ?? 0;
  const label = STREET_LABEL[street];
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    if (!label) {
      setShowLabel(false);
      return;
    }
    setShowLabel(true);
    const dealDuration = (revealedCount - 1) * STAGGER + SPRING.duration;
    const timer = setTimeout(
      () => setShowLabel(false),
      dealDuration * 1000 + 300,
    );
    return () => clearTimeout(timer);
  }, [street, label, revealedCount]);

  return (
    <div
      id="board"
      className="relative flex items-center justify-center gap-3 w-full h-full px-8 md:px-8 lg:px-10 xl:px-12 2xl:px-16 border border-[#9fa1ff]/40"
      style={{
        background:
          "repeating-linear-gradient(45deg, rgba(237,237,237,0.06) 0 1px, transparent 1px 10px) #050505",
      }}
    >
      <AnimatePresence>
        {showLabel && (
          <motion.span
            key={label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-2 left-2 text-sm tracking-[0.22em] uppercase text-[#ffffff] [font-family:var(--pt-font-display)]"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
      {Array.from({ length: BOARD_SLOTS }, (_, i) => {
        const revealed = i < revealedCount;
        return (
          <div key={i} className={CARD_SIZE}>
            {revealed ? (
              <motion.div
                className="w-full h-full"
                initial={{ y: 16, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ ...SPRING, delay: i * STAGGER }}
              >
                <Card
                  rank={communityCards[i]?.rank}
                  suit={communityCards[i]?.suit}
                  className="w-full h-full"
                />
              </motion.div>
            ) : (
              <Card className="w-full h-full" />
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Board;
