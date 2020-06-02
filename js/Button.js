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
}