import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Player } from "../types/types";

interface ConfigState {
  playerOne: Player;
  playerTwo: Player;
  gameMode: string;
  setGameMode: (mode: string) => void;
  setPlayerOne: (player: Player) => void;
  setPlayerTwo: (player: Player) => void;
}

export const useConfigStore = create<ConfigState>()(
  persist(
    (set) => ({
      playerOne: { name: "", figure: "X" },
      playerTwo: { name: "", figure: "0" },
      gameMode: "cpu",
      setGameMode: (mode: string) => set({ gameMode: mode }),
      setPlayerOne: (player: Player) => set({ playerOne: player }),
      setPlayerTwo: (player: Player) => set({ playerTwo: player }),
    }),
    {
      name: "config-storage"
    }
  )
)
