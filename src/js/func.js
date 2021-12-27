let func = function(operator, a, b) {
    if(operator  === '+') {
        console.log(`${a}${operator}${b}=${a + b}`);
    }
    else if(operator  === '-') {
        console.log(`${a}${operator}${b}=${a - b}`);
    }
    else if(operator  === '*') {
        console.log(`${a}${operator}${b}=${a * b}`);
    }
    else if(operator  === '/') {
        console.log(`${a}${operator}${b}=${a / b}`);
    } else console.log('operation not exist');

}

export { func };

