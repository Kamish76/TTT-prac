import { Game } from "./components/Game"

function App() {
  return (
    <>
      <div className="board-container">
        <div className="board-wrapper">
          <Game />
        </div>
      </div>
    </>
  )
}

export default App