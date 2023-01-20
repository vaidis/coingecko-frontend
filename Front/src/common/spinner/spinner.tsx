import { useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { keyframes } from '@mui/system';

const spin = keyframes`
  from {transform: rotate(0deg)}
  to {transform: rotate(360deg)}
`;

const Cycle = styled("div")(({theme}) => ({
  border: `10px solid ${theme.palette.mode === 'light' ? '#f1f1f1' : '#444444'}`,
  borderTop: `10px solid ${theme.palette.primary.main}`,
  borderRadius: 50,
  width: 80,
  height: 80,
  animation: `${spin} 1.2s infinite ease`
}));

const Center = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 40,
});

const Spinner = () => {
  const theme = useTheme();
  return <Center><Cycle /></Center>
}

export default Spinner;
