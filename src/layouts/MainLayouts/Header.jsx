import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import DrawerHeader from '../../components/HeaderComponents/CustomDrawerHeader.jsx';
import AppBar from '../../components/HeaderComponents/CustomAppBar.jsx';
import { Link } from '@mui/material';

const drawerWidth = 240;

const Header = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar position='sticky' open={open}>
        <Toolbar>
          <IconButton
            color='inherit'
            aria-label='open drawer'
            onClick={handleDrawerOpen}
            edge='start'
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' noWrap component='div' sx={{ ml: 'auto' }}>
            Media encyclopedia
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant='persistent'
        anchor='left'
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <Link component='button' underline='hover' onClick={() => {
          navigate('/content');
        }}>Content</Link>
        <Link component='button' underline='hover' onClick={() => {
          navigate('/glossary');
        }}>Glossary</Link>
        <Link component='button' underline='hover' onClick={() => {
          navigate('/references');
        }}>References</Link>
      </Drawer>
    </Box>
  );
};

export default Header;