import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import { useLanguage } from 'hooks/useLanguage';

export default function LanguageSelect() {
  const { language, setLanguage, strings } = useLanguage();
  return (
    <FormControl style={{ width: '100%' }}>
      <InputLabel id="language-select">{strings.language}</InputLabel>
      <Select
        labelId="language-select"
        value={language}
        onChange={(
          event: React.ChangeEvent<{
            name?: string | undefined;
            value: unknown;
          }>
        ) => setLanguage(String(event.target.value))}
        input={<Input name="language" id="language" />}
      >
        <MenuItem value={'en'}>English</MenuItem>
        <MenuItem value={'ja'}>日本語</MenuItem>
      </Select>
    </FormControl>
  );
}
