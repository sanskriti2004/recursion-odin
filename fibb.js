//iterative way
let fibb = (n) => {
  let res = [];
  let n1 = 0,
    n2 = 1;
  for (let i = 0; i < n; i++) {
    res.push(n1);
    temp = n1 + n2;
    n1 = n2;
    n2 = temp;
  }
  console.log(res);
};
fibb(5);
fibb(2);
fibb(1);
fibb(10);

//recursive way

let recurFib = (n, res, n1, n2) => {
  if (res.length === n) {
    return res;
  }
  console.log("This was printed recursively");
  res.push(n1);
  let temp = n1 + n2;
  n1 = n2;
  n2 = temp;
  return recurFib(n, res, n1, n2);
};

console.log(recurFib(2, [], 0, 1));
console.log(recurFib(1, [], 0, 1));
console.log(recurFib(5, [], 0, 1));
console.log(recurFib(10, [], 0, 1));
