import Header from "./Header";
import Workout from "./Workout";

function App() {
  return (
    <div className="flex flex-col min-w-[768px] h-full">
      <Header />
      <Workout />
    </div>
  );
}

export default App;
