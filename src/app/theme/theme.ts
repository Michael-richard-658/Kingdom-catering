import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', // blue
    },
    secondary: {
      main: '#dc004e', // pink/red
    },
    background: {
      default: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans, sans-serif',
    
  },
});
export default theme;