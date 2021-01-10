import { createMuiTheme } from '@material-ui/core/styles';
import blueGrey from '@material-ui/core/colors/blueGrey';
const theme = createMuiTheme({
  palette: {
    type: 'light',
    primary: {
      main: blueGrey[500],
    },
  },
});

export default theme;
