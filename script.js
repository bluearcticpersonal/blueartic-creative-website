   document.querySelectorAll('nav a').forEach(link => {
     link.addEventListener('click', function(e) {
       e.preventDefault();
       const targetId = this.getAttribute('href');
       document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
     });
   });

      document.querySelector('.btn-primary').addEventListener('click', function() {
     document.querySelector('#services').scrollIntoView({ behavior: 'smooth' });
   });
   
   const floatingServices = document.querySelectorAll(".ba-service");

let mouseX = 0;
let mouseY = 0;

let currentX = 0;
let currentY = 0;


/* ==========================================
   TRACK MOUSE
   ========================================== */

document.addEventListener("mousemove", function (e) {

    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;

});


/* ==========================================
   UNIQUE MOVEMENT FOR EACH WORD
   ========================================== */

const movementSettings = [

    /* Video Editing */
    {
        x: 1.4,
        y: 0.8,
        rotate: 8,
        speed: 0.10
    },

    /* Graphics Design */
    {
        x: 0.7,
        y: 1.5,
        rotate: -7,
        speed: 0.13
    },

    /* Web Development */
    {
        x: -1.3,
        y: 0.6,
        rotate: 6,
        speed: 0.09
    },

    /* Digital Marketing */
    {
        x: -1.5,
        y: 1.0,
        rotate: -8,
        speed: 0.12
    },

    /* Social Media Management */
    {
        x: -0.8,
        y: -1.4,
        rotate: 7,
        speed: 0.11
    },

    /* Advertising */
    {
        x: 1.2,
        y: -1.5,
        rotate: -6,
        speed: 0.14
    },

    /* Branding */
    {
        x: 1.5,
        y: -0.7,
        rotate: 9,
        speed: 0.10
    }

];


/* ==========================================
   ANIMATION
   ========================================== */

function animateServices() {

    floatingServices.forEach(function (service, index) {

        const settings =
            movementSettings[index];


        /*
         * Unique movement
         */

        const targetX =
            mouseX *
            65 *
            settings.x;

        const targetY =
            mouseY *
            55 *
            settings.y;


        /*
         * Smooth following
         */

        const currentTransform =
            service.dataset.transformX || 0;


        /*
         * Apply movement
         */

        service.style.transform = `
            translate3d(
                ${targetX}px,
                ${targetY}px,
                0
            )
            rotate(
                ${mouseX * settings.rotate}deg
            )
        `;

    });


    requestAnimationFrame(animateServices);
}


animateServices();


