import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import defaultTheme from './default';
import darkTheme from './dark';
import { useDarkMode } from 'hooks/useDarkMode';

interface Props {
  children: React.ReactNode;
}

export default function Theme(props: Props) {
  const { children } = props;
  const [darkMode] = useDarkMode();
  const theme = darkMode ? darkTheme : defaultTheme;
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
