import snxData from "synthetix-data";

import {
  matchPairRates,
  getMinAndMaxRate,
  calculateRateChange,
  calculateTimestampForPeriod,
  calculateTotalVolumeForExchanges,
} from "./utils";

import { SYNTHS_MAP } from "../../constants/currency";
import { PERIOD_IN_HOURS } from "../../constants/period";

export const fetchSynthRateUpdate = async (
  currencyKey,
  periodInHours = PERIOD_IN_HOURS.ONE_DAY
) => {
  try {
    // const now = new Date().getTime();

    const rates = await snxData.rate.updates({
      synth: currencyKey,
      // maxTimestamp: Math.trunc(now / 1000),
      minTimestamp: calculateTimestampForPeriod(periodInHours),
      max: 6000,
    });

    const [low, high] = getMinAndMaxRate(rates);
    const change = calculateRateChange(rates);

    return {
      rates: rates.reverse(),
      low,
      high,
      change,
    };
  } catch (e) {
    return null;
  }
};
export const fetchSynthRateUpdates = async (
  quoteCurrencyKey,
  baseCurrencyKey,
  periodInHours
) => {
  try {
    // const now = new Date().getTime();
    // let baseCurrencyKeyCopy=baseCurrencyKey;
    // let quoteCurrencyKeyCopy=quoteCurrencyKey
    // baseCurrencyKeyCopy.concat("s");
    // quoteCurrencyKeyCopy.concat("s");
    let quoteCurrencyKeyCopy = "s" + quoteCurrencyKey.slice(0, -1);
    let baseCurrencyKeyCopy = "s" + baseCurrencyKey.slice(0, -1);
   
    const [baseRates, quoteRates] = await Promise.all(
      // ["sBTC", "sUSD"].map((synthName) =>
      [
        "s" + quoteCurrencyKey.slice(0, -1),
        "s" + baseCurrencyKey.slice(0, -1),
      ].map((synthName) =>
        snxData.rate.updates({
          synth: synthName,
          // maxTimestamp: Math.trunc(now / 1000),
          minTimestamp: calculateTimestampForPeriod(periodInHours),
          max: 6000,
        })
      )
    );
    // If quote or rate is sUSD then we just get
    // the base or quote rates as they're already in sUSD

    let rates =
      quoteCurrencyKeyCopy === "sUSD"
        ? quoteRates
        : baseCurrencyKeyCopy === "sUSD"
        ? baseRates
        : quoteRates.length === 0 || baseRates.length === 0
        ? baseRates.length === 0
          ? quoteRates
          : baseRates
        : matchPairRates(baseRates, quoteRates);

    const [low, high] = getMinAndMaxRate(rates);
    const change = calculateRateChange(rates);

    return {
      rates: rates.reverse(),
      low,
      high,
      change,
    };
  } catch (e) {
    return null;
  }
};

export const fetchExchanges = (periodInHours = PERIOD_IN_HOURS.ONE_DAY) =>
  snxData.exchanges.since({
    minTimestamp: calculateTimestampForPeriod(periodInHours),
  });

export const fetchSynthVolumeInUSD = async (
  baseCurrencyKey,
  quoteCurrencyKey,
  periodInHours = PERIOD_IN_HOURS.ONE_DAY
) => {
  try {
    const exchanges = await fetchExchanges(periodInHours);
    let quoteCurrencyKeyCopy = quoteCurrencyKey.substr(quoteCurrencyKey.length - 1) === "b"? "s" + quoteCurrencyKey.slice(0, -1) : "s"+quoteCurrencyKey;
    let baseCurrencyKeyCopy = "s" + baseCurrencyKey.slice(0, -1);
    // console.log("quoteCurrencyKey = ",quoteCurrencyKey,"  ____quoteCurrencyKeyCopy = ",quoteCurrencyKeyCopy)
    // console.log("baseCurrencyKey = ",baseCurrencyKey,"  ____baseCurrencyKeyCopy = ",baseCurrencyKeyCopy)
   return calculateTotalVolumeForExchanges(
      baseCurrencyKeyCopy,
      quoteCurrencyKeyCopy,
      exchanges
    );
  } catch (e) {
    return null;
  }
};
