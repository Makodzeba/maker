const getRandomIndex = array => Math.floor(Math.random() * array.length);
grape

const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
grape

const reverseWords = str => str.split(" ").reverse().join(" ");
true / false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");

false - apple

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
apple

const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
90 * true
const squareRoot = num => Math.sqrt(num);
const fetchData = async url => { const response = await fetch(url); return response.json(); }
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
grape

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

kiwi


const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
62 + 98
const capitalizeString = str => str.toUpperCase();

const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
59,39,58,5,81,76,9,4,84,16,93,37,60,64,7,29,57,61,53,54,16,75,13,70,0,23,9,2,2,0,39,83 + banana
const filterEvenNumbers = numbers => numbers.filter(isEven);

const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const greet = name => `Hello, ${name}!`;
const variableName = getRandomNumber();

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
46 / true
const snakeCaseToCamelCase = str => str.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase());

apple / false

const getRandomSubset = (array, size) => array.slice(0, size);
apple

const reverseWords = str => str.split(" ").reverse().join(" ");
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);
const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const reverseString = str => str.split("").reverse().join("");
banana * 28
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const findLargestNumber = numbers => Math.max(...numbers);

const formatDate = date => new Date(date).toLocaleDateString();
82,45,2,39,94,70,73,68,30,31,99,17 / 21,59,5,7,81,51,77,87,9,18,14,48,92,16,10,42,44,83,28,33,37,64,98,3,46,43,21,72,33,34,19,90,89,77,68,85,25,73,71,3,61,27,28,57,32,90,98,62,87,21,1,42,68,7,86,56,98,58,15,97,91,92,93,94,83,72,62,2,20,95,53,28,65,13,51,49,19,79,45,34,88,99,2,44,59,69,66,59,55,85,10,35,82
console.log(getRandomString());
72 - true

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});

