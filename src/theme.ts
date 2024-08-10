import { createTheme } from "@mui/material";
import { flowersLikeEyes } from "./values/colors";

export default createTheme({
    palette: {
        primary: {
            main: flowersLikeEyes.violet,
        },
        secondary: {
            main: flowersLikeEyes.purple,
        },
    },

});
