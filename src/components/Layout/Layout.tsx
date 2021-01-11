import AppBar from './AppBar';

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;
  return (
    <>
      <AppBar />
      {children}
    </>
  );
}
