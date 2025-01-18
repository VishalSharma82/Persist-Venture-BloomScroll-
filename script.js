// Lottie Animation in Hero Section
lottie.loadAnimation({
  container: document.getElementById("hero-animation"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "https://assets10.lottiefiles.com/packages/lf20_qqt9mcld.json", // Replace with your JSON path
});

document.querySelectorAll(".icon-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.classList.add("hover");
  });

  item.addEventListener("mouseleave", () => {
    item.classList.remove("hover");
  });
});

document
  .querySelectorAll(".interactive-card .card-text p")
  .forEach((option) => {
    option.addEventListener("click", function () {
      const imageUrl = this.getAttribute("data-image");
      const cardImage =
        this.closest(".interactive-card").querySelector(".card-image");
      cardImage.src = imageUrl;
    });
  });

// Selectors for the slider functionality
const customCardContainer = document.querySelector(
  ".custom-hover-card-container"
);
const customPrevButton = document.querySelector(".custom-prev-btn");
const customNextButton = document.querySelector(".custom-next-btn");

// Scroll left when the previous button is clicked
customPrevButton.addEventListener("click", () => {
  customCardContainer.scrollBy({
    left: -300, // Adjust scroll distance as needed
    behavior: "smooth",
  });
});

// Scroll right when the next button is clicked
customNextButton.addEventListener("click", () => {
  customCardContainer.scrollBy({
    left: 300, // Adjust scroll distance as needed
    behavior: "smooth",
  });
});


//new

const prevBtn = document.querySelector('.custom-prev-btn');
const nextBtn = document.querySelector('.custom-next-btn');
const cardContainer = document.querySelector('.custom-hover-card-container');

prevBtn.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: -300, // Adjust the scroll distance
    behavior: 'smooth',
  });
});

nextBtn.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: 300, // Adjust the scroll distance
    behavior: 'smooth',
  });
});

  const timelineFill = document.querySelector(".timeline-fill");
  const timelinePoints = document.querySelectorAll(".timeline-point");
  const details = document.querySelector(".details");
  const human = document.querySelector(".human");

  const updateTimeline = () => {
    const scrollPercentage =
      window.scrollY / (document.body.scrollHeight - window.innerHeight);
    const fillHeight = scrollPercentage * 150;

    // Update timeline fill height
    timelineFill.style.height = `${fillHeight}%`;

    // Move the human along the line
    const humanTop = Math.min(140, fillHeight); // Ensure it doesn't exceed the path
    human.style.top = `${humanTop}%`;

    // Highlight points and update details
    timelinePoints.forEach((point) => {
      const pointPosition = parseInt(point.style.top);
      if (fillHeight >= pointPosition) {
        point.classList.add("highlighted");
      } else {
        point.classList.remove("highlighted");
      }
    });

    // Update details dynamically based on scroll
    if (fillHeight >= 100) {
      details.innerHTML = `
        <h2>Age 100</h2>
        <p>Prime of reinvention.</p>
      `;
    }else if (fillHeight >= 75) {
      details.innerHTML = `
        <h2>Age 75</h2>
        <p>Mastering life’s challenges.</p>
      `;
    } else if (fillHeight >= 50) {
      details.innerHTML = `
        <h2>Age 50</h2>
        <p>Mastering life’s challenges.</p>
      `;
    } else if (fillHeight >= 25) {
      details.innerHTML = `
        <h2>Age 25</h2>
        <p>Full of ambition.</p>
      `;
    } else {
      details.innerHTML = `
        <h2>Born</h2>
        <p>Start of infinite possibilities.</p>
      `;
    }
  };

  window.addEventListener("scroll", updateTimeline);


  // Fade-in Animation for Cards
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target); // Stop observing once animated
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  observer.observe(card);
});
