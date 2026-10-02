import { BoardView } from "../components/views/BoardView";
import { ConfigView } from "../components/views/ConfigView";
import { GoalView } from "../components/views/GoalView";
import { InstructionsView } from "../components/views/InstructionsView";
import { StartView } from "../components/views/StartView";
import { Stage } from "../components/Stage";
import { useGame } from "../store/GameProvider";

export function App() {
  const { view } = useGame();
  return (
    <Stage view={view}>
      {view === "start" ? <StartView /> : null}
      {view === "config" ? <ConfigView /> : null}
      {view === "instructions" ? <InstructionsView /> : null}
      {view === "board" ? <BoardView /> : null}
      {view === "goal" ? <GoalView /> : null}
    </Stage>
  );
}
