import { SxProps, Typography } from "@mui/material";

interface Props {
  sx?: SxProps;
  children?: React.ReactNode;
  className?: string;
  fontWeight?:
    | number
    | "inherit"
    | "bold"
    | "bolder"
    | "lighter"
    | "initial"
    | "normal"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | undefined;
}

export const Text = ({ sx, children, ...props }: Props) => {
  return (
    <Typography
      sx={{
        color: "black",
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
};
