import { ICoinInfoResponse } from '../coinApi/coinApi-types'
import { ICoinInfo } from '../coinApi/coinApi-types'

export interface ICoinChartProps {
    coin: string;
}

export interface IChartDataItem {
    [index: number]: number,
}

export interface IChartData {
    market_caps: Array<IChartDataItem>;
    prices: Array<IChartDataItem>;
    total_volumes: Array<IChartDataItem>;
}

export interface IChartDataFormattedItem {
    x: Date;
    y: number;
}

export interface IChartDataFormatted extends Array<IChartDataFormattedItem> { };

export interface ICoinStatsProps {
    data: ICoinInfoResponse;
}

export interface IStatsRow {
    title: string;
    value: string;
}

export interface ICoinInfoProps {
    data: ICoinInfo;
}

export interface IDurationOption {
    label: string;
    value: string;
}

export interface IDurationOptions extends Array<IDurationOption> { }
