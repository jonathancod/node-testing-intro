function dollarsToCents(dollarText: string | number) {
  const cents = Math.round(100 * dollarTextToNumber(dollarText));
  
  if (cents === null || isNaN(cents)) {
    return null;
  }

  return cents;
}

function dollarTextToNumber(dollarText: string | number) {
  // clean the string
  const moneySymbols = /[$,]/g;
  let parsedValue = `${dollarText}`
    .replace(moneySymbols, '')
    .trim();

  return parseFloat(parsedValue);
}

const utils = {
  dollarsToCents,
  dollarTextToNumber,
}

export default utils;