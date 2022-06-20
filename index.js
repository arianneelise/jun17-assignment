// 1) Write a program that counts to 10 by 2's

// 2) Write a program that generates a random hexadecimal value. You cannot use helper functions (ie: hex() or similar that returns the expected output).This should be scratch built.
// IE: randomHex() => #aaaf53
// IE: randomHex() => #12333j
// HINT: Math.random will be very helpful here
// etc...
// It should return different hex values each time (doesn't have to be unique)

// 3) Write a program that extracts values from an array at specific indeces (also in an array), and returns a new array with those values.
// IE: removeByIndex(['a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']

// 4) Write a program that converts a number into an array of NUMBERS (emphasis on the number type).
// IE: numberToArray(12345) => [1, 2, 3, 4, 5]
// NOT => ["1", "2", "3", "4", "5"]

// You can use whatever methods you'd like to loop (if necessary), just no outside libraries that do exactly what I'm asking for.
// All of these MUST be done in a function.

// Extra: After you solve a challenge, try to do it with a different approach for extra practice.

// Have Fun!

// QUESTION ONE

const countByTwo = () => {
  let answer = "";
  for (let i = 0; i < 11; i += 2) {
    answer += i + " ";
  }
  return answer;
};

// QUESTION TWO
const randomHex = () => {
  let hex = [];
  let letters = {
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  for (let i = 0; i < 6; i++) {
    let value = Math.floor(Math.random() * 17);
    if (value > 9) {
      hex.push(letters[value]);
    } else {
      hex.push(value);
    }
  }
  return `#${hex.join("")}`;
};

// QUESTION THREE

const removeByIndex = (arr, indeces) => {
  let answer = [];
  while (indeces.length) {
    let index = indeces.pop();
    let i = arr[index];
    answer.unshift(i);
  }
  return answer;
};

// QUESTION FOUR

const numberToArray = (num) => {
  let i = num.toString();
  i = i.split("");
  for (let n = 0; n < i.length; n++) {
    i[n] = parseInt(i[n]);
  }
  return i;
};
