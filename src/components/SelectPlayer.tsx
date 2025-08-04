import { LogoFigures } from "./LogoFigures"
import { useConfigStore } from "../stores/ConfigStore"

export const SelectPlayer = () => {

  const { setPlayerOne, setPlayerTwo, setGameMode, playerOne } = useConfigStore()

  const handlePlayerOneSelection = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const figure = evt.currentTarget.dataset.value
    if (figure) {
      setPlayerOne({ name: "Player 1", figure: figure as "X" | "0" })
    }
  }

  const handleGameModeSelection = (evt: React.MouseEvent<HTMLButtonElement>) => {
    const mode = evt.currentTarget.dataset.value
    if (playerOne.name === "") {
      alert("Please select Player 1's figure first.")
      return
    }
    if (mode) {
      setGameMode(mode)
      if (mode === "cpu") {
        setPlayerTwo({ name: "CPU", figure: playerOne.figure === "X" ? "0" : "X", isCPU: true })
      } else {
        setPlayerTwo({ name: "Player 2", figure: playerOne.figure === "X" ? "0" : "X" })
      }
    }
  }

  return (
    <div className="w-2/4 mx-auto">
      <LogoFigures />
      <article className="bg-block-bg p-8 rounded-lg shadow-lg mt-2">
        <h2 className="font-semibold text-lg text-restart-button">Pick Player 1's Mark</h2>
        <div className="my-5 flex items-center rounded-lg bg-main-bg">
          <button onClick={handlePlayerOneSelection} data-value="X" className="w-1/2 p-3 text-main-bg font-bold bg-x rounded-l-lg hover:bg-x/80 transition-colors cursor-pointer">
            X
          </button>
          <button onClick={handlePlayerOneSelection} data-value="O" className="w-1/2 p-3 text-main-bg font-bold bg-o rounded-r-lg hover:bg-o/80 transition-colors cursor-pointer">
            O
          </button>
        </div>
        <span className="text-sm text-gray-400 font-semibold">Reminder: X goes first</span>
      </article>
      <div className="w-full mx-auto mt-5 space-y-4">
        <button onClick={handleGameModeSelection} data-value="cpu" className="w-full p-3 text-main-bg font-bold bg-x rounded-lg hover:bg-x/80 transition-colors cursor-pointer">
          New Game (VS CPU)
        </button>
        <button onClick={handleGameModeSelection} data-value="player" className="w-full p-3 text-main-bg font-bold bg-o rounded-lg hover:bg-x/80 transition-colors cursor-pointer">
          New Game (VS Player 2)
        </button>
      </div>
    </div>
  )
}
