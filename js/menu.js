document.addEventListener("DOMContentLoaded", function(){
    // make it as accordion for smaller screens
    if (window.innerWidth < 992) {
    
      // close all inner dropdowns when parent is closed
      document.querySelectorAll('.navbar .dropdown').forEach(function(everydropdown){
        everydropdown.addEventListener('hidden.bs.dropdown', function () {
          // after dropdown is hidden, then find all submenus
            this.querySelectorAll('.submenu').forEach(function(everysubmenu){
              // hide every submenu as well
              everysubmenu.style.display = 'none';
            });
        })
      });
    
      document.querySelectorAll('.dropdown-menu a').forEach(function(element){
        element.addEventListener('click', function (e) {
            let nextEl = this.nextElementSibling;
            if(nextEl && nextEl.classList.contains('submenu')) {	
              // prevent opening link if link needs to open dropdown
              e.preventDefault();
              if(nextEl.style.display == 'block'){
                nextEl.style.display = 'none';
              } else {
                nextEl.style.display = 'block';
              }
    
            }
        });
      })
    }
    // end if innerWidth
    }); 
    // DOMContentLoaded  end

$(document).ready(function(){
    // Verifica el ancho de la pantalla cuando el documento está listo y cuando se redimensiona
    $(window).resize(function(){
        if($(window).width() <= 992) { // Cambia el ancho límite según tus necesidades
            // Quita la clase de tamaño md-8 y añade la clase de tamaño md-12
            $("#left-col").removeClass("col-md-8").addClass("col-md-12");
        } else {
            // Si la pantalla es más grande que 768px, vuelve a las clases originales
            $("#left-col").removeClass("col-md-12").addClass("col-md-8");
        }
    });
});