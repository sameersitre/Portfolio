import React from 'react'
import styles from './appbar.module.css';
import PropTypes from 'prop-types'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import profileimage from '../../assets/profileimage.png'
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
function ElevationScroll(props) {
  const { children, window } = props;

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function Appbar(props) {
  const pages = ['Home', 'About', 'Portfolio'];
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <React.Fragment>
      <Box sx={{ flexGrow: 1, color: '#000000' }}>
        <AppBar
          className={styles.blurBar}
          style={{
            boxShadow: 'none',
            backgroundColor: 'rgb(255 255 255 / 60%)'
            // background: 'linear-gradient(to top, transparent 2%, rgb(255 255 255 / 100%) 100%)',
          }}
        >
          <Toolbar style={{ color: '#000000' }}>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <Avatar alt="Remy Sharp" src={profileimage} />

            </IconButton>
            <Typography variant="h" width={80} >
              Home
            </Typography>
            <Typography variant="h" width={80} >
              About
            </Typography>
            <Typography variant="h" width={80} sx={{ flexGrow: 1 }} >
              Portfolio
            </Typography>
            <Button color="inherit">Resume</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </React.Fragment>
  )
}

Appbar.propTypes = {

}

export default Appbar

