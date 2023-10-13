document.addEventListener("DOMContentLoaded", () =>{
    let switcher =document.querySelector(".switcher__btn");
    let light =document.querySelector(".switcher__icon-light");
    let dark =document.querySelector(".switcher__icon-dark");


    switcher.addEventListener("click", () => {
        let head = document.head;

        let link = document.createElement("link");
        link.rel = "stylesheet";
        link.type = "text/css";
        link.href = "./resources/css/dark.css";
        link.id = "theme-dark";

        let theme_dark = document.querySelector("#theme-dark");
        if(theme_dark){
            head.removeChild(theme_dark);
            dark.style.display = "none";
            light.style.display = "block";
        }else{
            head.appendChild(link);
            dark.style.display = "block";
            light.style.display = "none";
        }

        let logoLight = document.querySelector('.navbar__logo-light');
        let logoDark = document.querySelector('.navbar__logo-dark');
        if (theme_dark) {
            logoLight.style.display = "block";
            logoDark.style.display = "none";
        } else {
            logoLight.style.display = "none";
            logoDark.style.display = "block";
        }

        let logoLight1 = document.querySelector('.logo1');
        let logoDark2 = document.querySelector('.logo2');
        if (theme_dark) {
            logoLight1.style.display = "block";
            logoDark.style.display = "none";
        } else {
            logoLight1.style.display = "none";
            logoDark2.style.display = "block";
        }
        
    })
})