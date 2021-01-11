import React, { useState } from 'react';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Box from '@material-ui/core/Box';
import DarkModeToggle from './DarkModeToggle';
import LanguageSelect from './LanguageSelect';
import LogoutButton from './LogoutButton';
import { useLanguage } from 'hooks/useLanguage';

export default function Drawer() {
  const [open, setOpen] = useState<boolean>(false);
  const { strings } = useLanguage();
  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={() => setOpen(!open)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor={'left'}
        open={open}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
      >
        <Box p={2} width={250}>
          <Box pb={2}>
            <Typography component="h5" variant="h6" align="center">
              {strings.settings}
            </Typography>
          </Box>
          <Divider />
          <Box pt={2}>
            <DarkModeToggle />
          </Box>
          <Box pt={2} pb={4}>
            <LanguageSelect />
          </Box>
          <Divider />
          <Box py={4} textAlign="center">
            <LogoutButton />
          </Box>
        </Box>
      </SwipeableDrawer>
    </>
  );
}
