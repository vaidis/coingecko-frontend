import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { useGetCoinsListQuery, useGetGlobalQuery } from '../coinApi';
import { ICoinsListItem } from '../coinApi-types';

import Pager from './coinListPager';

const CoinList = (): JSX.Element => {

  // From URL
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get('page')) || 1
  const per_page = Number(searchParams.get('per_page')) || 25

  // For Query
  const payload = { page, per_page }
  const { data, isLoading, isSuccess } = useGetCoinsListQuery(payload);
  const { data: globalData, isLoading: globalIsLoading, isSuccess: lobalSuccess } = useGetGlobalQuery();

  return (
    <>
      {isLoading || globalIsLoading && <div>Loading...</div>}
      {
        globalData &&
        <span className="globalText">
          {`The global cryptocurrency market has currently ${globalData.active_cryptocurrencies} active cryptocurrencies, and ${globalData.markets} markets`}
          <br />
        </span>
      }
      {
        data && isSuccess &&
        <Box className="coin-list">
          <TableContainer style={{ marginTop: 20 }}>
            <Table size="small" aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell
                    align="right"
                    sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}
                  >
                    #
                  </TableCell>
                  <TableCell align="left">Coin</TableCell>
                  <TableCell align="right">Current Price</TableCell>
                  <TableCell
                    align="right"
                    sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}
                  >
                    Low (24h)
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}
                  >
                    Hight (24)
                  </TableCell>
                  <TableCell
                    sx={{ display: { xs: 'table-cell', sm: 'none', md: 'table-cell' } }}
                    align="right"
                  >
                    Change (24h)
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  data.map((row: ICoinsListItem, index: number) => (
                    <TableRow
                      key={row.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell
                        align="right"
                        sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}
                      >
                        {row.market_cap_rank}
                      </TableCell>
                      <TableCell align="left">
                        <Link to={`coin/${row.id}`}>
                          <img src={row.image} width="20" height="20" />
                          <span className="coinName">{row.name}</span>
                          <span className="coinSymbol">{row.symbol}</span>
                        </Link>
                      </TableCell>
                      <TableCell align="right">${row.current_price}</TableCell>
                      <TableCell
                        align="right"
                        sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}
                      >
                        ${row.low_24h}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ display: { xs: 'none', sm: 'table-cell', md: 'table-cell' } }}
                      >
                        ${row.high_24h}
                      </TableCell>
                      <TableCell
                        align="right"
                        sx={{ display: { xs: 'table-cell', sm: 'none', md: 'table-cell' } }}
                      >
                        <span className={row.price_change_percentage_24h > 0 ? 'green' : 'red'}>
                          {row.price_change_percentage_24h}%
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      }
      <Pager page={page} per_page={per_page}/>
    </>
  )
}

export default CoinList;
