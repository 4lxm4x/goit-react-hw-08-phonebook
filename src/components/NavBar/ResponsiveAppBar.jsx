import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import useAuth from '../Hooks/useAuth';
import RegisterForm from 'components/Modal/Modal';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';
import { Outlet, Link } from 'react-router-dom';
import { Badge } from '@mui/material';
// import { Link } from '@mui/material';

function ResponsiveAppBar() {
  const dispatch = useDispatch();
  const user = useAuth();
  const userFirstName = () => {
    const trimmedName = user.name.trim();
    const spaceIndex = trimmedName.search(' ');
    return trimmedName.slice(0, spaceIndex);
  };

  // console.log('🚀 ~ ResponsiveAppBar ~ user:', user);
  const pages = user.isLoggedIn ? ['Add new contact'] : [];
  const [isModalOpen, setModalOpen] = React.useState(false);
  // console.log('🚀 ~ ResponsiveAppBar ~ isModalOpen:', isModalOpen);

  const settings = user.isLoggedIn
    ? ['Account', 'Logout']
    : ['Account', 'Login', 'Register'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = event => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = event => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleNavMenuClick = () => {
    handleCloseNavMenu();
  };

  const handleCloseUserMenu = e => {
    // console.dir('current', e.currentTarget);
    setAnchorElUser(null);
  };

  const handleModalClose = state => {
    console.log('modalIsClosed');
    setModalOpen(state);
  };

  const handleMenuItemClick = event => {
    if (
      event.currentTarget.id === 'Register' ||
      event.currentTarget.id === 'Login'
    ) {
      setModalOpen(event.currentTarget.id);
      handleCloseUserMenu();
    }
    if (event.currentTarget.id === 'Logout') {
      dispatch(logout());
      handleCloseUserMenu();
    }
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <ContactPhoneIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />

            <Typography
              variant="h6"
              noWrap
              // component="a"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                PHONEBOOK
              </Link>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}
              >
                {/* ============================== */}
                {pages.map(page => (
                  <MenuItem key={page} onClick={handleNavMenuClick}>
                    <Link
                      to="/add"
                      style={{ color: 'inherit', textDecoration: 'none' }}
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <ContactPhoneIcon
                sx={{
                  display: { xs: 'flex', md: 'none' },
                  mr: 1,
                  pt: 2,
                }}
              />
              <Link
                to="/"
                style={{
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  variant="h3"
                  noWrap
                  // component="a"
                  sx={{
                    mr: 2,
                    display: { xs: 'flex', md: 'none' },
                    flexGrow: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                  }}
                >
                  PHONEBOOK
                </Typography>
              </Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Link to="/add" style={{ textDecoration: 'none' }}>
                {pages.map(page => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                  >
                    {page}
                  </Button>
                ))}
              </Link>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Badge
                    variant="string"
                    color="white"
                    max={10}
                    badgeContent={userFirstName()}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                  >
                    <Avatar alt={user.name} src="/static/images/avatar/2.jpg" />
                  </Badge>
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem
                    id={setting}
                    key={setting}
                    onClick={handleMenuItemClick}
                  >
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        {
          <RegisterForm
            handleModalOpen={isModalOpen}
            handleModalClose={handleModalClose}
          />
        }
      </AppBar>
      <Outlet />
    </>
  );
}
export default ResponsiveAppBar;
