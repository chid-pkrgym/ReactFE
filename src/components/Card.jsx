const SUIT_CONFIG = {
  spade: { bg: "#161616", stroke: "#2A2A2A", color: "#EDEDED" },
  heart: { bg: "#1C1416", stroke: "#332226", color: "#D25E65" },
  club: { bg: "#161616", stroke: "#2A2A2A", color: "#EDEDED" },
  diamond: { bg: "#1C1416", stroke: "#332226", color: "#D25E65" },
};

const SLOT = "flex-1 min-w-0 aspect-[110/154]";

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
      <circle cx="60.00" cy="38.50" r="20" fill={color} />
      <circle cx="42.68" cy="68.50" r="20" fill={color} />
      <circle cx="77.32" cy="68.50" r="20" fill={color} />
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

function Card({ rank, suit }) {
  if (!suit || !rank) {
    return (
      <div
        className={`${SLOT} border border-dashed border-[#2a2a2a] rounded`}
      />
    );
  }

  const { bg, stroke, color } = SUIT_CONFIG[suit];

  return (
    <div className={SLOT}>
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
            fontSize="24"
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
          fontSize="24"
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
    </div>
  );
}

export default Card;
