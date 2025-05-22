console.log("Hello.");
setTimeout(function() {
    console.log("Goodbye!")
},2000);
console.log("Hello again!");

//Callbacks - function passed into another function as an argument
//Then invoked inside the outer function to complete some kind of routine or action
function running(){
    return "Running";
}
//Callback funktion
function category (run,type) {
    console.log(run() + " " + type);
}
category(running,"sprint"); //Running sprint

//Promises
//Objects Holding Asynchronous Operations
// A promise is an asynchronous action that may complete at some point
// and produce a value;
// Stages:
// Pending - operation still running (unfinished)
// Fulfilled - operation finished (the result is available)
// Failed - operation failed (an error is present)
// Promises use the Promise class
new Promise(executor);

// Constructor takes Executor funktion as parameter
// Executor -> resolve -> reject
// Promise resolves whit data or trows error
// resolve -> return data
// reject -> throw error
// Success callback -> then -> resolve ->return data
// Error callback -> catch -> reject -> throw error

new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('done');
    }, 500); // resolves after 500 ms
})
.then(function(res) {
    console.log()
})