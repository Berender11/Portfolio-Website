//Toggle icon Navbar
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
const service_id = "service_5ksbf9g";
const template_id = "template_g8mr3s9";

menuIcon.onclick = () => {
    menuIcon.classList.toggle("fa-xmark");
    navbar.classList.toggle("active");
}

//Scroll section active link
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            });
        };
    });

    //Sticky Navbar
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    //Remove toggle icon and navbar
    menuIcon.classList.remove("fa-xmark");
    navbar.classList.remove("active");
};

//Scroll Reveal
ScrollReveal({
    distance: "80px",
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal(".home-container, heading", { origin: "top" });
ScrollReveal().reveal(".home-image, .services-container, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-contact h1, .about", { origin: "left" });
ScrollReveal().reveal(".home-contact p, .about-content", { origin: "right" });

function sendMail() {
    // preventDefault();
    var params = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };


    emailjs.send(service_id, template_id, params)
        .then(function (res) {
                document.getElementById("name").value = "";
                document.getElementById("email").value = "";
                document.getElementById("message").value = "";
                console.log(res);
                alert("Message sent successfully");
            })
        .catch((err) => console.log(err));
}