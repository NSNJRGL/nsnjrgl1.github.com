const a = [1, 3, 5, 3, 3];

const b = a.map(function (elem) {
  return elem * 10;
});

const c = a.filter(function (elem) {
  return elem === 3;
});

const d = a.reduce(function (prevValue, elem) {
  return prevValue * elem;
});

function sum(array) {
  return array.reduce(function (prevValue, elem) {
    return prevValue + elem;
  });
}

function multiply(array) {
  return array.reduce(function (prevValue, elem) {
    return prevValue * elem;
  });
}

function reverse(string) {
  return string.split("").reverse().join("");
}

function filterLongWords(arrayOfString, index) {
  return arrayOfString.filter(function (elem) {
    return elem.length > index;
  });
}

const sumArr = sum(a);
const multiplyArr = multiply(a);
const reverseStr = reverse("abc");
const filterWords = filterLongWords(["abc", "ab"], 2);

console.log(b, c, d, sumArr, multiplyArr, filterWords, reverseStr);
