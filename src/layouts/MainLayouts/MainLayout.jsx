import { Box } from '@mui/material';
import Header from './Header.jsx';

const MainLayout = ({children}) => {
  return (
    <Box>
      <Header/>
      <Box sx={{}}>{children}</Box>
    </Box>
  );
};

export default MainLayout;
