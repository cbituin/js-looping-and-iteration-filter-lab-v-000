// Code your solution in this file
const findMatching = (arr, name) => {
  return arr.filter(val => val.toLowerCase() === name.toLowerCase());
};


const fuzzyMatch = (arr, letters) => {
  return arr.filter(val => val.includes(letters));
};

const matchName = () => {
  
};