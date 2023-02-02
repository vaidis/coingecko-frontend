import React from 'react';
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useGetCoinChartQuery } from '../coinApi/coinApi';
import { format } from 'date-fns';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material';

import Spinner from '../common/spinner';
import Error from '../common/error';

import {
  ICoinChartProps,
  IChartDataItem,
  IChartData,
  IChartDataFormatted
} from './coinDetails-types';

import { IDurationOptions } from './coinDetails-types';

Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinChart = (props: ICoinChartProps): JSX.Element => {

  const [duration, setDuration] = React.useState('max')
  const [redraw, setRedraw] = React.useState(false);
  const theme = useTheme();

  const chartRequest = {
    coin: props.coin,
    days: duration
  }

  const {
    data,
    isLoading,
    isSuccess,
    isError,
    error,
    refetch
  } = useGetCoinChartQuery(chartRequest);

  // BUG: responsive and redraw toghether cause double render
  React.useEffect(() => {
    function handleResize() {
      setTimeout(function () { setRedraw(true) }, 1000);
      setTimeout(function () { setRedraw(false) }, 2000);
    }
    window.addEventListener('resize', handleResize)
  }, []);

  const durationOptions: IDurationOptions = [
    { label: "1D", value: '1' },
    { label: "2W", value: '14' },
    { label: "1M", value: '30' },
    { label: "3M", value: '90' },
    { label: "1Y", value: '365' },
    { label: "MAX", value: 'max' }
  ];

  function formatChartData(data: IChartData): IChartDataFormatted {
    return data['prices'].map(function (value: IChartDataItem) {
      return {
        x: new Date(value[0]),
        y: value[1],
      };
    });
  }

  function formatChartLabels(data: IChartData): string[] {
    return data['prices'].map((value: IChartDataItem) =>
      format(new Date(value[0]), 'MM/dd/yyyy')
    );
  }

  function durationHandler(value: string): void {
    setDuration(value)
    refetch()
  }

  const chartOptions = {
    elements: {
      point: {
        radius: 0
      }
    },
    color: theme.palette.text.primary,
    borderColor: theme.palette.text.primary,
    backgroundColor: theme.palette.text.primary,
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    pointRadius: 0,
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return (
    <Box>
      {isError && <Error errorProp={error} />}
      {isLoading && <Spinner />}
      {data && <>
          <Grid container justifyContent="flex-start" style={{ marginBottom: 20 }}>
            <ButtonGroup variant="contained" aria-label="outlined primary button group">
              {
                durationOptions.map(item => <Button
                  key={item.value}
                  variant={item.value === duration ? 'outlined' : 'contained'}
                  onClick={() => { durationHandler(item.value) }}>{item.label}
                </Button>
                )
              }
            </ButtonGroup>
          </Grid>
          <div id="chart" className="chart-container" style={{ position: "relative", height: "auto" }}>
          <Line
              options={chartOptions}
              redraw={redraw}
              updateMode="resize"
              data={{
                labels: formatChartLabels(data),
                datasets: [{
                  label: 'Dataset',
                  data: formatChartData(data)
                }],
              }}
            />
          </div>
        </>
      }
    </Box>
  )
}

export default CoinChart;
