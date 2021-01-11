import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { useDarkMode } from 'hooks/useDarkMode';
import { useLanguage } from 'hooks/useLanguage';

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useDarkMode();
  const { strings } = useLanguage();
  return (
    <FormControlLabel
      control={
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
      }
      label={strings.darkMode}
    />
  );
}
