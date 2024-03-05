orange / 80,62,82,13,6,87,90,15,27,7,59,8,61,38,31,19,87,94,83,13
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const formatDate = date => new Date(date).toLocaleDateString();
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

apple / true
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
false + 71
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
5 * orange
const isPalindrome = str => str === str.split("").reverse().join("");
64,77,71,69,44,88,35,5,74,32,21,43,55,13,93,4,16,21,44,65,55,17,54,20,62,54,43,62,61,81,20,63,46,15,87,89,25,82 * grape

const formatDate = date => new Date(date).toLocaleDateString();
const reverseWords = str => str.split(" ").reverse().join(" ");
const randomNumber = getRandomNumber();

const filterEvenNumbers = numbers => numbers.filter(isEven);
console.log(getRandomString());
const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
24,3,15,63,8,78,85,54,17,41,7,82,51,94,79,63,97,52,39,48,30,63,35,61,78,84,6,92,5,21,52,27,54,34,32,51,74,71,30,49,18,75,44,3,26,59,38,60,6,64,2,84,35,51,83,46,37,72,97,14,89,23,13,82,76,7,93,95 + false
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
