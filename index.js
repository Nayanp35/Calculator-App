let userArray = [];

function button0() {
    userArray.push('0');
    document.getElementById("display").innerHTML += 0;
}

function button1() {
    userArray.push('1');
    document.getElementById("display").innerHTML += 1;
}

function button2() {
    userArray.push('2');
    document.getElementById("display").innerHTML += 2;
}

function button3() {
    userArray.push('3');
    document.getElementById("display").innerHTML += 3;
}

function button4() {
    userArray.push('4');
    document.getElementById("display").innerHTML += 4;
}

function button5() {
    userArray.push('5');
    document.getElementById("display").innerHTML += 5
}

function button6() {
    userArray.push('6');
    document.getElementById("display").innerHTML += 6
}

function button7() {
    userArray.push('7');
    document.getElementById("display").innerHTML += 7;
}

function button8() {
    userArray.push('8');
    document.getElementById("display").innerHTML += 8;
}

function button9() {
    userArray.push('9');
    document.getElementById("display").innerHTML += 9;
}

function buttonDot() {
    userArray.push('.');
    document.getElementById("display").innerHTML = '.';
}

function buttonPlus() {
    userArray.push('+');
    document.getElementById("display").innerHTML = '';
}

function buttonMinus() {
    userArray.push('-');
    document.getElementById("display").innerHTML = '';
}

function buttonMulti() {
    userArray.push('*');
    document.getElementById("display").innerHTML = '';
}

function buttonDivision() {
    userArray.push('/');
    document.getElementById("display").innerHTML = '';
}

function buttonBackspace() {
    userArray.pop();
    document.getElementById("display").innerHTML = '';
}

function buttonAC() {
    userArray = [];
    document.getElementById("display").innerHTML = 0;
}

function buttonPercentage() {
    let join = userArray.join("")
    let num = Number(join)
    console.log(num / 100)
    document.getElementById("display").innerHTML = num / 100;
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
    document.getElementById("display").innerHTML = eval(join);
}


