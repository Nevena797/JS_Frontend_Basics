// Basic delay function with callback
function delayStart(callback) {
    setTimeout(() => {
        callback();
    }, 2000);
}
console.log('start');
delayStart(() => console.log('delayStart'));
console.log('finish');

// Synchronous first, then asynchronous
function delayStart(callback) {
    setTimeout(() => {
        callback();
    }, 0);
}
console.log('start');
delayStart(() => console.log('delayStart'));
console.log('finish');
// Output:
// start
// finish
// delayStart

// Basic setTimeout example
console.log("Hello.");
setTimeout(function() {
    console.log("Goodbye!");
}, 2000);
console.log("Hello again!");
// Stack -> Queue

// Multiple delays with different times
console.log('start');

function delayStart(callback, time = 2000) {
    setTimeout(() => {
        callback();
    }, time);
}

delayStart(() => {
    console.log('delayStart1');
}, 2000);

delayStart(() => {
    console.log('delayStart2'); // Fixed: was 'delayStart1'
}, 1000);

delayStart(() => console.log('delayStart'));
console.log('finish');

// Callbacks - Function passed into another function as an argument
function running() {
    return "Running";
}

function category(run, type) { // Callback function
    console.log(run() + " " + type);
}

category(running, "sprint"); // Running sprint

// Promises

const weddingPromise = new Promise((resolve, reject) => {
    if (Math.random() > 0.3) {
        return reject('Sorry, It\'s me!');
    }

    setTimeout(() => {
        resolve('Just Married!');
    }, 5000);
});

console.log(weddingPromise);

weddingPromise
    .then(message => {
        console.log(message);
    })
    .catch(reason => {
        console.log(reason);
    });

// Promise.then() – Example
new Promise(function(resolve, reject) {
    setTimeout(function() {
        resolve('done'); // Before promise
    }, 500); // Resolved after 500 ms // After promise
})
    .then(function(res) {
        console.log('Then returned: ' + res); // Then returned: done
    });
console.log('After promise');

// Promise.catch() – Example
console.log('Before promise');

new Promise(function(resolve, reject) {
    setTimeout(function() {
        reject('fail');
    }, 500); // Rejected after 500 ms
})
    .then(function(result) {
        console.log(result);
    })
    .catch(function(error) {
        console.log(error);
    });

console.log('After promise');

// Always rejecting promise
const rejectingPromise = Promise.reject('Sorry next time');
console.log(rejectingPromise);
rejectingPromise.catch(message => console.log(message));

// Promise finally
weddingPromise
    .then((message) => {
        console.log(message);
    })
    .catch(message => {
        console.log(message);
    })
    .finally(() => {
        console.log('Love always wins!');
    });

// Multiple parallel promises
const createTimeoutPromise = function(message, time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time);
    });
};

const groupPromise = Promise.all([
    Promise.resolve('First Promise'),
    createTimeoutPromise('Second promise', 3000),
    createTimeoutPromise('Third promise', 1000),
    // Promise.reject('sorry next time') // Comment this out if you want all to resolve
]);

groupPromise
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });


const groupPromise = Promise.allSettled([
    Promise.resolve('First Promise'),
    createTimeoutPromise('Second promise', 3000),
    createTimeoutPromise('Third promise', 1000),
    // Promise.reject('sorry next time') // Comment this out if you want all to resolve
]);

groupPromise
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });

// AJAX
// fetch('./api/some.json')
//     .then(function(response) {…})
//     .catch(function(err) {…})

// Basic Fetch Request
fetch('/api/data')
    .then(response => {
        if (response.status !== 200) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(error) {
        console.error('Error:', error);
    });

// GET Request
fetch('https://api.github.com/users/testnakov/repos')
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.error(error));

// POST Request
const postData = { name: 'John', age: 30 };
fetch('/url', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// PUT Request
const putData = { name: 'John Updated', age: 31 };
fetch('/url/123', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(putData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// PATCH Request
const patchData = { age: 32 };
fetch('/url/123', {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(patchData),
})
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// DELETE Request
fetch('/url/123', {
    method: 'DELETE',
})
    .then(response => {
        if (response.ok) {
            console.log('Deleted successfully');
        }
    })
    .catch(error => console.error('Error:', error));

// Async Functions
// Expected output:
// calling
// resolved

function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

// Call the async function
asyncCall();

// Error Handling
async function f() {
    try {
        let response = await fetch('/api/data');
        let user = await response.json();
        console.log(user);
    } catch (err) {
        // catches errors both in fetch and response.json
        console.error(err);
    }
}

async function f2() {
    let response = await fetch('/api/data');
    return response.json();
}
// f2() becomes a rejected promise if fetch fails
f2().catch(console.error);

// Async/Await vs Promise.then
// Promise.then
function logFetch(url) {
    return fetch(url)
        .then(response => {
            return response.text();
        })
        .then(text => {
            console.log(text);
        })
        .catch(err => {
            console.error(err);
        });
}

// Async/Await
async function logFetchAsync(url) {
    try {
        const response = await fetch(url);
        const text = await response.text();
        console.log(text);
    } catch (err) {
        console.error(err);
    }
}

//Promise chaining
fetch(`${url}/people/1`)
.then((response) => response.json())
.then(data => console.log(data))
.catch(error => console.log('Something went wrong:'));

// using server to get books
fetch('https://localhost:3030/jsonstore/books')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err));
//fetch(bookSUrl,{
//    method:'POST',
//    headers:{
//       'Content-Type':'application/json'
//},
//body:JSON.stringify(
//        {
//           title:'My Book',
//           author:'Me',
//            publisher:'My Publisher'
//        })
//   )
//.then(res=>res.json())
//   .then(data=>console.log(data))
//   .catch(err=>console.log(err));

/// Edit book
// The Lion, the Witch and the Wardrobe
// fetch(`${booksUrl}/2d962e2b-d44d-4955-9382-154aee108d02`, {
//     method: 'PUT',
//     headers: {
//         'content-type': 'application/json',
//     },
//     body: JSON.stringify({
//         "title": "Chronicles of Narnia: The Lion, the Witch and the Wardrobe",
//         "author": "C.S.Lewis",
//         "_id": "2d962e2b-d44d-4955-9382-154aee108d02"
//     })
// })

// Delete book
// fetch(`${booksUrl}/3e6669e7-e0b4-401a-aa38-cefd20346480`, {
//     method: 'DELETE'
// })
//     .fetch(res => console.log(res))
//     .catch(err => console.log(err));



