import { Box } from "@mui/material";
import { red, white } from "../../values/colors";
import { errorMessage } from "../../values/string";

interface Props {
  isError: boolean;
}

const ErrorPrompt = ({ isError }: Props) => {
  return (
    isError && (
      <Box
        sx={{
          mb: "30px",
          p: "10px",
          bgcolor: red,
          color: white,
          textAlign: "center",
          borderRadius: "20px",
        }}
      >
        {errorMessage}
      </Box>
    )
  );
};

export default ErrorPrompt;
