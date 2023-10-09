document.addEventListener("DOMContentLoaded", (event) => {
    
    // Seleccionar mis dos elemntos principales

    let mobile_btn = document.querySelector(".navbar__mobile-btn");
    let mobile_menu = document.querySelector(".menu-mobile");

    // Función mostrar y ocultar con clicks
    const showHiddenMenu = () => {
        
            let show = document.querySelector(".menu-mobile--show");
    
            if(show){
                mobile_menu.classList.remove("menu-mobile--show");
            }else{
                mobile_menu.classList.add("menu-mobile--show");
            }
        
    };

    // Al dar click en la bola gris que se abra y se cierre menu columna
    mobile_btn.addEventListener("click", showHiddenMenu);

    // Al redimensionar a grande que se oculte el menu columna auto
    window.addEventListener("resize", () => {
        let window_width = parseInt(document.body.clientWidth);

        if(window_width >= 1000){
            mobile_menu.classList.remove("menu-mobile--show");
        }  
    });

    // Poder cerrar el menú desde el btn X
    let btn_close = document.querySelector(".menu-mobile__close");

    btn_close.addEventListener("click", showHiddenMenu);


});