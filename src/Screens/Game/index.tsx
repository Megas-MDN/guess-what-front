import { Stack } from "@mui/material";
import { Btn } from "../../components/Btn";
import { Screen } from "../../components/Screen";
import { Text } from "../../components/Text";
import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";
import { GameContainer } from "./components/GameContainer";
import { useGameStateRoom } from "../../Stores/useGameRoomState";
import { useGameRoom } from "../../hooks/useGameRoom";
import { useEffect } from "react";

export const Game = () => {
  const navigate = useNavigate();
  const { roomId, usersList, status } = useGameStateRoom();
  const { isLoading, fetchGameRoom, startGame } = useGameRoom();
  const already =
    status === "WAITING" &&
    usersList.team01.length > 1 &&
    usersList.team02.length > 1;
  const whoWins: 1 | 2 | null = 1;
  const round = 1;
  const word = "Hello";
  const isWordDiller = false;

  const onSend = () => {};
  const onSendDescription = () => {};
  const handleClickStartGame = async () => {
    const res = await startGame(roomId);
    if (!res) {
      return;
    }
  };

  useEffect(() => {
    console.log(roomId, "roomId");
    fetchGameRoom(roomId);
  }, [roomId]);

  return (
    <Screen isLoading={isLoading}>
      <Header round={round} status={status} usersList={usersList} />
      {status === "WAITING" && (
        <Stack
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn
            onClick={handleClickStartGame}
            disabled={!already}
            sx={{
              padding: "10px",
              paddingX: "20px",
              fontSize: "44px",
            }}
          >
            Start Game
          </Btn>
        </Stack>
      )}
      {status === "FINISHED" && (
        <Stack
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            sx={{
              fontSize: "44px",
              marginBottom: "16px",
            }}
          >{`Team ${whoWins} WIN`}</Text>
          <Btn
            onClick={() => navigate("/")}
            sx={{
              padding: "10px",
              paddingX: "40px",
              fontSize: "24px",
            }}
          >
            Exit
          </Btn>
        </Stack>
      )}
      {status === "IN PROGRESS" && (
        <GameContainer
          word={word}
          isWordDiller={isWordDiller}
          onSend={onSend}
          onSendDescription={onSendDescription}
        />
      )}
    </Screen>
  );
};
