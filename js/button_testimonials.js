const btnTestimonials = document.querySelector(".btn-testimonials1");
const contentFlex1 = document.querySelector(".content-flex1");

btnTestimonials.addEventListener("click", btnClickTestimonials);

function btnClickTestimonials() {
    console.log(contentFlex1.classList);

    if (contentFlex1.classList.contains("hidden-flex1")) {
        btnTestimonials.textContent = "HIDE";
    } else {
        btnTestimonials.textContent = "READ MORE";
    }

    contentFlex1.classList.toggle("hidden-flex1");
}