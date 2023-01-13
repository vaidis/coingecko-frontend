import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {
  IGlobalResponse,
  ICoinsListRequest,
  ICoinsListItem,
  ICoinsListResponse,
  ICoinsCountResponse,
  ICoinInfoRequest,
  ICoinInfoResponse,
  ICoinChartRequest,
  IGetCoinChartResponse,
} from './coinApi-types'

const baseUrl = "http://127.0.0.1:8080";
const marketsUrl = '/coins/markets';
const countUrl = '/count';
const globalUrl = '/global';
const coinInfoUrl = (id: string) => `/coin/${id}`;
const coinChartUrl = (coin: string, days: string) => `/coin/${coin}/chart/${days}`;

export const coinListApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  endpoints: (builder) => ({
    getGlobal: builder.query<IGlobalResponse, void>({
      query: () => globalUrl,
    }),
    getCoinsList: builder.query<ICoinsListItem[], ICoinsListRequest>({
      query: (payload: ICoinsListRequest) => `${marketsUrl}?per_page=${payload.per_page}&page=${payload.page}`,
    }),
    getCoinsCount: builder.query<ICoinsCountResponse, void>({
      query: () => countUrl,
    }),
    getCoinInfo: builder.query<ICoinInfoResponse, string>({
      query: (id: string) => coinInfoUrl(id),
    }),
    getCoinChart: builder.query<IGetCoinChartResponse, ICoinChartRequest>({
      query: (payload: {coin: string, days: string}) => coinChartUrl(payload.coin, payload.days),
    }),
  }),
})

export const {
  useGetGlobalQuery,
  useGetCoinsListQuery,
  useGetCoinsCountQuery,
  useGetCoinInfoQuery,
  useGetCoinChartQuery
} = coinListApi;
