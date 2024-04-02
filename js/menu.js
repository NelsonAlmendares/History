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


// Called in pages/page.html
function adjustImg() {
  var screenWidt = window.innerWidth;
  var imgView = document.querySelector('#img-bio');

  if (screenWidt <= 992) {
    imgView.classList.remove('img-fluid');
    imgView.classList.add('');
  } else {
    imgView.classList.remove('');
    imgView.classList.add('img-fluid');
  }
}

window.onload = adjustImg;
window.onresize = adjustImg;

function ToggleClassPhone() {
  var screenWidt = window.innerWidth;
  var tabView = document.querySelector('#publicidad__container');
  // Para el comentario
  var commentView = document.querySelector('#section__ouside');


  if (screenWidt <= 768) {
    tabView.classList.remove('d-flex');
    tabView.classList.add('');
  } else {
    tabView.classList.remove('');
    tabView.classList.add('d-flex');
  }
}

window.onload = ToggleClassPhone;
window.onresize = ToggleClassPhone;

function ToggleClassTablets() {
  var screenWidt = window.innerWidth;
  var tabView = document.querySelector('#left-col');
  // Para el comentario de la publicación
  var commentView = document.querySelector('#section__ouside');

  if (screenWidt < 992) {
    tabView.classList.remove('col-md-8');
    tabView.classList.add('col-md-12');

    // Mostrar el comentario en table 12
    commentView.classList.remove('col-md-8');
    commentView.classList.add('col-md-12');

  } else {
    tabView.classList.remove('col-md-12');
    tabView.classList.add('col-md-8');

    // Mostrar el comentario en table 12
    commentView.classList.remove('col-md-12');
    commentView.classList.add('col-md-8');
  }
}
window.onload = ToggleClassTablets;
window.onresize = ToggleClassTablets;