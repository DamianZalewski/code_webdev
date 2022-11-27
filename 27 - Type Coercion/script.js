const submit = document.querySelector(".submit");
const input = document.querySelector("input");
const errorMsg = document.querySelector(".error");
const successMsg = document.querySelector('.success');

submit.addEventListener("click", e => {
    e.preventDefault();
    const numberOfChildren = parseInt(input.value);
    const bool = true;

    errorMsg.textContent = "";
    successMsg.textContent = "";

    if(isNaN(numberOfChildren)){
        errorMsg.textContent = "Please enter number of children";
    }else{
        successMsg.textContent = "Success";
    }
})