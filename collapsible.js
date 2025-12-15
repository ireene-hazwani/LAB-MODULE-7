const buttons = document.querySelectorAll(".collapsible");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const content = this.nextElementSibling;
        const icon = this.querySelector(".icon");

        content.classList.toggle("active");

        if (content.classList.contains("active")) {
            icon.textContent = "-";
        } else {
            icon.textContent = "+";
        }
    });
});