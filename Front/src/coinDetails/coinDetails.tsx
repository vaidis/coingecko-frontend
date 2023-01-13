import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetCoinInfoQuery } from '../coinApi';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import CoinChart from './coinChart';
import CoinStats from './coinStats';
import CoinInfo from './coinInfo';


const CoinDetails = (): JSX.Element => {
  const { id } = useParams();
  const {
    data,
    error,
    isLoading,
    isSuccess,
  } = useGetCoinInfoQuery(id ? id : '');

  return (
    <Box>
      {isLoading && <div>Loading...</div>}
      {
        data && isSuccess && <>
          <Grid container style={{ marginBottom: 40 }}>
            <Typography variant="h1">
              <img src={data.image.large} width="28" height="28" style={{ marginRight: 10 }} />
              {data.name}
            </Typography>
          </Grid>
          <Grid container>
            <Grid item xs={12} sm={12} md={8}>
              <CoinInfo data={data} />
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <CoinStats data={data} />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 20 }}>
              <CoinChart coin={data.id} />
            </Grid>
            <Grid item xs={12} style={{ marginTop: 40 }}>
              <Typography variant="body2" dangerouslySetInnerHTML={{ __html: data.description.en }}></Typography>
            </Grid>
          </Grid>

        </>
      }
    </Box>
  )
}

export default CoinDetails;
