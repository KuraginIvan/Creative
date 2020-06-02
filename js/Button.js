<<<<<<< HEAD
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "HIDE";
    } else {
        btn.textContent = "READ MORE";
    }

    content.classList.toggle("hidden");
=======
const btn = document.querySelector(".btn");
const content = document.querySelector(".content");

btn.addEventListener("click", btnClick);

function btnClick() {
    console.log(content.classList);

    if (content.classList.contains("hidden")) {
        btn.textContent = "HIDE";
    } else {
        btn.textContent = "READ MORE";
    }

    content.classList.toggle("hidden");
>>>>>>> b02c0a9e0da9da8a704443e743266ab7d956aa5f
}