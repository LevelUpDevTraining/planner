import Backdrop from '@material-ui/core/Backdrop';
import CircularProgress from '@material-ui/core/CircularProgress';
import { RecoilRoot } from 'recoil';
import Theme from 'components/Theme';
import Router from 'components/Router';
import { useFirebaseAuthEffect } from 'hooks/useFirebaseUser';

function FirebaseApp() {
  const [loading] = useFirebaseAuthEffect();
  if (loading) {
    return (
      <Theme>
        <Backdrop open={true}>
          <CircularProgress color="inherit" />
        </Backdrop>
      </Theme>
    );
  }
  return (
    <Theme>
      <Router />
    </Theme>
  );
}

export default function App() {
  return (
    <RecoilRoot>
      <FirebaseApp />
    </RecoilRoot>
  );
}
