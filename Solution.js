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