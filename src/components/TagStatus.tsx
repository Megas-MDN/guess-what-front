import { Stack } from "@mui/material";

export const TagStatus = ({
  status,
}: {
  status: "FULL" | "WAITING" | "IN PROGRESS" | "FINISHED";
}) => {
  const hashColor = {
    WAITING: "#f08c00",
    "IN PROGRESS": "#2f9e44",
    FINISHED: "grey",
    FULL: "#ff2400",
  };
  return (
    <Stack
      sx={{
        backgroundColor: hashColor[status],
        padding: "5px",
        borderRadius: "100%",
        width: "20px",
        height: "20px",
      }}
    ></Stack>
  );
};
