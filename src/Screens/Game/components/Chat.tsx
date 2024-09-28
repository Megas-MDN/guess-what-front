import { Stack } from "@mui/material";
import { Text } from "../../../components/Text";

export const Chat = () => {
  return (
    <Stack
      sx={{
        width: "50%",
        height: "500px",
        "@media (max-width: 650px)": {
          width: "100%",
        },
      }}
    >
      <Text
        sx={{
          textAlign: "left",
          fontWeight: "bold",
          marginBottom: "8px",
          fontSize: "18px",
        }}
      >
        Chat
      </Text>
      <Stack
        sx={{
          width: "98%",
          margin: "0 auto",
          flex: 1,
          maxHeight: "55vh",
          overflow: "hidden",
          borderRadius: "8px",
        }}
      >
        <Stack
          sx={{
            width: "100%",
            height: "18vh",
            overflowY: "auto",
            background: "#FAFAFA",
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "8px",
            zIndex: 10,
          }}
        ></Stack>
        <Stack
          sx={{
            borderRadius: "8px",

            width: "100%",
            height: "30vh",
            overflowY: "auto",
            border: "1px solid rgba(0, 0, 0, 0.1)",
          }}
        ></Stack>
      </Stack>
    </Stack>
  );
};
