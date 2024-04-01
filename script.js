let countSpan = document.querySelector("#count");
let decrementBtn = document.querySelector(".decrement_btn");
let incrementBtn = document.querySelector(".increment_btn");
let clearBtn = document.querySelector(".clear_btn");
let error_div = document.querySelector(".error_div");

if (+countSpan.innerText === 0) {
    clearBtn.style.display = "none";
}

decrementBtn.addEventListener("click", () => {
    let count = +countSpan.innerText;
    if (count === 0) {
        clearBtn.style.display = "none";
        error_div.style.display = "block"
        return;
    }
    countSpan.innerText = count - 1;
});

incrementBtn.addEventListener("click", () => {
    let count = +countSpan.innerText;
    countSpan.innerText = count + 1;
    clearBtn.style.display = "block";
    if (++count > 0) {
        error_div.style.display = "none"
    }
});

clearBtn.addEventListener("click", () => {
    let count = +countSpan.innerText;

    countSpan.innerText = 0;
    clearBtn.style.display = "none";
});