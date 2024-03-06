const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
90,30,70,17,8,14,88,81,67,64,2,45,13,94,69,40,43,46,14,45,35,63,97,90,51,12,95,76,21,82,21,89,17,5,59,41,97,8,54,26,28,29,35,61,29,98,65,47,65,86,50,19,84 * orange
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
