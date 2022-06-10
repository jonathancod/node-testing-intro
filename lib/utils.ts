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
  parsedValue = abbreviatedMillionsToInteger(parsedValue);
  return parseFloat(parsedValue);
}

function abbreviatedMillionsToInteger(dollarText: string) {
  return (dollarText || '')
  .replace(/(\d)\s?mil(lion)?/i, '$1000000');
}

const utils = {
  dollarsToCents,
  dollarTextToNumber,
  abbreviatedMillionsToInteger,
}

export default utils;