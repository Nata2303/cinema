const heroStaticRef = document.querySelector('.hero-static');

heroStaticRef.innerHTML = createLibraryHeroMarkup();
heroStaticRef.classList.add('hero-library');

function createLibraryHeroMarkup() {
  return `
    <div class="container hero-container">
      <h2 class="hero-title hero-title-lib">Create Your Dream Cinema</h2>
      <div class="hero-lib-text">
        <p class="overview-text">Is a guide to designing a personalized movie theater experience with the right equipment, customized decor, and favorite films. This guide helps you bring the cinema experience into your own home with cozy seating, dim lighting, and movie theater snacks.</p>
      </div>
    </div>`;
}