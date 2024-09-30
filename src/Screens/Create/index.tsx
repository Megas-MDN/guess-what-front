import { Stack, TextField } from "@mui/material";
import { Screen } from "../../components/Screen";
import { Btn } from "../../components/Btn";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../Stores/useUserStore";
import { useGameStateRoom } from "../../Stores/useGameRoomState";
import { useUser } from "../../hooks/useUser";
import { useGameRoom } from "../../hooks/useGameRoom";
import { useResetAll } from "../../hooks/useResetAll";

export const Create = () => {
  const { userName: name, setUserName: setName, setTeam } = useUserStore();
  const { isLoading, createUserAndGame } = useUser();
  const { roomId } = useGameStateRoom();
  const { joinRoom } = useGameRoom();
  const navgate = useNavigate();
  const reset = useResetAll();

  const hadleClick = async (team: 1 | 2) => {
    setTeam(team);
    if (!roomId) {
      const res = await createUserAndGame({ userName: name, team });
      if (!res) {
        reset();
        return navgate("/");
      }
      return navgate("/game");
    }
    const res = await joinRoom({ userName: name, team, roomId });
    if (!res) {
      reset();
      return navgate("/");
    }
    return navgate("/game");
  };
  return (
    <Screen isLoading={isLoading}>
      <Stack
        sx={{
          alignItems: "center",
          margin: "auto 0",
          gap: "16px",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            alignItems: "center",
          }}
        >
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            type={"text"}
            sx={{
              width: "100%",
              maxWidth: "300px",
              borderRadius: "4px",
              backgroundColor: "#FAFAFA",
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              ".MuiInputBase-input": {
                padding: "4px 8px",
                paddingLeft: "16px",
              },
            }}
            id={`outlined-adornment-name`}
            placeholder={"Typer your name"}
            aria-describedby={`"outlined-name-helper-text"`}
            slotProps={{
              input: {
                sx: {
                  fontSize: "16px",
                  outline: "none",
                  border: "none",
                  fontWeight: "500",
                  input: {
                    height: "40px",
                  },
                },
              },
            }}
          />
        </Stack>
        <Stack
          flexDirection={"row"}
          sx={{
            gap: "20px",
          }}
        >
          <Btn
            disabled={name === ""}
            onClick={() => hadleClick(1)}
            sx={{
              padding: "10px",
              paddingX: "20px",
            }}
          >
            Team 01
          </Btn>
          <Btn
            disabled={name === ""}
            onClick={() => hadleClick(2)}
            sx={{
              padding: "10px",
              paddingX: "20px",
            }}
          >
            Team 02
          </Btn>
        </Stack>
      </Stack>
    </Screen>
  );
};
