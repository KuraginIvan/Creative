<<<<<<< HEAD
const btnPortfolio = document.querySelector(".btn-portfolio");
const contentPortfolio = document.querySelector(".content-portfolio");

btnPortfolio.addEventListener("click", btnClickFuture);

function btnClickFuture() {
    console.log(contentPortfolio.classList);

    if (contentPortfolio.classList.contains("hidden-portfolio")) {
        btnPortfolio.textContent = "HIDE";
    } else {
        btnPortfolio.textContent = "READ MORE";
    }

    contentPortfolio.classList.toggle("hidden-portfolio");
=======
const btnPortfolio = document.querySelector(".btn-portfolio");
const contentPortfolio = document.querySelector(".content-portfolio");

btnPortfolio.addEventListener("click", btnClickFuture);

function btnClickFuture() {
    console.log(contentPortfolio.classList);

    if (contentPortfolio.classList.contains("hidden-portfolio")) {
        btnPortfolio.textContent = "HIDE";
    } else {
        btnPortfolio.textContent = "READ MORE";
    }

    contentPortfolio.classList.toggle("hidden-portfolio");
>>>>>>> b02c0a9e0da9da8a704443e743266ab7d956aa5f
}