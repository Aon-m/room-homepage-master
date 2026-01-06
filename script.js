const move = (function () {
  let currentIndex = 0;

  // Elements
  const title = document.querySelector("#title"),
    description = document.querySelector("#description"),
    largeImg = document.querySelector("#large-image"),
    smallImg = document.querySelector("#small-image");

  // Data arrays
  const largeImgSrc = [
    "./assets/images/desktop-image-hero-1.jpg",
    "./assets/images/desktop-image-hero-2.jpg",
    "./assets/images/desktop-image-hero-3.jpg",
  ];
  const smallImgSrc = [
    "./assets/images/mobile-image-hero-1.jpg",
    "./assets/images/mobile-image-hero-2.jpg",
    "./assets/images/mobile-image-hero-3.jpg",
  ];
  const titles = [
    "Discover innovative ways to decorate",
    "We are available all across the globe",
    "Manufactured with the best materials",
  ];
  const descriptions = [
    "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
  ];

  // Internal function to update content
  function update() {
    largeImg.srcset = largeImgSrc[currentIndex];
    smallImg.src = smallImgSrc[currentIndex];
    title.textContent = titles[currentIndex];
    description.textContent = descriptions[currentIndex];
  }

  // Move forward
  function goForward() {
    if (currentIndex >= titles.length - 1) return;
    currentIndex++;
    update();
  }

  // Move back
  function goBack() {
    if (currentIndex <= 0) return;
    currentIndex--;
    update();
  }

  // Initialize first slide
  update();

  // Expose only the functions you want
  return {
    next: goForward,
    prev: goBack,
  };
})();

const fowardBtn = document.querySelector("#forward");
const backBtn = document.querySelector("#back");

fowardBtn.addEventListener("click", move.next);
backBtn.addEventListener("click", move.prev);

const navBar = (function () {
  const mobileNavBar = document.querySelector("#mobileNav");

  function show() {
    mobileNavBar.showModal();
  }
  function close() {
    mobileNavBar.close();
  }

  return {
    show: show,
    close: close,
  };
})();

const hamburger = document.querySelector(".nav__hamburger"),
  closeBtn = document.querySelector("#close-button");

hamburger.addEventListener("click", navBar.show);
closeBtn.addEventListener("click", navBar.close);
