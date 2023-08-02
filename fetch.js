ScrollReveal({
    reset: true,
    distance: '80px',
    duration:2000,
    delay:200
});

//---------------home-scroll-------------------//
ScrollReveal().reveal('.home-content ',{ origin: 'left' });
ScrollReveal().reveal('.home-img ',{ origin: 'right' });

//---------------card-scroll-------------------//
ScrollReveal().reveal('.main-card ',{ origin: 'top' });

//---------------Client-scroll-------------------//

ScrollReveal().reveal('.client-img' , {origin : 'left'});
ScrollReveal().reveal('.client-text' , {origin : 'right'});

//---------------Main--service-box-scroll-------------------//
ScrollReveal().reveal('.main-service-box' , {origin : 'top'});

//---------------contact-scroll-------------------//
ScrollReveal().reveal('.white-side' , {origin : 'top'});
ScrollReveal().reveal('.blue-side' , {origin : 'bottom'});

//---------------Footer-scroll-------------------//
ScrollReveal().reveal('.footer' , {origin : 'left'});

//------------Main---Footer-scroll-------------------//
ScrollReveal().reveal('.main-footer' , {origin : 'right'});