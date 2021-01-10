import { RecoilRoot } from 'recoil';
import Theme from 'components/Theme';
import Router from 'components/Router';
import { useFirebaseAuthEffect } from 'hooks/useFirebaseUser';

function FirebaseApp() {
  useFirebaseAuthEffect();
  return <Router />;
}

export default function App() {
  return (
    <RecoilRoot>
      <Theme>
        <FirebaseApp />
      </Theme>
    </RecoilRoot>
  );
}
