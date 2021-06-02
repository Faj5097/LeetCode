function setArrayMinMax(strs, m, n) {
  var arr = getArr(strs, m, n);

  arr = arr.sort((a, b) => {
    return a[1] + a[2] - (b[1] + b[2]);
  });

  console.log(arr);
  return arr;
}

function setArrayMaxMin(strs, m, n) {
  var arr = getArr(strs, m, n);

  arr = arr.sort((a, b) => {
    return b[1] + b[2] - (a[1] + a[2]);
  });

  console.log(arr);
  return arr;
}

function setArrayMinZeros(strs, m, n) {
  var arr = getArr(strs, m, n);

  arr = arr.sort((a, b) => {
    return a[1] - b[1];
  });
  console.log(arr);
  return arr;
}

function setArrayMinOnes(strs, m, n) {
  var arr = getArr(strs, m, n);

  arr = arr.sort((a, b) => {
    return a[2] - b[2];
  });

  console.log(arr);
  return arr;
}

function setArrayMaxZeros(strs, m, n) {
  var arr = getArr(strs, m, n);

  arr = arr.sort((a, b) => {
    return b[1] - a[1];
  });

  console.log(arr);
  return arr;
}

function setArrayMaxOnes(strs, m, n) {
  var arr = getArr(strs, m, n);

  arr = arr.sort((a, b) => {
    return b[2] - a[2];
  });

  console.log(arr);
  return arr;
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
  var resMinMax = 0;
  var resMaxMin = 0;
  var resMinZeros = 0;
  var resMaxZeros = 0;
  var resMinOnes = 0;
  var resMaxOnes = 0;

  resMinMax = getResult(setArrayMinMax(strs, m, n), m, n);
  resMinMax2 = getResult(setArrayMinMax(strs, m, n).reverse(), m, n);
  resMaxMin = getResult(setArrayMaxMin(strs, m, n), m, n);
  resMaxMin2 = getResult(setArrayMaxMin(strs, m, n).reverse(), m, n);

  resMinZeros = getResult(setArrayMinZeros(strs, m, n), m, n);
  resMinZeros2 = getResult(setArrayMinZeros(strs, m, n).reverse(), m, n);
  resMaxZeros = getResult(setArrayMaxZeros(strs, m, n), m, n);
  resMaxZeros2 = getResult(setArrayMaxZeros(strs, m, n).reverse(), m, n);

  resMinOnes = getResult(setArrayMinOnes(strs, m, n), m, n);
  resMinOnes2 = getResult(setArrayMinOnes(strs, m, n).reverse(), m, n);
  resMaxOnes = getResult(setArrayMaxOnes(strs, m, n), m, n);
  resMaxOnes2 = getResult(setArrayMaxOnes(strs, m, n).reverse(), m, n);

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
