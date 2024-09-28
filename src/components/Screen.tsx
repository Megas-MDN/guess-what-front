import { SxProps, Stack } from "@mui/material";

interface Props {
  sx?: SxProps;
  children?: React.ReactNode;
  className?: string;
}
export const Screen = ({ sx = {}, children, ...props }: Props) => {
  return (
    <Stack
      sx={{
        height: "100vh",
        width: "100vw",
        backgroundColor: "#DADADA",
        overflow: "hidden",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Stack>
  );
};
