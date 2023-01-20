import { Link as RouteLink } from "react-router-dom";
import { useTheme } from '@mui/material';
import { styled } from '@mui/system';

export const StyledLink = styled(RouteLink)(({theme}) => ({
    color: theme.palette.text.primary,
    textDecoration: 'none',
    ":visited": {color: theme.palette.text.primary},
    ":hover": {color: theme.palette.action.hover},
    ":focus": {color: theme.palette.action.focus},
    ":active": {color: theme.palette.action.active},
}));

const Link = (props: any): JSX.Element => {
    const theme = useTheme();
    return  <StyledLink to={props.to}>{props.title}</StyledLink>
}
export default Link;
