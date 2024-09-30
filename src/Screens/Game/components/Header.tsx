import { Stack } from "@mui/material";
import { Text } from "../../../components/Text";
import { TagStatus } from "../../../components/TagStatus";
import { Btn } from "../../../components/Btn";
import { useNavigate } from "react-router-dom";
import { useGameStateRoom } from "../../../Stores/useGameRoomState";
import { useGameStore } from "../../../Stores/useGameStore";
import { useUserStore } from "../../../Stores/useUserStore";

interface Props {
  usersList: {
    team01: string[];
    team02: string[];
    userTeam: 1 | 2;
    team01Score: number;
    team02Score: number;
  };
  round: number;
  status: "WAITING" | "IN PROGRESS" | "FINISHED";
}

export const Header = ({ usersList, round, status }: Props) => {
  const { reset: resetGame } = useGameStore();
  const { reset: resetGameRoom } = useGameStateRoom();
  const { reset: resetUser } = useUserStore();
  const navigate = useNavigate();
  const handleExit = () => {
    resetGame();
    resetGameRoom();
    resetUser();
    navigate("/");
  };
  return (
    <Stack
      sx={{
        flexDirection: "row",
        width: "100%",
        padding: "8px",
        justifyContent: "space-between",
        position: "relative",
        background: "rgba(0, 0, 0, 0.05)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Stack flexDirection={"row"} gap={"10px"}>
        <Text>Status: {status}</Text>
        <TagStatus status={status} />
      </Stack>
      {!!round && (
        <Text
          sx={{
            marginLeft: "auto",
            marginRight: "8px",
          }}
          fontWeight={"bold"}
        >{`Round: ${round}`}</Text>
      )}
      <Btn
        onClick={handleExit}
        sx={{
          paddingX: "8px",
        }}
      >
        X
      </Btn>
      <Stack
        sx={{
          position: "absolute",
          right: "0px",
          top: "40px",
          width: "220px",
          flexDirection: "row",
          gap: "10px",
          justifyContent: "space-between",
          background: "rgba(0, 0, 0, 0.05)",
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderTop: "none",
          padding: "8px",
        }}
      >
        <Stack>
          <Text
            sx={{
              marginBottom: "4px",
              fontWeight: usersList.userTeam === 1 ? "bold" : "normal",
            }}
          >{`${usersList.userTeam === 1 ? "*" : ""}Team 01: ${
            usersList.team01Score
          }`}</Text>
          {usersList.team01.map((user, index) => (
            <Text
              key={index + user}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "95px",
                marginBottom: "4px",
              }}
            >
              {user}
            </Text>
          ))}
        </Stack>
        <Stack>
          <Text
            sx={{
              marginBottom: "4px",
              fontWeight: usersList.userTeam === 2 ? "bold" : "normal",
            }}
          >{`${usersList.userTeam === 2 ? "*" : ""}Team 02: ${
            usersList.team02Score
          } `}</Text>
          {usersList.team02.map((user, index) => (
            <Text
              key={user + index}
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                maxWidth: "95px",
                marginBottom: "4px",
              }}
            >
              {user}
            </Text>
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
