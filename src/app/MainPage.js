import {
  Box,
  Toolbar,
} from "@mui/material";

function MainPage(props) {
  return (
    <Box
    id={props.id}
    component="main"
    sx={{
      backgroundColor: (theme) =>
        theme.palette.mode === 'light'
          ? theme.palette.grey[100]
          : theme.palette.grey[900],
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
      padding: '0 24px',
    }}
  >
    <Toolbar />
    {props.children}
  </Box>
  );
}

export default MainPage;