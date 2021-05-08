function setArrayMinMax(arr) {
  return arr.sort((a, b) => {
    return a[1] + a[2] - (b[1] + b[2]);
  });
}

function setArrayMaxMin(arr) {
  return arr.sort((a, b) => {
    return b[1] + b[2] - (a[1] + a[2]);
  });
}

function setArrayMinZeros(arr) {
  return arr.sort((a, b) => {
    return a[1] - b[1];
  });
}

function setArrayMinOnes(arr) {
  return arr.sort((a, b) => {
    return a[2] - b[2];
  });
}

function setArrayMaxZeros(arr) {
  return arr.sort((a, b) => {
    return b[1] - a[1];
  });
}

function setArrayMaxOnes(arr) {
  return arr.sort((a, b) => {
    return b[2] - a[2];
  });
}

function getArr(strs, m, n) {
  var arr = [];

  strs.forEach((substr) => {
    var zero = 0;
    var one = 0;

    for (i = 0; i < substr.length; i++) {
      substr[i] === "0" ? zero++ : one++;
    }

    if (zero <= m && one <= n) {
      arr.push([substr, zero, one]);
    }
  });

  return arr;
}

function getResult(validMinMax, m, n) {
  var m_Left = m;
  var n_Left = n;
  var result = 0;

  validMinMax.forEach((value) => {
    // console.log(m_Left);
    // console.log(n_Left);
    // console.log(value[1] <= m_Left);
    // console.log(value[2] <= n_Left);

    if (value[1] <= m_Left && value[2] <= n_Left) {
      m_Left -= value[1];
      n_Left -= value[2];
      result++;
    }
  });

  return result;
}

var findMaxForm = function (strs, m, n) {
  var arr = getArr(strs, m, n);
  var resMinMax = 0;
  var resMaxMin = 0;
  var resMinZeros = 0;
  var resMaxZeros = 0;
  var resMinOnes = 0;
  var resMaxOnes = 0;

  resMinMax = getResult(setArrayMinMax(arr), m, n);
  resMinMax2 = getResult(setArrayMinMax(arr).reverse(), m, n);
  resMaxMin = getResult(setArrayMaxMin(arr), m, n);
  resMaxMin2 = getResult(setArrayMaxMin(arr).reverse(), m, n);

  resMinZeros = getResult(setArrayMinZeros(arr), m, n);
  resMinZeros2 = getResult(setArrayMinZeros(arr).reverse(), m, n);
  resMaxZeros = getResult(setArrayMaxZeros(arr), m, n);
  resMaxZeros2 = getResult(setArrayMaxZeros(arr).reverse(), m, n);

  resMinOnes = getResult(setArrayMinOnes(arr), m, n);
  resMinOnes2 = getResult(setArrayMinOnes(arr).reverse(), m, n);
  resMaxOnes = getResult(setArrayMaxOnes(arr), m, n);
  resMaxOnes2 = getResult(setArrayMaxOnes(arr).reverse(), m, n);

  var resArr = [
    resMinMax,
    resMaxMin,
    resMinZeros,
    resMaxZeros,
    resMinOnes,
    resMaxOnes,
    resMinMax2,
    resMaxMin2,
    resMinZeros2,
    resMaxZeros2,
    resMinOnes2,
    resMaxOnes2
  ];

  resArr.sort((a, b) => b - a);

  return resArr[0];
};

console.log(
  findMaxForm(
    [
      "0000111",
      "0000111111",
      "01111111",
      "0001",
      "000111111",
      "0000001111111",
      "00011111",
      "000011111",
      "00000011",
      "0111111",
      "0000000001111111",
      "0011",
      "001111",
      "00000001111",
      "0011",
      "0000111111111",
      "0001111111",
      "011111111"
    ],
    4,
    6
  )
);
