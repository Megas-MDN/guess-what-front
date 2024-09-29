import { SxProps, Stack, Backdrop } from "@mui/material";

interface Props {
  sx?: SxProps;
  children?: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}
export const Screen = ({
  sx = {},
  children,
  isLoading = false,
  ...props
}: Props) => {
  return (
    <>
      {isLoading && <Backdrop open={isLoading} />}
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
    </>
  );
};
