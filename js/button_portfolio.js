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
}