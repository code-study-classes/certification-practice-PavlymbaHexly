function calculateDistance(x1, x2) {
    return Math.abs(x1 - x2);
  }
  
  function calculateSegmentProduct(A, B, C) {
    return Math.abs(A - C) * Math.abs(B - C);
  }
  
  function calculateKilobytes(fileSizeInBytes) {
    return Math.floor(fileSizeInBytes / 1024);
  }
  
  function calculateSegments(lengthA, lengthB) {
    return Math.floor(lengthA / lengthB);
  }
  
  function calculateDigitSum(twoDigitNumber) {
    const tens = Math.floor(twoDigitNumber / 10);
    const ones = twoDigitNumber % 10;
    return tens + ones;
  }
  
  function swapHundredsAndTens(threeDigitNumber) {
    const hundreds = Math.floor(threeDigitNumber / 100);
    const tens = Math.floor((threeDigitNumber % 100) / 10);
    const ones = threeDigitNumber % 10;
    return hundreds * 10 + tens * 100 + ones;
  }
  
  function getHundredsDigit(number) {
    if (number > 999) {
      return Math.floor((number % 1000) / 100);
    }
    return 0;
  }
  
  function getFullHours(seconds) {
    if (typeof seconds !== 'number' || seconds % 1 !== 0) {
      throw new Error('Invalid input: seconds must be an integer');
    }
    return Math.floor(seconds / 3600);
  }
  
  function getDayOfWeek(dayOfYear) {
    if (dayOfYear < 1 || dayOfYear > 365) {
      throw new Error('Invalid input: dayOfYear must be between 1 and 365');
    }
    return (dayOfYear + 5) % 7;
  }
  
  function countSquares(A, B, C) {
    const horizontalSquares = Math.floor(A / C);
    const verticalSquares = Math.floor(B / C);
    return horizontalSquares * verticalSquares;
  }
  
  module.exports = {
    calculateDistance,
    calculateSegmentProduct,
    calculateKilobytes,
    calculateSegments,
    calculateDigitSum,
    swapHundredsAndTens,
    getHundredsDigit,
    getFullHours,
    getDayOfWeek,
    countSquares,
  };
  