import strings from 'utils/localization';
import moment from 'moment';
import { atom, useRecoilState, RecoilState } from 'recoil';
import localStorageEffect from 'hooks/localStorageEffect';

const languageEffect = ({ setSelf, onSet, trigger }: any) => {
  if (trigger === 'get') {
    setSelf((value: string) => {
      strings.setLanguage(value);
      moment.locale(value);
      return value;
    });
  }
  onSet((newValue: string) => {
    strings.setLanguage(newValue);
    moment.locale(newValue);
  });
};

export const languageState = atom({
  key: 'languageState',
  default: 'en',
  effects_UNSTABLE: [localStorageEffect('planner:language'), languageEffect],
}) as RecoilState<string>;

export function useLanguage() {
  const [language, setLanguage] = useRecoilState<string>(languageState);
  return { language, setLanguage, strings };
}
