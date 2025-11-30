const sidebarButton = document.querySelector(".show-contacts");

sidebarButton.addEventListener("click", () => {
  document.querySelector("aside.sidebar").classList.toggle("active");
  document.querySelector(".sidebar-info-more").classList.toggle("active");
});

const testimonialsShowCard = document.querySelector(".testimonials-card");
const testimonialsCards = document.querySelectorAll(
  ".testimonials .testimonials-list li"
);
const testimonialsCardExitButton = document.querySelector(
  ".testimonials-card .exit-button"
);
const testimonialsCardOverlay = document.querySelector(
  ".testimonials-card .overlay"
);

let testimonialsInfo = {
  DanielLewis: {
    imgurl: "https://i.postimg.cc/zGDHfn3G/avatar-1.png",
    name: "Daniel Lewis",
    time: "14 June, 2024",
    testimonial:
      "Richard was hired to create a corporate identity. It's modern, clean and with a beautiful design that got a lot of praises from colleagues and visitors. We were very pleased with the work done. He has a lot of experience and is very concerned about the needs of client",
  },
  JessicaMiller: {
    imgurl: "https://i.postimg.cc/DwY0yHtx/avatar-2.png",
    name: "Jessica Miller",
    time: "17 September, 2021",
    testimonial:
      "Working with Richard has been an absolute pleasure. I was impressed with his attention to detail, his web design skills and his professional approach to our timelines and processes.",
  },
  EmilyEvans: {
    imgurl: "https://i.postimg.cc/fRFWhX9F/avatar-3.png",
    name: "Emily Evans",
    time: "5 July, 2025",
    testimonial:
      "I couldn't be happier with the website that Richard created for us. His attention to detail and creativity is unmatched. Our clients frequently compliment the design, and it has significantly improved our brand image.",
  },
  HenryWilliams: {
    imgurl: "https://i.postimg.cc/zXv1Xv81/avatar-4.png",
    name: "henry Williams",
    time: "25 November, 2022",
    testimonial:
      "I was overwhelmed with the thought of redesigning my online store, but Richard made the process seamless. The site is not only visually appealing but also optimized for conversions. I've seen a 50% increase in traffic since the launch!",
  },
};

testimonialsCards.forEach((e) => {
  // e.getAttribute("data-name")

  e.addEventListener("click", () => {
    document.querySelector(".testimonials-card img").src =
      testimonialsInfo[e.getAttribute("data-name")].imgurl;
    document.querySelector(".testimonials-card h4").textContent =
      testimonialsInfo[e.getAttribute("data-name")].name;
    document.querySelector(".testimonials-card time").textContent =
      testimonialsInfo[e.getAttribute("data-name")].time;
    document.querySelector(".testimonials-card p").textContent =
      testimonialsInfo[e.getAttribute("data-name")].testimonial;

    testimonialsShowCard.classList.add("active");
  });
});

testimonialsCardExitButton.addEventListener("click", () =>
  testimonialsShowCard.classList.remove("active")
);
testimonialsCardOverlay.addEventListener("click", () =>
  testimonialsShowCard.classList.remove("active")
);


const articles = document.querySelectorAll(".container main article")
const navButtons = document.querySelectorAll('.container main nav ul li button')




