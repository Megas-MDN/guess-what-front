import { Stack } from "@mui/material";
import { Text } from "../../../components/Text";
import { GuessInputSend } from "./GuessInputSend";
import { Chat } from "./Chat";
import { DecriptionWorField } from "./DecriptionWorField";

interface Props {
  word: string;
  isWordDiller: boolean;
  onSend: (str: string) => void;
  onSendDescription: (str: string) => void;
}
export const GameContainer = ({
  word,
  isWordDiller,
  onSend,
  onSendDescription,
}: Props) => {
  return (
    <Stack
      sx={{
        width: "100%",
        maxWidth: "900px",
        margin: "0 auto",
        flex: 1,
      }}
    >
      <Text
        sx={{
          textAlign: "left",
          fontSize: "24px",
          paddingLeft: "8px",
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          "@media (max-width: 470px)": {
            maxWidth: "150px",
            flexDirection: "column",
          },
        }}
      >
        {`${isWordDiller ? `The word id: ` : "Guess the word"}`}
        {Boolean(word && isWordDiller) && (
          <Text
            sx={{
              marginLeft: "8px",
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            {word}
          </Text>
        )}
      </Text>
      <Stack
        sx={{
          maxHeight: "65vh",
          marginTop: "100px",
          flexDirection: "row",
          justifyContent: "space-between",
          gap: "8px",
          "@media (max-width: 650px)": {
            flexDirection: "column-reverse",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "60px",
          },
          "@media (max-width: 470px)": {
            marginTop: "60px",
          },
        }}
      >
        {isWordDiller ? (
          <DecriptionWorField onClick={onSendDescription} />
        ) : (
          <GuessInputSend onClick={onSend} />
        )}

        <Chat />
      </Stack>
    </Stack>
  );
};
