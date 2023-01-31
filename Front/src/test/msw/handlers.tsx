import { rest } from 'msw'
import { coinListSmall } from '../data/coinList';

const coinListURL = 'http://127.0.0.1:8080/coins/markets';
const globalURL = 'http://127.0.0.1:8080/global';
const countURL = 'http://127.0.0.1:8080/count';

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
            ctx.json(coinListSmall),
        )
    }),
    rest.get(countURL, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({"count": 1234}),
        )
    })
]