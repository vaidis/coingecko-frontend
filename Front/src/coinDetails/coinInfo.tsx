import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import GitHubIcon from '@mui/icons-material/GitHub';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkIcon from '@mui/icons-material/Link';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { ICoinInfoProps } from './coinDetails-types'

const CoinInfo = (props: ICoinInfoProps): JSX.Element => {
  const { data } = props;
  console.log("CoinInfo props.data: ", data)

  return (
    <Box>
      <Typography variant="h2">Info</Typography>
      <Grid container justifyContent="flex-start">
        <Grid item xs={12}>
          Rank: #{data.market_cap_rank}
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          Current price: ${data.tickers[0].converted_last.usd}
        </Grid>
        <Grid item xs={12} style={{ marginTop: 20 }}>
          Homepage: <Link target="_blank" href={data.links.homepage[0]}>{data.links.homepage[0]}</Link>
        </Grid>
        <Grid item style={{ marginTop: 20 }}>
          Votes: {data.sentiment_votes_up_percentage}%
          <ThumbUpIcon style={{ color: '#4eaf0a', fontSize: 16, margin: '0 5' }} />
          <ThumbDownIcon style={{ color: '#f15281', fontSize: 16, margin: '0 5' }} />
          {data.sentiment_votes_down_percentage}%
        </Grid>
      </Grid>
      <Grid container justifyContent="flex-start" style={{ marginTop: 30, marginBottom: 30 }}>
        {data.links.subreddit_url &&
          <Button style={{ marginRight: 10, marginTop: 10 }} variant="outlined" startIcon={<RedditIcon />} href={data.links.subreddit_url}>
            Reddit
          </Button>
        }
        {data.links.twitter_screen_name &&
          <Button style={{ marginRight: 10, marginTop: 10 }} variant="outlined" startIcon={<TwitterIcon />} href={`https://twitter.com/${data.links.twitter_screen_name}`}>
            Twitter
          </Button>
        }
        {
          Object.entries(data.links.chat_url).map(
            ([key, value]) => {
              if (Boolean(value)) {
                const domain = new URL(String(value));
                const label = domain.hostname.split(".")[0]
                return (
                  <Button
                    key={key}
                    style={{ marginRight: 10, marginTop: 10 }}
                    variant="outlined"
                    href={String(value)}
                    startIcon={<LinkIcon />}
                  >
                    {label}
                  </Button>
                )
              }
            }
          )
        }
      </Grid>
    </Box>
  )
}

export default CoinInfo;
