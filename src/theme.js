import { createTheme } from '@mui/material/styles';

// Light theme
const theme = createTheme({
    /*
    palette: {
    type: 'light',
    primary: {
      main: '#f59700',
    },
    secondary: {
      main: '#8a9ef7',
    },
    background: {
      default: '#ffffff',
      paper: '#ececec',
    },
    text: {
      primary: 'rgba(0,0,0,0.98)',
      secondary: 'rgba(189,189,189,0.54)',
      disabled: 'rgba(57,57,57,0.38)',
    },
    warning: {
      main: '#ffe000',
    },
  },*/
    palette: {
        type: 'dark',
        primary: {
            main: '#f59700',
        },
        secondary: {
            main: '#8a9ef7',
        },
        background: {
            default: '#000000',
            paper: '#3f3f3f',
        },
        text: {
            primary: 'rgba(255,255,255,0.98)',
            secondary: 'rgba(189,189,189,0.54)',
            disabled: 'rgba(57,57,57,0.38)',
        },
        warning: {
            main: '#ffe000',
        },
    }, 
});

export default theme;
