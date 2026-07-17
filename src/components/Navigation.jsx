import { motion } from "motion/react";

function ArrowUpRight() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 11L11 2M11 2H4.5M11 2V8.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function Navigation({ dealt, onDeal }) {
  return (
    <div id="navigation" className="w-full h-full flex items-center justify-center">
      <motion.button
        onClick={onDeal}
        initial={false}
        whileHover={{ scale: 1.03, boxShadow: "0 0 28px rgba(159,161,255,0.18), 0 0 0 1px rgba(159,161,255,0.35)" }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: "spring", stiffness: 420, damping: 22 }}
        className="flex items-center gap-2.5 px-7 py-2.5 rounded-lg cursor-pointer [font-family:var(--pt-font-display)] text-[11px] tracking-[0.22em] uppercase text-[#9fa1ff]"
        style={{
          background: "rgba(159,161,255,0.04)",
          border: "1px solid rgba(159,161,255,0.18)",
          boxShadow: "0 0 12px rgba(159,161,255,0.06)",
        }}
      >
        {dealt ? "RESET" : "DEAL"}
        <ArrowUpRight />
      </motion.button>
    </div>
  );
}

export default Navigation;
