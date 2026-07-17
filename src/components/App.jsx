import { useState } from "react";
import Grid from "./Grid";
import Navigation from "./Navigation";

function App() {
  const [dealt, setDealt] = useState(false);

  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <div className="w-full aspect-video max-h-175">
        <Grid dealt={dealt} />
      </div>
      <div className="flex-1 min-h-0">
        <Navigation dealt={dealt} onDeal={() => setDealt((d) => !d)} />
      </div>
    </div>
  );
}

export default App;
