const addNumber = (...numbers) => {
  return numbers.reduce((acc, curr) => acc + curr, 0);
};

export default addNumber;
