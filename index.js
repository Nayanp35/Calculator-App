let userArray = [];

function button0() {
    userArray.push('0');
}

function button1() {
    userArray.push('1');
}

function button2() {
    userArray.push('2');
}

function button3() {
    userArray.push('3');
}

function button4() {
    userArray.push('4');
}

function button5() {
    userArray.push('5');
}

function button6() {
    userArray.push('6');
}

function button7() {
    userArray.push('7');
}

function button8() {
    userArray.push('8');
}

function button9() {
    userArray.push('9');
}

function buttonDot() {
    userArray.push('.');
}

function buttonPlus() {
    userArray.push('+');
}

function buttonMinus() {
    userArray.push('-');
}

function buttonMulti() {
    userArray.push('x');
}

function buttonDivision() {
    userArray.push('÷');
}

// function concatenate(array) {
//     const string = array.join('');
//     let concatedArr = [];
//     let digitIndex;
//     let operatorIndex;
//     for (let i = 0; i < string.length; i++) {
//         if (/\d/.test(string[i]) && !(/\d/.test(string[i - 1]))) digitIndex = i;
//         if (!(/\d/.test(string[i]))) {
//             operatorIndex = i;
//             concatedArr.push(string.substring(digitIndex, operatorIndex));
//             concatedArr.push(string[i]);
//         }
//     }
//     return concatedArr;
// }

// let concatenatedArray = concatenate(userArray)

// function turnToNumber(arr) {
//     return arr.map(num => {
//         if (/\d/.test(num)) {
//             return Number(num)
//         }
//         else {
//             return num;
//         }
//     });
// }

// let turnToNumberArray = turnToNumber(concatenatedArray)

// function calculate(arr) {
//     let result = arr[0];
//     for (let i = 1; i < arr.length; i += 2) {
//         if (arr[i] === '+') {
//             result += arr[i + 1];
//         }
//         else if (arr[i] === '-') {
//             result -= arr[i + 1];
//         }
//         else if (arr[i] === 'x') {
//             result *= arr[i + 1];
//         }
//         else if (arr[i] === '÷') {
//             result /= arr[i + 1];
//         }
//     }
//     return result;
// }

// let result = calculate(turnToNumberArray);

function buttonEqual() {
    let join = userArray.join("");
    console.log(eval(join))
}

