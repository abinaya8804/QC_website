//event-section
const eventSlider = document.getElementById('eventSlider');
const eventCards = document.querySelectorAll('.event-card');
const cardWidth = eventCards[0].offsetWidth + 20; // Include margin/padding if any
let currentPosition = 0;

function slideLeft() {
    currentPosition -= cardWidth;
    if (currentPosition < 0) {
        currentPosition = 0;
    }
    eventSlider.style.transform = `translateX(-${currentPosition}px)`;
    eventSlider.style.transition = 'transform 0.5s ease-in-out'; // Add transition
}

function slideRight() {
    currentPosition += cardWidth;
    if (currentPosition > cardWidth * (eventCards.length - 1)) {
        currentPosition = cardWidth * (eventCards.length - 1);
    }
    eventSlider.style.transform = `translateX(-${currentPosition}px)`;
    eventSlider.style.transition = 'transform 0.5s ease-in-out'; // Add transition
}

let autoSlideInterval;
let slideIncrement = 0.5; // Increment by 1 pixel

function autoSlide() {
    currentPosition += slideIncrement;
    if (currentPosition > cardWidth * (eventCards.length - 1)) {
        currentPosition = 0; // Reset to the beginning
    }
    eventSlider.style.transform = `translateX(-${currentPosition}px)`;
    eventSlider.style.transition = 'transform 0.01s linear'; // Very fast, linear transition
}

function startAutoSlide() {
    autoSlideInterval = setInterval(autoSlide, 10); // 10 milliseconds interval
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

startAutoSlide();

// Swiper init
const swiperConfig = {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 2500,
  },
  breakpoints: {
    768: { slidesPerView: 2 },
    576: { slidesPerView: 1 },
  }
};

let swiper = new Swiper('.mySwiper', swiperConfig);

// Modal Logic
function openModal(el) {
  const imgSrc = el.querySelector('img').src;
  document.getElementById('modalImage').src = imgSrc;
  new bootstrap.Modal(document.getElementById('imgModal')).show();
}

function filterGallery(category) {
  const slides = document.querySelectorAll('.swiper-slide');

  // First, destroy the existing swiper instance
  if (swiper) swiper.destroy(true, true);

  // Show or hide slides based on category
  slides.forEach(slide => {
    if (category === 'all' || slide.classList.contains(category)) {
      slide.style.display = 'block';
    } else {
      slide.style.display = 'none';
    }
  });

  // Re-initialize swiper
  swiper = new Swiper('.mySwiper', swiperConfig);
}

// Initialize AOS
AOS.init({
  duration: 800,
  once: true
});


document.getElementById("teamBtn").addEventListener("click", function () {
  document.getElementById("aboutText").innerHTML = `
    <div class="swiper myTeamSwiper">
      <div class="swiper-wrapper">

        <div class="swiper-slide">
          <h4>Chairperson</h4>
          <p><b>Abinaya G</b></p>
          <p>Final Year, Robotics and Automation</p>
        </div>

        <div class="swiper-slide">
          <h4>Vice Chairperson</h4>
          <p><b>Albin Joseph Edwards G</b></p>
          <p>Pre-Final Year, Artificial Intelligence and Data Science</p>
        </div>

        <div class="swiper-slide">
          <h4>Treasurer</h4>
          <p><b>Sindhuja S</b></p>
          <p>Final Year, Computer Science and Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Joint Secretary</h4>
          <p><b>Divya Prakash N S</b></p>
          <p>Pre-Final Year, Aeronautical Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Curation Head</h4>
          <p><b>Subhi K</b></p>
          <p>Final Year, Computer Science and Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Curation Head</h4>
          <p><b>Pradeesh Vel Nirmal V</b></p>
          <p>Pre-Final Year, Aeronautical Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Design Head</h4>
          <p><b>Gopika B</b></p>
          <p>Final Year, Automobile Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Design Head</h4>
          <p><b>Kiruthika A</b></p>
          <p>Final Year, Computer Science and Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Media & Marketing Head</h4>
          <p><b>Saravanan T S</b></p>
          <p>Final Year, Computer Science and Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Media & Marketing Head</h4>
          <p><b>Mohana M</b></p>
          <p>Final Year, Computer Science and Engineering</p>
        </div>

        <div class="swiper-slide">
          <h4>Public Relations Head</h4>
          <p><b>Ruparagunath G</b></p>
          <p>Pre-Final Year, Artificial Intelligence and Data Science</p>
        </div>

      </div>
      <!-- Add Pagination + Navigation -->
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  `;

  // Swiper Init for Team
  new Swiper(".myTeamSwiper", {
    loop: true,
    autoplay: {
      delay: 3000, // 3 seconds auto-slide
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade", // smooth fade effect
  });

  this.classList.add("btn-active");
  document.getElementById("missionBtn").classList.remove("btn-active");
  document.getElementById("visionBtn").classList.remove("btn-active");
});
