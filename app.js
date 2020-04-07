console.log('timers');

// var countdown = function(seconds) {
//     // count down however mayy secods..
//     console.log('lift off!!!')
// }

// countdown(10);
// // DOM API
// // timer API - builtin library in the browser

// setTimeout(fn, 5000);

// //clearTimeout(number) - number - return number from setTimeout

// //loop
// setInterval(fn, timeout)
// clearInterval(number)


// setTimeout(function() {}, 5000);
// setInterval(function(){}, 2000);


// REFACTORING!!!separation of concerns
// data
var startBtn = document.querySelector('.start-btn');
var pauseBtn = document.querySelector('.pause-btn');
var resetBtn = document.querySelector('.reset-btn');
var display = document.querySelector('.display');

var timerId = null; //falsey
var seconds = 0;

var handleStart = function() {
    if (timerId) {
        return;
    }
    timerId = setInterval(function() {
        seconds++;
        display.textContent = seconds;
    //display.textContent = Number(display.textContent) + 1; 
    }, 1000) 
}
    
var handlePause = function() {
    clearInterval(timerId);
    timerId = null;
}
    
var handleReset = function() {
    clearInterval(timerId)
    timerId = null;
    seconds = 0;
    display.textContent = seconds;
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
resetBtn.addEventListener('click', handleReset);

// startBtn.addEventListener('click', function() {
//     // ***** guard condition  *****
//     // if(already has a timer) {
//     //     quit the function
//     // }
//     if (timerId) {
//         return;
//     }

//     // start timer every second it updates the display
//     timerId = setInterval(function() {
//         //increment the display by 1
//         display.textContent = Number(display.textContent) + 1; 
//     }, 1000)
// })

// pauseBtn.addEventListener('click', function() {
//     clearInterval(timerId);
//     timerId = null;
// })

// resetBtn.addEventListener('click', function() {
//     // stop the timer
//     clearInterval(timerId)
//     // clear the content of the display
//     timerId = null;
//     display.textContent = 0;
// })


