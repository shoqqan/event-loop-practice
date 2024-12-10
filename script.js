// TASK 1
console.log("Начало");

setTimeout(() => {
    console.log("setTimeout 1");
}, 0);

console.log("Конец");

// начало
// setTimeout 1
// конец

// TASK 2

console.log("A");

setTimeout(() => {
    console.log("B");
}, 100);

console.log("C");

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

// A C E D B

//TASK 3

console.log("Начало");

setTimeout(() => {
    console.log("Таймаут");
}, 0);

Promise.resolve().then(() => {
    console.log("Промис выполнен");
});

console.log("Конец");

// Начало Конец Промис выполнен Таймаут


// TASK 4
console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
}).then(() => {
    console.log("4");
});

setTimeout(() => {
    console.log("5");
}, 0);

console.log("6");

// 1 6 3 4 2 5


// TASK 5

console.log("Start");

queueMicrotask(() => {
    console.log("Microtask");
});

setTimeout(() => {
    console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise");
});

console.log("End");

// Start End Microtask Promise Timeout

// TASK 6

console.log("A");

Promise.resolve().then(() => {
    console.log("B");
    return Promise.resolve();
}).then(() => {
    console.log("C");
});

setTimeout(() => {
    console.log("D");
}, 0);

console.log("E");

// A E B C D

// TASK 7


console.log("Начало");

async function test() {
        console.log("Inside async");
        await Promise.resolve();
        console.log("After await");
}

test();

console.log("Конец");

// Начало Inside async Конец After await

// TASK 8

console.log("1");

setTimeout(() => {
    console.log("2");
}, 0);

Promise.resolve().then(() => {
    console.log("3");
    return Promise.resolve();
}).then(() => {
    console.log("4");
});

(async () => {
    console.log("5");                //IIFE
    await Promise.resolve();
    console.log("6");
})();

console.log("7");

setTimeout(() => {
    console.log("8");
}, 0);

// sync code: 1 5 7
// microtask queue: 3, 4, 6
// macrotask queue: 2 8

// 1 5 7 3 4 6 2 8



// TASK 9 PRACTICE SITUATION

console.log("Скрипт стартовал");

document.body.addEventListener('click', () => {
    console.log("Обработчик клика");
});

Promise.resolve().then(() => {
    console.log("Промис 1");
}).then(() => {
    console.log("Промис 2");
});

// Имитация клика (можно представить, что это код в браузере)
setTimeout(() => {
    document.body.dispatchEvent(new Event('click'));
    console.log("Событие клика вызвано программно");
}, 0);

console.log("Скрипт завершён");
// скрипт стартовал - скрипт завершен - пром 1 - промис 2- обработчик клика- событие





// TASK 10
console.log(1);

setTimeout(() => console.log(2), 0);

Promise.resolve().then(() => console.log(3));

Promise.resolve().then(() => setTimeout(() => console.log(4), 0));

Promise.resolve().then(() => console.log(5));

setTimeout(() => console.log(6), 0);

console.log(7);

// SYNC: 1 7
// MICRO: 3 5
// MACRO: 2 6 4

// 1 7 3 5 2 6 4





// TASK 11


Promise.resolve().then(() => console.log(1));
Promise.resolve().then(() => setTimeout(() => console.log(2), 0));
Promise.resolve().then(() => console.log(3));
setTimeout(() => console.log(4), 0);

// 1 3 4 2


// TASK 12


async function test() {
    console.log(1);
    await Promise.resolve();
    console.log(2);
}

test();
console.log(3);
Promise.resolve().then(() => console.log(4));

// 1 3 2 4


//TASK 13

function addToMicrotaskQueue() {
    Promise.resolve().then(() => {
        console.log('Microtask');
        addToMicrotaskQueue();
    });
}
addToMicrotaskQueue();
setTimeout(() => console.log('Timeout'), 0);

// TASK 14

function log(value){
    console.log(value)
}

log('1')

setTimeout(()=>{
    console.log('setTimeout 1')
    Promise.resolve().then(()=>{
        log('promise setTimeout')
    })
},0)

setTimeout(()=>{
    log('setTimeout 2')
},0)

Promise.resolve().then(()=>{
    log('promise 1')
})

// 1 promise1, set1, promiseset, set2



//MUTATION OBSERVER

// let counter =0 ;
// const btn = document.getElementById('btn');
// const main = document.querySelector('main');
// btn.addEventListener('click',()=> {
//    counter +=1;
//    const outputDiv = document.createElement('div');
//    outputDiv.textContent=counter;
//    main.prepend(outputDiv);
// })
//
// const mutationObserver = new MutationObserver((mutations)=>{
//     console.log(mutations)
// })
//
// mutationObserver.observe(main,{
//     subtree:true,
//     childList:true
// })
//
