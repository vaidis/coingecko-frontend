export interface IGlobalResponse {
    active_cryptocurrencies: number;
    markets: number;
}

export interface ICoinsListRequest {
    page: number;
    per_page: number;
}

export interface ICoinsListItem {
    id: string;
    image: string;
    name: string;
    market_cap_rank: number;
    symbol: string;
    current_price: string;
    high_24h: number;
    low_24h: number;
    price_change_percentage_24h: number;
}

export interface ICoinsCountResponse {
    count: number;
}

interface last {
    converted_last: { usd: number }
};

export interface ICoinInfo {
    market_cap_rank: number;
    tickers: last[];
    sentiment_votes_up_percentage: number;
    sentiment_votes_down_percentage: number;
    links: {
        homepage: string[],
        subreddit_url: string,
        twitter_screen_name: string,
        chat_url: string
    }
}
export interface ICoinInfoResponse extends ICoinInfo {
    name: string;
    id: string;
    image: {
        large: string;
    };
    description: {
        en: string;
    }
    market_data: {
        low_24h: { usd: number };
        high_24h: { usd: number };
        ath: { usd: number };
        atl: { usd: number };
        price_change_percentage_24h: number;
        price_change_percentage_7d: number;
        price_change_percentage_14d: number;
        price_change_percentage_30d: number;
        price_change_percentage_60d: number;
        price_change_percentage_200d: number;
        price_change_percentage_1y: number;
    }
}

export interface ICoinInfoData {
    data: ICoinInfoResponse
}

export interface ICoinInfoRequest {
    id: string;
}

export interface IChartDataItem {
    [index: number]: number,
}

export interface ICoinChartRequest {
    coin: string;
    days: string;
}

export interface IGetCoinChartResponse {
    market_caps: IChartDataItem[];
    prices: IChartDataItem[];
    total_volumes: IChartDataItem[];
}
