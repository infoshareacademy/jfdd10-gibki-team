validateSubmit = function () {
    const form = document.querySelector(".formSubmit")
    const nameInput = document.querySelector(".name")
    const emailInput = document.querySelector(".email")

    form.addEventListener('submit', (event) => {
        if (nameInput.value === '') {
            event.preventDefault();
            nameInput.placeholder = "Please enter name";
            nameInput.classList.add('warning');
        }
        if (emailInput.value === '') {
            event.preventDefault();
            emailInput.placeholder = "Please enter email";
            emailInput.classList.add('warning');
        }
    })
}

validateSubmit();
