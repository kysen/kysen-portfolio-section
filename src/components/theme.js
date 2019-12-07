import { createMuiTheme } from '@material-ui/core/styles';
import teal from "@material-ui/core/colors/teal"
import grey from "@material-ui/core/colors/grey"

const theme = createMuiTheme({
    palette: {
        primary: {
            light: teal[300],
            main: teal[500],
            dark: teal[700],
            contrastText: '#fff',
            contrastTextDark: '#000',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
        text: {
            primary: "black"
        },
        background: {
            light: grey[600],
            main: grey[800],
            dark: grey[900]
        }
    },
    fonts: {
        title: {
            fontSize: 30
        }
    }

})


export default theme;
