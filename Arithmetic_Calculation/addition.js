const add = function(first, second) {
    let num1 = parseInt(first);
    let num2 = parseInt(second);

    let addtotal = (num1 + num2);
    //res.send(total)
    console.log(`Operation: Addition ==> ${num1} & ${num2} = ${addtotal}`);
    //return total;
}


module.exports = add;
