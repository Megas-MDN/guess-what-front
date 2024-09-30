import { Stack, TextField } from "@mui/material";
import { useState } from "react";
import { Btn } from "../../../components/Btn";

export const DecriptionWorField = ({
  onClick,
}: {
  onClick: (str: string) => void;
}) => {
  const [description, setDescription] = useState("");

  const hadleClick = () => {
    onClick(description);
    setDescription("");
  };

  return (
    <Stack
      sx={{
        width: "45%",
        gap: "8px",
        alignItems: "flex-end",
        "@media (max-width: 650px)": {
          width: "100%",
          alignItems: "flex-end",
          paddingX: "8px",
        },
      }}
    >
      <TextField
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        type={"text"}
        multiline
        rows={5}
        sx={{
          width: "100%",
          maxWidth: "500px",
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
        placeholder={"Describe the word"}
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
      <Stack
        sx={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Btn
          disabled={description === ""}
          onClick={() => hadleClick()}
          sx={{
            padding: "10px",
            paddingX: "20px",
          }}
        >
          Send
        </Btn>
      </Stack>
    </Stack>
  );
};
