// Problem No.1: Staircase
const staircase = (n) => {
    let str = '';

    for (let i = 1; i <= n; i++) {
        let newLine = '';
        for(let j = 1; j <= i; j++) {
            newLine += '#'
        };
        str += i < n ? " ".repeat(n - i) + newLine + '\n' : " ".repeat(n - i) + newLine;
    };

    return str;
};

// Problem No.2: Grading Students
const gradeStudents = (grades) => {
    return grades.map((value) => {
        if (value < 38) {
            return value
        } else {
            const nextMultiple = (value - (value % 5)) + 5;

            if (nextMultiple - value < 3) {
                return nextMultiple;
            } else {
                return value
            }
        };
    });
};

// Problem No.3: Time Conversion
const timeConversion = (s) => {
    let convertedHr = '';
    const hour = s.split(':')[0];
    const minute = s.split(':')[1];
    const seconds = s.split(':')[2].slice(0, 2);

    if (s.endsWith('AM')) {
        convertedHr = Number(hour) === 12 ? '00' : hour;
    } else {
        convertedHr = Number(hour) === 12 ? '12' : Number(hour) + 12;
    };

    return `${convertedHr}:${minute}:${seconds}`;
};

// Problem No.4: String Repeat
const repeatStr = (n, s) => {
    return s.repeat(n);
};

// Problem No.5: Reversed Strings
const solution = (str) => {
  return str.split('').reverse().join('');
};

// Problem No.6: Sum of Positive
const positiveSum = (arr) => {
  return arr.reduce((acc, curr) => acc += curr > 0 ? curr : 0, 0)
};

// Problem No.7: Grasshopper — Summation
const summation = (num) => {
    return (num * (num + 1)) / 2;
};

// Problem No.8: Convert a Boolean to a String
const booleanToString = (b) => {
    return String(b);
};

// Problem No.9: Fizz Buzz
const fizzBuzz = (n) => {
    const arr = Array.from({ length: n }, (_, index) => index + 1);

    return arr.map((i) => {
       if ( i % 3 === 0 && i % 5 === 0) {
        return "FizzBuzz"
       } else if (i % 3 === 0) {
        return "Fizz"
       } else if (i % 5 === 0) {
        return "Buzz"
       } else {
        return String(i);
       };
    });
};

// Problem No.10: Running Sum of 1D Array
const runningSum = (nums) => {
    let sum = 0;

    return nums.map((value) => {
        sum += value;
        return sum;
    });
};