// This is the main Node.js source code file of your actor.
// An actor is a program that takes an input and produces an output.

// For more information, see https://sdk.apify.com/
import { Actor } from 'apify';

await Actor.init()

console.log('Loading input');
// Structure of input is defined in INPUT_SCHEMA.json.
const input = await Actor.getInput();
console.log('First number: ', input?.firstNumber);
console.log('Second number: ', input?.secondNumber);

// 👉 Complete the code so that result is
// the sum of firstNumber and secondNumber.
// 👇👇👇👇👇👇👇👇👇👇
const result = input?.firstNumber + input?.secondNumber;
// 👆👆👆👆👆👆👆👆👆👆

console.log('The result is: ', result);

// Structure of output is defined in .actor/actor.json
await Actor.pushData({
    firstNumber: input?.firstNumber,
    secondNumber: input?.secondNumber,
    sum: result,
});
await Actor.pushData({
    firstNumber: input?.firstNumber * 2,
    secondNumber: input?.secondNumber * 2,
    sum: result * 2,
});
await Actor.pushData({
    firstNumber: input?.firstNumber * 3,
    secondNumber: input?.secondNumber * 3,
    sum: result * 3,
});

await Actor.exit();
