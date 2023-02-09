let userArray = [];

function numberButton(num) {
    userArray.push(num);
    document.getElementById("display").innerHTML += num;
}

function buttonBackspace() {
    userArray.pop();
    document.getElementById("display").innerHTML = userArray.join("");
}

function buttonAC() {
    userArray = [];
    document.getElementById("display").innerHTML = '';
}

function buttonPercentage() {
    let join = userArray.join("")
    let num = Number(join)
    let result = num / 100;
    userArray = [];
    userArray.push(result)
    document.getElementById("display").innerHTML = num / 100;
}


function buttonEqual() {
    let join = userArray.join("");
    let result = eval(join)
    userArray = [];
    userArray.push(result);
    document.getElementById("display").innerHTML = eval(join);
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



