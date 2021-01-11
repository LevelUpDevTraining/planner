import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Drawer from '../Drawer';
import User from './User';
import { useLanguage } from 'hooks/useLanguage';
import { Link } from 'react-router-dom';

export default function AppBarLayout() {
  const { strings } = useLanguage();
  return (
    <Box flexGrow={1}>
      <AppBar position="static">
        <Toolbar>
          <Box mr={2}>
            <Drawer />
          </Box>
          <Box flexGrow={1}>
            <Link
              to="/"
              style={{
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              <Typography variant="h6">{strings.title}</Typography>
            </Link>
          </Box>
          <User />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
