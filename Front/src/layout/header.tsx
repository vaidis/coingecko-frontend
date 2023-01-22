import { Link as RouterLink } from "react-router-dom";
import Link from '@mui/material/Link';

import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import { useSelector, useDispatch } from "react-redux";
import { toggleModeAction } from "../themeSlice";

import { IThemeState } from '../themeSlice'
import { RootState } from '../store';

const Header = (): JSX.Element => {

  const dispatch = useDispatch();
  const theme: IThemeState = useSelector((state: RootState ) => state.theme);
  const toggleModeHander = () => dispatch(toggleModeAction())

  return (
    <Box style={{ marginBottom: 60 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link sx={{ color: "white" }} component={RouterLink} to="/">CoinGecko Data</Link>
          </Typography>
          <IconButton sx={{ ml: 1 }} onClick={toggleModeHander} color="inherit">
            {theme.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
