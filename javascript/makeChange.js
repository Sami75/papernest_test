function getChangeByX(x, cash) {
  return cash / x;
}

function changeByTen(change, cash) {
  if (((cash % 10) % 5) % 2 === 0)
    if (cash % 10 === 0)
      return {
        ...change,
        ten: getChangeByX(10, cash),
      };
    else
      return {
        ...changeByFive(
          {
            ...change,
            ten: Math.trunc(cash / 10),
          },
          cash % 10
        ),
      };
  else return changeByFive(change, cash);
}

function changeByFive(change, cash) {
  if ((cash % 5) % 2 === 0)
    if (cash % 5 === 0)
      return {
        ...change,
        five: getChangeByX(5, cash),
      };
    else
      return {
        ...changeByTwo(
          {
            ...change,
            five: Math.trunc(cash / 5),
          },
          cash % 5
        ),
      };
  else return changeByTwo(change, cash);
}

function changeByTwo(change, cash) {
  if (cash % 2 === 0)
    return {
      ...change,
      two: getChangeByX(2, cash),
    };
  else return null;
}

function makeChange(cash) {
  console.log("cash", cash);
  let change = {
    two: 0,
    five: 0,
    ten: 0,
  };

  if (cash >= 10 && cash < 9007199254740991) {
    change = changeByTen(change, cash);
  } else if (cash < 10 && cash >= 5) {
    change = changeByFive(change, cash);
  } else if (cash < 5 && cash >= 2) {
    change = changeByTwo(change, cash);
  } else change = null;

  return change;
}

console.log(makeChange(10));
console.log(makeChange(11));
console.log(makeChange(12));
console.log(makeChange(6));
console.log(makeChange(5));
console.log(makeChange(7));
console.log(makeChange(9007199254740992));
console.log(makeChange(3));
console.log(makeChange(1));
console.log(makeChange(-15));
console.log(makeChange(150));
