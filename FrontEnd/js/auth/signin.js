const mailInput = document.getElementById("emailInput");
const passwordinput =  document.getElementById("PasswordInput");
const btnSignin = document.getElementById("button-submit")

btnSignin.addEventListener("click", checkCredentials);

function checkCredentials(){
    if(mailInput.value == "test@gmail.com" && passwordinput.value == "123"){
        window.location.replace("/FrontEnd/accueil");

        const token ="151515151";
        setToken(token);
        
        //placer le token en cookie
        setCookie(RoleCookieName, "admin",7);


        alert("vous etes co ");
    }
    else{
        mailInput.classList.add("is-invalid");
        passwordinput.classList.add("is-invalid");
    }

}