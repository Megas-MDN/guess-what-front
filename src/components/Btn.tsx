import { Button, SxProps } from "@mui/material";

interface IProps {
  sx?: SxProps;
  onClick?: () => void;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

export const Btn = ({
  sx = {},
  onClick = () => {},
  children,
  ...props
}: IProps) => {
  return (
    <Button
      onClick={onClick}
      sx={{
        width: "fit-content",
        height: "fit-content",
        minWidth: "0px",
        minHeight: "0px",
        color: "#FFF",
        textTransform: "none",
        backgroundColor: "#08A8BD",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.05)",
        display: "flex",
        gap: "10px",
        padding: "0px",
        diplay: "flex",
        textAlign: "center",
        justifyContent: "center",
        flexDirection: "column",
        "&:hover": {
          backgroundColor: "#08A8BDd0",
        },
        ":disabled": {
          backgroundColor: "gray",
          opacity: 0.5,
        },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};
