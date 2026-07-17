import Grid from "./Grid";
import Navigation from "./Navigation";

function App() {
  return (
    <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
      <div className="w-full aspect-video max-h-175">
        <Grid />
      </div>
      <div className="flex-1 min-h-0">
        <Navigation />
      </div>
    </div>
  );
}

export default App;
