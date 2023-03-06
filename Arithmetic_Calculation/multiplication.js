const mul = function(first, second) {
    let num1 = parseInt(first);
    let num2 = parseInt(second);

    let multotal = (num1 * num2);
    //res.send(total)
    console.log(`Operation: Multiplication ==> ${num1} & ${num2} = ${multotal}`);
    //return total;
}


module.exports = mul;
