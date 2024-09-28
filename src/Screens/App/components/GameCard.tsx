import { Stack } from "@mui/material";
import { Btn } from "../../../components/Btn";
import { Text } from "../../../components/Text";
import { TagStatus } from "../../../components/TagStatus";
import { TeamLabel } from "./TeamLabel";
import { useNavigate } from "react-router-dom";

export type GameStatus = "WAITING" | "IN PROGRESS" | "FINISHED";

export interface IGameCardProps {
  status: "WAITING" | "IN PROGRESS" | "FINISHED";
  round: number;
  team01: number;
  team02: number;
  roomId: string;
  whoWins?: 1 | 2 | null;
  roundWinner?: number | null;
  roundLoser?: number | null;
}

export const GameCard = ({
  status,
  round,
  team01,
  team02,
  roomId,
  whoWins,
  roundWinner,
  roundLoser,
}: IGameCardProps) => {
  const navigate = useNavigate();
  const full = Boolean(team01 === 4 && team02 === 4);
  const oneNum =
    status === "FINISHED" ? (whoWins === 1 ? roundWinner : roundLoser) : null;
  const twoNum =
    status === "FINISHED" ? (whoWins === 2 ? roundWinner : roundLoser) : null;

  const handleClick = () => {
    console.log(roomId);
    navigate(`/create`);
  };
  return (
    <Stack
      flexDirection={"row"}
      sx={{
        height: "200px",
        minHeight: "200px",
        borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
        paddingBottom: "8px",
      }}
    >
      <Stack
        sx={{
          width: "75%",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
          borderRadius: "8px",
          paddingX: "8px",
          justifyContent: "space-between",
          paddingY: "8px",
          backgroundColor: "#EFEFEF",
        }}
      >
        <Stack>
          <Stack
            sx={{
              padding: "4px",
            }}
            flexDirection={"row"}
            justifyContent={"space-between"}
          >
            <Text>{`Status: ${status}`}</Text>
            <TagStatus
              status={
                status === "IN PROGRESS"
                  ? team01 === 4 && team02 === 4
                    ? "FULL"
                    : status
                  : status
              }
            />
          </Stack>
          <Stack
            sx={{
              paddingX: "4px",
              borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
              paddingBottom: "4px",
            }}
          >
            <Text>{`Round: ${round}`}</Text>
          </Stack>
        </Stack>
        <Stack
          sx={{
            flexDirection: "row",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <TeamLabel
            isFinished={Boolean(status === "FINISHED")}
            number={oneNum ?? team01}
            team={1}
            isWinner={Boolean(whoWins === 1)}
          />
          <TeamLabel
            isFinished={Boolean(status === "FINISHED")}
            number={twoNum ?? team02}
            team={2}
            isWinner={Boolean(whoWins === 2)}
          />
        </Stack>
      </Stack>
      <Stack
        sx={{
          width: "25%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {Boolean(status !== "FINISHED") && (
          <Btn
            onClick={handleClick}
            disabled={full}
            sx={{
              padding: "5px",
              paddingX: "10px",
            }}
          >
            {`${full ? "Full" : "Join"}`}
          </Btn>
        )}
      </Stack>
    </Stack>
  );
};
