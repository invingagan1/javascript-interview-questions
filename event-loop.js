/**
 * Event Loop : it will watch the queue and push the callback into stack as soon as it is empty. 
 * Web-Api: Apis provided by browser or node.js
 * Call back queue: Every call back will be pushed callback queue
 * Call Stack: Event execution is posted into call stack.
 * 
 * Reference Link: https: //www.youtube.com/watch?v=8aGhZQkoFbQ&vl=en
 */
(function () {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () {
            console.log(i);
        }, 1000);
    }
})();
/**
 * example of event loop, call stack, callback queue and web apis
 * ES-5 solution
 */
(function () {
    for (var i = 0; i < 10; i++) {
        setTimeout((function (i) {
                return function () {
                    console.log(i);
                }
            })(i),
            1000);
    }
})();

/**
 * same problem solved with  es6 
 */
(() => {
    for (let i = 0; i < 10; i++) {
        setTimeout(() => console.log(i), 1000)
    }
})();