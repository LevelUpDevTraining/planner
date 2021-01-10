import Layout from 'components/Layout';
import { useFirebaseUser } from 'hooks/useFirebaseUser';

export default function Home() {
  const [user] = useFirebaseUser();
  return <Layout>Hello World {user?.displayName}</Layout>;
}
