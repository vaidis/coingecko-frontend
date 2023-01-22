import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

const Footer = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid
      className="footer"
      container
      spacing={0}
      direction="column"
      sx={{ background: theme.palette.background.paper, mt: 8, mb: 0, pt: 8, pb: 8 }}
      alignItems="center"
    >
      <Grid maxWidth="md" sx={{pl: 2, pr: 2}}>
        <Typography variant='caption'>
          All content provided herein our website, hyperlinked sites, associated applications,
          forums, blogs, social media accounts and other platforms (“Site”) is for your
          general information only, procured from third party sources.
          We make no warranties of any kind in relation to our content,
          including but not limited to accuracy and updatedness.
          No part of the content that we provide constitutes financial advice,
          legal advice or any other form of advice meant for your specific reliance for any purpose.
        </Typography>
      </Grid>
    </Grid>
  )
}

export default Footer;
