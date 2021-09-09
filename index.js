let countEl = document.getElementById("count");

const addBtn = document.getElementById("addBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

addBtn.addEventListener("click", () => {
    let newCount = parseInt(countEl.textContent);
    newCount += 1;
    countEl.textContent = String(newCount)
});

decreaseBtn.addEventListener("click", () => {
    let newCount = parseInt(countEl.textContent);
    if (newCount != 0) {
        newCount -= 1;
        countEl.textContent = String(newCount)
    } else {
        return
    };
});

resetBtn.addEventListener("click", () => {
    let newCount = parseInt(countEl.textContent);
    newCount = 0;
    countEl.textContent = String(newCount)
});