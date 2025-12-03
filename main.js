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
    imgurl: "images/testimonials-test-avatar.png",
    name: "Ahmed Juad",
    time: "14 June, 2024",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero at nostrum voluptate dignissimos voluptatum veniam aperiam quisquam nobis aliquid id sunt fugit, facilis illum corrupti et cum dolore nam?",
  },
  JessicaMiller: {
    imgurl: "images/testimonials-test-avatar.png",
    name: "Mostafa Kamel",
    time: "17 September, 2021",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero at nostrum voluptate dignissimos voluptatum veniam aperiam quisquam nobis aliquid id sunt fugit, facilis illum corrupti et cum dolore nam?",
  },
  EmilyEvans: {
    imgurl: "images/testimonials-test-avatar.png",
    name: "Momel abed",
    time: "5 July, 2025",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero at nostrum voluptate dignissimos voluptatum veniam aperiam quisquam nobis aliquid id sunt fugit, facilis illum corrupti et cum dolore nam?",
  },
  HenryWilliams: {
    imgurl: "images/testimonials-test-avatar.png",
    name: "Ali Nasser",
    time: "25 November, 2022",
    testimonial:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt libero at nostrum voluptate dignissimos voluptatum veniam aperiam quisquam nobis aliquid id sunt fugit, facilis illum corrupti et cum dolore nam?",
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

const test = document.querySelector(".container main article.about");

const articles = document.querySelectorAll(".container main article");
const navButtons = document.querySelectorAll(
  ".container main nav ul li button"
);

navButtons.forEach((button) =>
  button.addEventListener("click", () => {
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    navButtons.forEach((button) => {
      button.classList.remove("active");
    });

    button.classList.add("active");

    articles.forEach((article) => {
      if (
        button.getAttribute("data-page") === article.getAttribute("data-page")
      ) {
        article.classList.add("active");
      }
    });
  })
);

const portfolioSelectButton = document.querySelector(
  ".portfolio .filter-button"
);
const portfolioSelectButtons = document.querySelectorAll(
  ".portfolio .filter-select-box ul.options button"
);
const portfolioButtons = document.querySelectorAll(
  ".portfolio .filter-list li button"
);
const portfolioSelectTitle = document.querySelector(
  ".portfolio .filter-select-box .filter-title"
);
const portfolioProjects = document.querySelectorAll(
  ".portfolio ul.projects li.project"
);

portfolioSelectButton.addEventListener("click", () => {
  portfolioSelectButton.classList.toggle("active");
  document
    .querySelector(".portfolio .filter-button [name='chevron-up']")
    .classList.toggle("active");
});

portfolioSelectButtons.forEach((selbutton) => {
  selbutton.addEventListener("click", () => {
    portfolioSelectTitle.textContent = selbutton.textContent;
    portfolioSelectButton.click();

    projectFilter(selbutton);
  });
});
portfolioButtons.forEach((selbutton) => {
  selbutton.addEventListener("click", () => {
    portfolioButtons.forEach((button) => button.classList.remove("active"));
    selbutton.classList.add("active")

    projectFilter(selbutton);
  });
});

function projectFilter(category) {
  portfolioProjects.forEach((project) => project.classList.remove("hide"));

  portfolioProjects.forEach((project) => {
    if (!project.classList.contains(category.id) && category.id !== "all") {
      project.classList.add("hide");
    }
  });
}


const contactForm = document.querySelector("article.contact section.contact-form form")
const contactInputs = document.querySelectorAll("article.contact section.contact-form form .data-form-input")
const contactButton = document.querySelector("article.contact section.contact-form button.form-button")

for(let i = 0; i < contactInputs.length; i++) {
  contactInputs[i].addEventListener("input", () => {
    if (contactForm.checkValidity()) {
      contactButton.removeAttribute("disabled")
    } else {
      contactButton.setAttribute("disabled", "")
    }
  })
}