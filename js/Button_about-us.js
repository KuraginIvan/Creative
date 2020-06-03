let btnAboutUs = document.querySelector(".btn-lorem_ipsum");
let contentAboutUs = document.querySelectorAll(".content_about_us");

btnAboutUs.addEventListener("click", btnClickAboutUs);

function btnClickAboutUs() {
    for (let btnAboutUs of contentAboutUs) btnAboutUs.classList.toggle("hidden-about_us");

    btnAboutUs.textContent = btnAboutUs.textContent === "READ MORE" ? "HIDE" : "HIDE";
}
