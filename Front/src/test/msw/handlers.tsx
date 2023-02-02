import { rest } from 'msw'
import { coinList } from '../data/coinList';
import { coinDetails } from '../data/coinDetails';
import { coinChartMax } from '../data/coinChartMax';

const coinListURL = 'http://127.0.0.1:8080/coins/markets';
const globalURL = 'http://127.0.0.1:8080/global';
const countURL = 'http://127.0.0.1:8080/count';
const coinURL = 'http://127.0.0.1:8080/coin/monero';
const coinChartMaxURL = 'http://127.0.0.1:8080/coin/monero/chart/max'

export const handlers = [
    rest.get(globalURL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                    active_cryptocurrencies: 1111,
                    markets: 2222
            }),
        )
    }),
    rest.get(coinListURL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(coinList),
        )
    }),
    rest.get(countURL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({"count": 1234}),
        )
    }),
    rest.get(coinURL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(coinDetails),
        )
    }),
    rest.get(coinChartMaxURL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(coinChartMax),
        )
    })
]
