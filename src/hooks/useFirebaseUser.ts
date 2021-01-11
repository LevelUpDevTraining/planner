import { useState, useEffect } from 'react';
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
  const [loading, setLoading] = useState<boolean>(true);
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
          setUser(null);
        }
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, [user, setUser]);
  return [loading, setLoading];
}

export function login() {
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: 'select_account',
  });
  firebase.auth().signInWithRedirect(provider);
}

export async function logout() {
  await firebase.auth().signOut();
  window.location.href = '/';
}
