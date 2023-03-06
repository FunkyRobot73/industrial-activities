const sub = function(first, second) {
    let num1 = parseInt(first);
    let num2 = parseInt(second);

    let subtotal = (num1 - num2);
    //res.send(total)
    console.log(`Operation: Subtraction ==> ${num1} & ${num2} = ${subtotal}`);
    //return total;
}


module.exports = sub;
