"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const arrNum = [];
const arrString = [];
function add(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
}
function printResult(resultObj) {
    console.log(resultObj.val, resultObj.timeStamp);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const numberValue = add(+num1, +num2);
    arrNum.push(numberValue);
    const stringValue = add(num1, num2);
    arrString.push(stringValue);
    console.log('number', numberValue);
    console.log('string', stringValue);
    printResult({ val: numberValue, timeStamp: new Date() });
    console.log(arrNum, arrString);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('it worked');
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('w'));
});
