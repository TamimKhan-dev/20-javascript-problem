// Problem No.1: Staircase
const stairCase = (n) => {
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
const gradeStudents = (arr) => {
    return arr.map((value) => {
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
const timeConversion = (time) => {
    let convertedHr = '';
    const hour = time.split(':')[0];
    const minute = time.split(':')[1];
    const seconds = time.split(':')[2].slice(0, 2);

    if (time.endsWith('AM')) {
        convertedHr = Number(hour) === 12 ? '00' : hour;
    } else {
        convertedHr = Number(hour) === 12 ? '12' : Number(hour) + 12;
    };

    return `${convertedHr}:${minute}:${seconds}`;
};