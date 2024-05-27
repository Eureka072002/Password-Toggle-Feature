let eye = document.querySelector("#eyeicon");
let pass = document.querySelector("#password");

eye.addEventListener("click", () => {
    if(pass.type === "password"){
        pass.type = "text"
    }else{
        pass.type = "password";
    }

})