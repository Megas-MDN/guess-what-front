import { Stack } from "@mui/material";
import { Text } from "../../../components/Text";

interface Props {
  isFinished?: boolean;
  isWinner?: boolean;
  number: number;
  team: 1 | 2;
}

export const TeamLabel = ({
  isFinished = false,
  isWinner = false,
  number,
  team,
}: Props) => {
  return (
    <Stack sx={{}}>
      <Text
        sx={{
          textAlign: "center",
        }}
      >{`Team 0${team}${
        isFinished ? (isWinner ? " WIN" : " LOSE") : ""
      }`}</Text>
      <Stack
        sx={{
          padding: "16px",
          borderRadius: "16px",
          alignContent: "center",
          justifyContent: "center",
          border: "1px solid rgba(0, 0, 0, 0.05)",
          boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Text
          sx={{
            textAlign: "center",
          }}
        >{`${
          isFinished
            ? number > 1
              ? `Rounds ${number}`
              : `Round ${number}`
            : number > 1
            ? `Players ${number}`
            : `Player ${number}`
        }`}</Text>
      </Stack>
    </Stack>
  );
};
