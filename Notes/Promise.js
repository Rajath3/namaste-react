// Promise.all

// Promise.all([takes iterable/ array])

// All success case:

// Suppose we have 3 promises p1, p2 and p3.
// Now p1 takes 3s, p2 takes 2s and p3 says 1s.
// Promise.all([p1, p2, p3]) will take 3s. Because it waits for all promise to be resolved.

// Suppose anyone fails:
// Promise.all will fail/throw error with promise that didn't resolve.

// Promise.all is like fail fast.

// ----

// Suppose we want all the promises to get resolved, no matter if they resolve or reject. Then we use

// Promise.allSettled([p1, p2, p3]) -- returns an object

// ----

// Promise.race([p1, p2, p3])

// p1 - 2s
// p2 - 3s
// p3 - 1s

// This is return value returned from first returned promise. In this case p3.

// If p3 fails, error is thrown from p3.

// ----

// Promise.any([p1, p2, p3])

// p1 - 2s
// p2 - 3s
// p3 - 1s

// This will return p3's value if it gets resolved. Else return first resolved promise.

// If all of them fails, then an aggregated error message is thrown.

// Seeking the first success.

// -----

// Lingos:

// - Settled
//     - Resolve
//     - Success
//     - fulfilled

//     - Reject
//     - Failure
//     - Rejected


// Promise.all if all passes
const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('P1 Pass'), 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('P2 Pass'), 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('P3 Pass'), 1000)
})

Promise.all([p1, p2, p3]).then(
    (res) => 
    console.log(res)).catch(
        (err) => 
    console.log("Error: " + err
    ))

// Output: ["P1 Pass", "P2 Pass", "P3 Pass"]


// Promise.all if anyone fails

const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('P1 Pass'), 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('P2 Pass'), 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('P3 Fail'), 1000)
})

Promise.all([p1, p2, p3]).then(
(res) => 
console.log(res)).catch((err) => console.log("Error: " + err))

// Output: "Error: P3 Fail"


// Promise.allSettled 

const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('P1 Pass'), 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('P2 Pass'), 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('P3 Fail'), 1000)
})

Promise.all([p1, p2, p3]).then(
(res) => 
console.log(res)).catch((err) => console.log("Error: " + err))

// [{
//     status: "fulfilled",
//     value: "P1 Pass"
//   }, {
//     status: "fulfilled",
//     value: "P2 Pass"
//   }, {
//     reason: "P3 Fail",
//     status: "rejected"
//   }]

// Promise.race

const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('P1 Pass'), 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('P2 Pass'), 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('P3 Fail'), 1000)
})

Promise.race([p1, p2, p3]).then(
(res) => 
console.log(res)).catch((err) => console.log("Error: " + err))

// Output: "Error: P3 Fail"


// Promise.any

const p1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('P1 Pass'), 2000)
})

const p2 = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('P2 Pass'), 3000)
})

const p3 = new Promise((resolve, reject) => {
    setTimeout(()=> reject('P3 Fail'), 1000)
})

Promise.any([p1, p2, p3]).then(
(res) => 
console.log(res)).catch((err) => console.log("Error: " + err))


// Output: "P1 Pass"


