import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { login, useFirebaseUser } from 'hooks/useFirebaseUser';
import { useLanguage } from 'hooks/useLanguage';
import { useHistory } from 'react-router-dom';

export default function User() {
  const [user] = useFirebaseUser();
  const { strings } = useLanguage();
  const history = useHistory();
  if (!user) {
    return (
      <Button color="inherit" onClick={() => login()}>
        {strings.login}
      </Button>
    );
  } else {
    return (
      <>
        <IconButton
          edge="end"
          aria-label={strings.profile}
          aria-haspopup="true"
          color="inherit"
          onClick={() => history.push('/profile')}
        >
          <AccountCircle />
        </IconButton>
        <Box pl={1}>{user.displayName}</Box>
      </>
    );
  }
}
