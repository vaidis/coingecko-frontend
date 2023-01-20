import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';

import { ICoinStatsProps, ICoinInfoProps, IStatsRow } from './coinDetails-types'

const CoinStats = (props: ICoinStatsProps): JSX.Element => {
  const { data } = props;

  const tableData = [
    {title: "24h Hight", value: `$${data.market_data.low_24h.usd}`},
    {title: "24h Low", value: `$${data.market_data.high_24h.usd}`},
    {title: "All-Time High", value: `$${data.market_data.ath.usd}`},
    {title: "All-Time Low", value: `$${data.market_data.atl.usd}`},
    {title: "24 hours change", value: `${data.market_data.price_change_percentage_24h}%`},
    {title: "7 days change", value: `${data.market_data.price_change_percentage_7d}%`},
    {title: "14 days change", value: `${data.market_data.price_change_percentage_14d}%`},
    {title: "1 month change", value: `${data.market_data.price_change_percentage_30d}%`},
    {title: "2 months change", value: `${data.market_data.price_change_percentage_60d}%`},
    {title: "200 days change", value: `${data.market_data.price_change_percentage_200d}%`},
    {title: "1 year change", value: `${data.market_data.price_change_percentage_1y}%`},
  ]

  return (
    <Box>
      <Typography variant="h2">Statistics</Typography>
      <TableContainer>
        <Table size="small" >
          <TableBody>
            {
              tableData.map((row: IStatsRow, index: number) => (
                <TableRow key={row.title}>
                  <TableCell align="left">{row.title}</TableCell>
                  <TableCell align="right">{row.value}</TableCell>
              </TableRow>
              ))
            }
          </TableBody>
        </Table>
      </TableContainer>
      </Box>
  )
}

export default CoinStats;
