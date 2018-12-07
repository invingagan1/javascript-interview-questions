/**
 * Example of promise
 */
var p = new Promise((res, rej) => {
    setTimeout(() => {
        res('done');
    }, 300);
});
p.then(
    d => console.log(d),
    e => console.error(e)
);

async function asyncFun() {
    const p = new Promise((res, rej) => {
        setTimeout(() => rej(Date.now()), 1000);
    });
    try {
        return await p;
    } catch (e) {
        return Promise.reject(new Error('error in async/await'));
    }

}
asyncFun().then(console.log).catch(console.error);