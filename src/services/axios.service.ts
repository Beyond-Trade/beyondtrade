import axios from 'axios';

export const zero_x_base_url = 'https://api.0x.org';
export const coinGeko = 'https://api.coingecko.com/api/v3/'
export const twelveData = 'https://api.twelvedata.com/';

export async function getCrypto(coinIds: any) {
    try {
        coinIds = encodeURI(coinIds);
        const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids="+coinIds+"&order=market_cap_desc&per_page=100&page=1&sparkline=false"
        var prices = await axios.get(url);
        return prices.data;
    } catch (error) {
        return error;
    }
}

// export async function getForex(params: any) {
//     try {
//         const url = twelveData + 'time_series?symbol='+params.coinId+'/USD&interval=1h&apikey=a1083c8f173849f0a0a395b2eb896d85'
//         var prices = await axios.get(url);
//         return prices.data.values;
//     } catch (error) {
//         return error;
//     }
// }
export async function getForex(params: any) {
    try {

        const url = 'https://api.exchangerate.host/timeseries?start_date=' + params.yesterday + '&end_date=' + params.today + '&symbols='+params.symbols+'&base=USD'
        var prices = await axios.get(url);
        return prices.data.rates;
    } catch (error) {
        return error;
    }
} 



export async function getSynthetixPrices() {
    try {
     let prices = await axios({
            url: 'https://api.thegraph.com/subgraphs/name/synthetixio-team/synthetix-rates',
            method: 'post',
            data: {
              query: `
              {
                latestRates(orderBy: id) {
                rate
                id
                }
                }
                `
            }
          })
        return prices.data.data.latestRates;
    } catch (error) {
        return error;
    }}