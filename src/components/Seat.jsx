const VARIANT = {
  cool: { ring: "#9fa1ff", glow: "rgba(159,161,255,0.1)" },
  warm: { ring: "#d25e65", glow: "rgba(210,94,101,0.1)" },
};

const SUIT = {
  spade: { bg: "#161616", stroke: "#2A2A2A", color: "#EDEDED" },
  heart: { bg: "#1C1416", stroke: "#332226", color: "#D25E65" },
  club: { bg: "#161616", stroke: "#2A2A2A", color: "#EDEDED" },
  diamond: { bg: "#1C1416", stroke: "#332226", color: "#D25E65" },
};

function SpadeSuit({ color }) {
  return (
    <g transform="translate(55,77) scale(0.5,0.422) translate(-60,-60)">
      <polygon
        points="60,13 16,90.67 20,94.67 45,94.67 60,68.69 75,94.67 100,94.67 104,90.67"
        fill={color}
      />
      <polygon points="60,81.89 75,107.87 45,107.87" fill={color} />
    </g>
  );
}

function HeartSuit({ color }) {
  return (
    <g transform="translate(55,77) scale(0.5,0.54) translate(-60,-60)">
      <polygon
        points="60,94.8 104,50.8 78.4,25.2 60,43.6 41.6,25.2 16,50.8"
        fill={color}
      />
    </g>
  );
}

function ClubSuit({ color, bg }) {
  return (
    <g transform="translate(55,77) scale(0.54,0.5) translate(-60,-60)">
      <circle cx="60" cy="38.5" r="20" fill={color} />
      <circle cx="42.68" cy="68.5" r="20" fill={color} />
      <circle cx="77.32" cy="68.5" r="20" fill={color} />
      <polygon points="38,101.5 60,63.39 82,101.5" fill={bg} />
      <polygon points="45,101.5 60,75.52 75,101.5" fill={color} />
    </g>
  );
}

function DiamondSuit({ color }) {
  return (
    <g transform="translate(55,77) scale(0.5) translate(-60,-60)">
      <polygon points="60,104 16,60 60,16 104,60" fill={color} />
    </g>
  );
}

function HoleCard({ rank, suit }) {
  if (!rank || !suit) {
    return (
      <svg
        className="block w-full h-full"
        viewBox="0 0 110 154"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          y="0.5"
          width="109"
          height="153"
          rx="6"
          fill="#0d0f1a"
          stroke="#252840"
        />
        <rect
          x="8"
          y="8"
          width="94"
          height="138"
          rx="4"
          fill="none"
          stroke="#2e3260"
          strokeWidth="0.8"
          strokeOpacity="0.5"
        />
      </svg>
    );
  }
  const { bg, stroke, color } = SUIT[suit];
  return (
    <svg
      className="block w-full h-full"
      viewBox="0 0 110 154"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="109"
        height="153"
        rx="6"
        fill={bg}
        stroke={stroke}
      />
      <g transform="rotate(180 55 77)">
        <text
          x="10"
          y="26"
          fontFamily="Aldrich"
          fontSize="20"
          fontWeight="500"
          fill={color}
        >
          {rank}
        </text>
      </g>
      <text
        x="10"
        y="26"
        fontFamily="Aldrich"
        fontSize="20"
        fontWeight="500"
        fill={color}
      >
        {rank}
      </text>
      {suit === "spade" && <SpadeSuit color={color} />}
      {suit === "heart" && <HeartSuit color={color} />}
      {suit === "club" && <ClubSuit color={color} bg={bg} />}
      {suit === "diamond" && <DiamondSuit color={color} />}
    </svg>
  );
}

function Seat({
  name,
  initial,
  variant = "cool",
  pos = "—",
  holeCards = [null, null],
}) {
  const v = VARIANT[variant];

  return (
    <div id="seat" className="flex flex-col items-center justify-center">
      {/* Hole cards — badge covers their bottom quarter */}
      <div
        id="hole-cards"
        className="flex items-end mb-[-12px] sm:mb-[-14px] md:mb-[-16px] lg:mb-[-20px] xl:mb-[-24px] 2xl:mb-[-28px]"
      >
        <div className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-22 aspect-[110/154] origin-bottom -rotate-[9deg]">
          <HoleCard rank={holeCards[0]?.rank} suit={holeCards[0]?.suit} />
        </div>
        <div className="h-12 sm:h-14 md:h-16 lg:h-18 xl:h-20 2xl:h-22 aspect-[110/154] origin-bottom rotate-[5deg] -ml-[14px] sm:-ml-[16px] md:-ml-[18px] lg:-ml-[23px] xl:-ml-[30px] 2xl:-ml-[32px]">
          <HoleCard rank={holeCards[1]?.rank} suit={holeCards[1]?.suit} />
        </div>
      </div>

      {/* Badge — z-10 so it renders on top of card bottoms */}
      <div
        id="badge"
        className="relative z-10 flex w-full items-center gap-2 rounded-[5px] px-2.5 py-1.5 whitespace-nowrap"
        style={{
          background: "rgba(6,6,8,0.9)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow: `0 0 0 1px ${v.glow}, inset 0 1px 0 rgba(255,255,255,0.03)`,
        }}
      >
        <div
          className="w-7 h-7 rounded-full shrink-0 flex items-center justify-center text-[12px] [font-family:var(--pt-font-display)]"
          style={{
            background: v.glow,
            border: `1.5px solid ${v.ring}`,
            color: v.ring,
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
