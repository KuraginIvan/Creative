const btnTestimonials2 = document.querySelector(".btn-testimonials2");
const contentFlex3 = document.querySelector(".content-flex3");

btnTestimonials2.addEventListener("click", btnClickTestimonials2);

function btnClickTestimonials2() {
    console.log(contentFlex3.classList);

    if (contentFlex3.classList.contains("hidden-flex3")) {
        btnTestimonials2.textContent = "HIDE";
    } else {
        btnTestimonials2.textContent = "READ MORE";
    }

    contentFlex3.classList.toggle("hidden-flex3");
}