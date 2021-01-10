import { atom, useRecoilState, RecoilState } from 'recoil';
import localStorageEffect from 'hooks/localStorageEffect';

export const darkModeState = atom({
  key: 'darkModeState',
  default: false,
  effects_UNSTABLE: [localStorageEffect('planner:darkMode')],
}) as RecoilState<boolean>;

export function useDarkMode() {
  return useRecoilState<boolean>(darkModeState);
}
