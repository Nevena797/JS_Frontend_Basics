function circleArea(input) {
    let result;
    let inputType = typeof (input);

    if (inputType === 'number') {
        result = Math.PI * input * input;
        result = result.toFixed(2);
    } else {
        result = `We can not calculate the circle area, because we receive a ${inputType}.`;
    }

    console.log(result);
}
console.log(circleArea(5));