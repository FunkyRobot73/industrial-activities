const div = function(first, second) {
    let num1 = parseInt(first);
    let num2 = parseInt(second);

    let divtotal = (num1 / num2);
    //res.send(total)
    console.log(`Operation: Division ==> ${num1} & ${num2} = ${divtotal}`);
    //return total;
}

module.exports = div;