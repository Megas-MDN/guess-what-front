import { Stack } from "@mui/material";
import { Btn } from "../../components/Btn";
import { Screen } from "../../components/Screen";
import { Text } from "../../components/Text";
import { Header } from "./components/Header";
import { useNavigate } from "react-router-dom";
import { GameContainer } from "./components/GameContainer";
import { TGameStatus } from "../../types";

export const Game = () => {
  const navigate = useNavigate();
  const already = false;
  const status = ["WAITING", "IN PROGRESS", "FINISHED"][0] as TGameStatus;
  const whoWins: 1 | 2 | null = 1;
  const round = 1;
  const word = "Hello";
  const isWordDiller = false;
  const usersList = {
    team01: [
      "fulano silva def  fd df d dfdd",
      "fulano silva",
      "fulano silva",
      "fulano silva",
    ],
    team02: [
      "fulano silva ef dd fdfd wdf wdef 3we wd ",
      "fulano silva",
      "fulano silva",
      "fulano silva",
    ],
    userTeam: 2 as 1 | 2,
    team01Score: 0,
    team02Score: 0,
  };

  const onSend = () => {};
  const onSendDescription = () => {};

  return (
    <Screen>
      <Header round={round} status={status} usersList={usersList} />
      {status === "WAITING" && (
        <Stack
          className="bb"
          sx={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Btn
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
