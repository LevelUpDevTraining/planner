import { useEffect } from 'react';
import { firebase } from 'services/Firebase';
import { atom, useRecoilState, RecoilState } from 'recoil';

interface FirebaseUser {
  uid: string;
  displayName: string | null;
  email: string | null;
}

export const userState = atom({
  key: 'userState',
  default: null,
}) as RecoilState<FirebaseUser | null>;

export function useFirebaseUser() {
  return useRecoilState<FirebaseUser | null>(userState);
}

export function useFirebaseAuthEffect() {
  const [user, setUser] = useFirebaseUser();
  useEffect(() => {
    if (!user) {
      firebase.auth().onAuthStateChanged((User) => {
        if (User) {
          const data = {
            uid: User.uid,
            displayName: User.displayName,
            email: User.email,
          };
          setUser(data);
        } else {
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithRedirect(provider);
        }
      });
    }
  }, [user, setUser]);
}
