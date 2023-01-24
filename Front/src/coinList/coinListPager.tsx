import { useGetCoinsCountQuery } from '../coinApi/coinApi';
import { useNavigate } from "react-router-dom";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import { IPagerProps } from './coinList-types';
import { useTheme } from '@mui/material';

const Pager = (props: IPagerProps): JSX.Element => {
  const { page, per_page, } = props;

  const { data, error, isLoading, isSuccess } = useGetCoinsCountQuery();
  const navigate = useNavigate();
  const theme = useTheme();

  const lastPage = (data: number) => Math.ceil(data / per_page)

  function handlePager(page: number) {
    const url = `/?page=${page}`
    navigate(url)
  }

  return (<>
    {
      data && isSuccess &&
      <Grid container justifyContent="center" sx={{ mt: 8, mb: 8 }} aria-label="pager">
        <ButtonGroup
          variant="contained"
          sx={{background: theme.palette.background.paper}}
        >
          <Button disabled={page === 1} onClick={() => navigate("/")}>First</Button>
          <Button disabled={page === 1} onClick={() => handlePager(page - 1)}>Prev</Button>
          <Typography style={{ padding: 10 }}>Page {page} from {lastPage(data.count)}</Typography>
          <Button disabled={page === lastPage(data.count)} onClick={() => handlePager(page + 1)}>Next</Button>
          <Button disabled={page === lastPage(data.count)} onClick={() => handlePager(lastPage(data.count))}>Last</Button>
        </ButtonGroup>
      </Grid>
    }
  </>
  )
}

export default Pager;
