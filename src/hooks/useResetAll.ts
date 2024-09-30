import { useGameStateRoom } from "../Stores/useGameRoomState";
import { useGameStore } from "../Stores/useGameStore";
import { useUserStore } from "../Stores/useUserStore";

export const useResetAll = () => {
  const { reset: resetGame } = useGameStore();
  const { reset: resetGameRoom } = useGameStateRoom();
  const { reset: resetUser } = useUserStore();

  return () => {
    resetGame();
    resetGameRoom();
    resetUser();
  };
};
