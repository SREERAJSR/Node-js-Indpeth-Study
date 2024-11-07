
console.log('this is sum file');

function sum(a,b) {
    console.log(a + b);
}

function sum3Number(a, b, c) {
    console.log(a+b+c)
}
module.exports = {
    sum: sum,
    sum3:sum3Number
}