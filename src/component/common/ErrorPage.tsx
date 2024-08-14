import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { cupcakeIcon } from "../../values/icon";
import ErrorProps from "../../values/interface/ErrorProps";
import { homePath } from "../../values/paths";
import { menuLabel } from "../../values/string";
import { centerItem } from "../../values/stylingValues";
import CenterBox from "./CenterBox";
import CenterContainer from "./CenterContainer";

interface Props {
  error: ErrorProps;
}

const ErrorPage = ({ error }: Props) => {
  return (
    <Box sx={{ ...centerItem }}>
      <CenterContainer>
        <CenterBox>
          <Box>
            <Box component="img" src={cupcakeIcon} alt="Error Icon" sx={{ width: "100px", height: "100px" }} />
            <Typography variant="h4" mb="20px">
              {error.title}
            </Typography>
            <Typography variant="h6" mb="20px">
              {error.description}
            </Typography>
            <Link to={homePath} style={{ textDecoration: "none" }}>
              <Button variant="contained" color="secondary">
                {menuLabel}
              </Button>
            </Link>
          </Box>
        </CenterBox>
      </CenterContainer>
    </Box>
  );
};

export default ErrorPage;
{
  /* <Box>
<Typography variant="h1">Something went wrong!</Typography>
<Typography variant="body1">Sorry, we couldn't find the page you were looking for.</Typography>
</Box> */
}
