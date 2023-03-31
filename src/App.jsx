import { Stack, Button } from '@mui/material';

function App() {
  return (
    <Stack
      sx={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Button variant="contained" color="primary">
        Button 1
      </Button>
      <Button variant="contained" color="secondary">
        Button 2
      </Button>
      <Button variant="contained" color="tertiary">
        Button 3
      </Button>
      <Button variant="contained" color="quaternary">
        Button 4
      </Button>
    </Stack>
  );
}

export default App;
