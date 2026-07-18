const BADGE = { ring: "#9fa1ff", glow: "rgba(159,161,255,0.1)" };

import { motion } from "motion/react";
import Card from "./Card";
import { Street } from "../constants/street";

const SPRING = { type: "spring", duration: 0.9, bounce: 0.25 };
const STAGGER = 0.14;
const ROUND_GAP = 0.19;

function Seat({
  name,
  initial,
  pos = "—",
  holeCards = [null, null],
  street = Street.NEW,
  dealIndex = 0,
  onDealComplete,
}) {
  const dealt = street !== Street.NEW;
  const d0 = dealIndex * (ROUND_GAP + STAGGER);
  const d1 = d0 + ROUND_GAP;

  return (
    <div id="seat" className="flex flex-col items-center justify-center">
      {/* Hole cards — badge covers their bottom quarter */}
      <div
        id="hole-cards"
        className="flex items-end mb-[-12px] sm:mb-[-14px] md:mb-[-16px] lg:mb-[-20px] xl:mb-[-24px] 2xl:mb-[-28px]"
      >
        <motion.div
          className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-22 aspect-[110/154] origin-bottom -rotate-[9deg]"
          initial={{ y: 48, opacity: 0 }}
          animate={dealt ? { y: 0, opacity: 1 } : { y: 48, opacity: 0 }}
          transition={dealt ? { ...SPRING, delay: d0 } : { duration: 0.15 }}
        >
          <Card
            rank={holeCards[0]?.rank}
            suit={holeCards[0]?.suit}
            isHoleCard
            className="block w-full h-full"
            variant="back"
          />
        </motion.div>
        <motion.div
          className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-22 aspect-[110/154] origin-bottom rotate-[5deg] -ml-[14px] sm:-ml-[16px] md:-ml-[18px] lg:-ml-[23px] xl:-ml-[30px] 2xl:-ml-[32px]"
          initial={{ y: 48, opacity: 0 }}
          animate={dealt ? { y: 0, opacity: 1 } : { y: 48, opacity: 0 }}
          transition={dealt ? { ...SPRING, delay: d1 } : { duration: 0.15 }}
          onAnimationComplete={() => {
            if (dealt) onDealComplete?.();
          }}
        >
          <Card
            rank={holeCards[1]?.rank}
            suit={holeCards[1]?.suit}
            isHoleCard
            className="block w-full h-full"
            variant="back"
          />
        </motion.div>
      </div>

      {/* Badge — z-10 so it renders on top of card bottoms */}
      <div
        id="badge"
        className="relative z-10 flex w-full items-center gap-2 rounded-[5px] px-2.5 py-1.5 whitespace-nowrap"
        style={{
          background: "rgba(6,6,8,0.9)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: `0 0 0 1px ${BADGE.glow}, inset 0 1px 0 rgba(255,255,255,0.03)`,
        }}
      >
        <div
          className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[12px] [font-family:var(--pt-font-display)]"
          style={{
            background: BADGE.glow,
            border: `1.5px solid ${BADGE.ring}`,
            color: BADGE.ring,
          }}
        >
          {initial}
        </div>
        <div className="flex flex-col gap-px">
          <span className="text-[10px] tracking-[0.08em] uppercase text-[#dedede] [font-family:var(--pt-font-display)] leading-none">
            {name}
          </span>
          <span className="text-[8px] tracking-[0.16em] uppercase text-[#4a4a4a] [font-family:var(--pt-font-display)] leading-none">
            {pos}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Seat;
