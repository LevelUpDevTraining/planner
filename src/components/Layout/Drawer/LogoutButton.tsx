import Button from '@material-ui/core/Button';
import { logout } from 'hooks/useFirebaseUser';
import { useLanguage } from 'hooks/useLanguage';

export default function LogoutButton() {
  const { strings } = useLanguage();
  return (
    <Button variant="contained" color="primary" onClick={() => logout()}>
      {strings.logout}
    </Button>
  );
}
