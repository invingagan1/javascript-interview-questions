/**
 * @author - Gagan Deep Singh
 * var is functional scope
 * let is block scope
 */

var first = 10;
let second = 10;
console.log("first", first);
console.log("second", second);

if (true) {
    var first = 11; // defining var first will change the value of outer first variable as well.
    let second = 11; // Defining let second will not change the value of outer second variable.
    console.log("first", first);
    console.log("second", second);
}
console.log("first", first);
console.log("second", second);

/**
 * .call,.apply and .bind
 * call and apply => are used to execute the functions in given context
 * .bind => Returns the new function in given context
 */

function FunToChangeContext() {
    console.log(this.name)
}
var context = {
    name: "Gagan"
}
FunToChangeContext.call(context);
FunToChangeContext.apply(context);
var newfun = FunToChangeContext.bind(context);
newfun();