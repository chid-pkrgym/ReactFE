import asSvg from "../assets/AS.svg";
import ahSvg from "../assets/AH.svg";
import acSvg from "../assets/AC.svg";
import adSvg from "../assets/AD.svg";

const CARDS = [asSvg, ahSvg, acSvg, adSvg];

function Board() {
  return (
    <div
      id="board"
      className="flex items-center justify-center gap-3 w-full h-full px-8 md:px-8 lg:px-10 xl:px-12 2xl:px-16 border border-[rgba(80,65,110,0.8)]"
      style={{
        background:
          "repeating-linear-gradient(45deg, rgba(237,237,237,0.06) 0 1px, transparent 1px 10px) #050505",
      }}
    >
      {CARDS.map((src, i) => (
        <img
          key={i}
          src={src}
          alt=""
          className="h-20 sm:h-22 md:h-24 lg:h-26 xl:h-28 2xl:h-28 w-auto"
        />
      ))}
      <div className="h-20 sm:h-22 md:h-24 lg:h-26 xl:h-28 2xl:h-28 aspect-[110/154] rounded border border-dashed border-white/10" />
    </div>
  );
}

export default Board;
