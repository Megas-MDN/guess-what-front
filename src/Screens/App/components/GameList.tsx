import { Stack } from "@mui/material";
import { GameCard, IGameCardProps } from "./GameCard";

export const GameList = () => {
  const status: ("WAITING" | "IN PROGRESS" | "FINISHED")[] = [
    "WAITING",
    "IN PROGRESS",
    "FINISHED",
  ];
  const gameRoomList: IGameCardProps[] = [
    {
      status: status[0],
      round: 0,
      team01: 2,
      team02: 1,
      roomId: "hash01",
    },
    {
      status: status[1],
      round: 1,
      team01: 2,
      team02: 2,
      roomId: "hash02",
    },
    {
      status: status[1],
      round: 0,
      team01: 4,
      team02: 4,
      roomId: "hash03",
    },
    {
      status: status[2],
      round: 0,
      team01: 2,
      team02: 2,
      roomId: "hash04",
      whoWins: 1,
      roundWinner: 2,
      roundLoser: 0,
    },
  ];

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
