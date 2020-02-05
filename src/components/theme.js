import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

let theme = createMuiTheme({
  palette: {
    primary: {
      light: "#fafafa",
      main: "#eeeeee",
      dark: "#bdbdbd",
      contrastText: "#000"
    },
    secondary: {
      light: teal[200],
      main: teal[500],
      dark: teal[800],
      contrastText: "#fff"
    },
    // background: {
    //   default: grey[900],
    //   paper: grey[800]
    // },
    type: "dark"
  }
});

theme = responsiveFontSizes(theme);

export default theme;
