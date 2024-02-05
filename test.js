const arr = ['mehrab', 'munna', 'hossen'];

// const arr2 = ['manna', 'naanna', ...arr];

// arr2.pop();

const arr2 = arr.filter((item) => item !== 'munna');

// console.log(arr);
// console.log(arr2);

// function currying

const add = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};

const level = add(5);
console.log(level(3)(3));

console.log(add(1));
