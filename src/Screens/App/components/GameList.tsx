import { Stack } from "@mui/material";
import { GameCard } from "./GameCard";
import { useGameStore } from "../../../Stores/useGameStore";
import { useEffect } from "react";
import { useGame } from "../../../hooks/useGame";

export const GameList = () => {
  const { gameRoomList } = useGameStore();
  const { fetchGameRooms } = useGame();
  useEffect(() => {
    fetchGameRooms();
  }, []);

  return (
    <Stack
      sx={{
        gap: "16px",
        padding: "8px",
        overflow: "auto",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        borderRadius: "8px",
        paddingBottom: "32px",
      }}
    >
      {gameRoomList.map((gameRoom, index) => (
        <GameCard key={index} {...gameRoom} />
      ))}
    </Stack>
  );
};
