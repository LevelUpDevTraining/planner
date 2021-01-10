import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <div>
      <div>Header</div>
      <Container>
        <Grid container justify="center" alignItems="center">
          <Grid item>{children}</Grid>
        </Grid>
      </Container>
    </div>
  );
}
