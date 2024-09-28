import { Text } from "../../components/Text";
import { Screen } from "../../components/Screen";
import { Btn } from "../../components/Btn";
import { Stack } from "@mui/material";
import { GameList } from "./components/GameList";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  return (
    <Screen>
      <Stack
        sx={{
          paddingY: "40px",
        }}
      >
        <Btn
          onClick={() => navigate("/create")}
          sx={{
            margin: "0 auto",
            padding: "10px",
            paddingX: "20px",
          }}
        >
          <Text
            sx={{
              color: "white",
            }}
          >
            New Game
          </Text>
        </Btn>
      </Stack>
      <GameList />
    </Screen>
  );
}

export default App;
