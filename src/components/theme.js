import { createMuiTheme } from "@material-ui/core/styles";
import teal from "@material-ui/core/colors/teal";
import grey from "@material-ui/core/colors/grey";

const theme = createMuiTheme({
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
      contrastText: "#fff",
      contrastTextDark: "#000"
    },
    common: {
      black: "red"
    },

    text: {
      primary: {
        main: "black"
      }
    },
    background: {
      default: grey[900],
      paper: grey[800]
    }
  },
  fonts: {
    title: {
      fontSize: 30
    }
  }
});

export default theme;
