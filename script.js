/* cursor start*/
const cursor = document.querySelector(".cursor");
let timeout;

// Follow cursor on mousemove
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + "px";
    cursor.style.left = x + "px";
    cursor.style.display = "block";

    // Cursor effects when mouse stopped
    function mouseStopped() {
        cursor.style.backgroundColor = "blue"; // Change color when mouse stops
    }
    clearTimeout(timeout);
    timeout = setTimeout(mouseStopped, 5000);
});

// Cursor effects when mouseout
document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});

// Optional: Change color on button hover
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("mouseenter", () => {
        cursor.style.backgroundColor = "green"; // Change color on button hover
    });
    button.addEventListener("mouseleave", () => {
        cursor.style.backgroundColor = "red"; // Reset color when leaving
    });
});
/* cursor start*/

/* audio start */
window.addEventListener('click', () => {
    document.getElementById("song").play()
});
/* audio start */

/* scroll reveal animation start */
const sr = ScrollReveal({
    origin: 'top',
    distance: '70px',
    duration: 1500,
    delay: 50,
    reset: true,
})

sr.reveal('.about-content h2')
sr.reveal('.about-content p', {origin: 'right', delay: 100})
sr.reveal('.about-img', {origin: 'left', delay: 300})
/* scroll reveal animation start */




// import { neonCursor } from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'

// neonCursor({
//   el: document.getElementById('app'),
//   shaderPoints: 16,
//   curvePoints: 80,
//   curveLerp: 0.5,
//   radius1: 5,
//   radius2: 30,
//   velocityTreshold: 10,
//   sleepRadiusX: 100,
//   sleepRadiusY: 100,
//   sleepTimeCoefX: 0.0025,
//   sleepTimeCoefY: 0.0025
// })
// /* scroll start */
// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         console.log(entry)
//         if (entry.isInteresting){
//             entry.target.classList.add('show');
//         } else {
//             entry.target.classList.remove('show');
//         }
//     })
// });


// const hiddenElements = document.querySelectorAll('.services');
// hiddenElements.forEach((el) => observer.observe(el));
// /* scroll end */