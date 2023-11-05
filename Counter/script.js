let increment = document.querySelector(".up-inner");
let decrement = document.querySelector(".down-inner");
let counting = document.querySelector(".counting");

let count = 0;

// ON ONE CLICK INCREAMENT IN COUNT BY 1

increment.addEventListener("click", () => {
    counting.innerHTML = count;
    count++;
});

// ON ONE CLICK DECREAMENT IN COUNT BY 1

decrement.addEventListener("click", () => {
    if (counting.innerHTML !== "0") {
        count--;
        counting.innerHTML = count;
    }
});

// ON ONE CLICK INCREAMENT START FROM 0 AND STOP AT 100 BY USING 'SetInterval Method'

increment.addEventListener("click", () => {
    let clear = setInterval(function () {
        counting.innerHTML = count;
        count++;
        if (counting.innerHTML == 100) {
            clearInterval(clear);
        }
    }, 10);
});

// ON ONE CLICK DECREAMENT START FROM 100 AND STOP AT 0 BY USING 'SetInterval Method'

decrement.addEventListener("click", () => {
    let dec = setInterval(function () {
        count--;
        counting.innerHTML = count;
        if (counting.innerHTML == 0) {
            clearInterval(dec);
        }
    }, 10);
});
