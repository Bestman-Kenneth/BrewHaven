const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    });

}

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const speed = target / 100;

        const update = () => {

            if (count < target) {

                count += speed;

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    });

};

const stats = document.querySelector(".stats");

let started = false;

if (stats) {

    window.addEventListener("scroll", () => {

        const trigger = stats.offsetTop - window.innerHeight + 100;

        if (window.scrollY > trigger && !started) {

            startCounter();

            started = true;

        }

    });

}

const contactForm = document.querySelector(".contact-form");
const reservationMessage = document.getElementById("reservationMessage");

if (contactForm && reservationMessage) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        reservationMessage.classList.add("show");

        contactForm.reset();

        setTimeout(() => {

            reservationMessage.classList.remove("show");

        }, 4000);

    });

}