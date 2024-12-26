import { catBreeds } from './data/cats.js';
import { catInterests } from './data/interests.js';

// Initialize the website
document.addEventListener('DOMContentLoaded', () => {
  renderCatBreeds();
  renderCatInterests();
});

// Show/hide sections
window.showSection = (sectionId) => {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.add('hidden');
  });
  document.getElementById(sectionId).classList.remove('hidden');
};

// Render cat breeds
function renderCatBreeds() {
  const breedsContainer = document.getElementById('catBreedsGrid');
  
  catBreeds.forEach(breed => {
    const breedCard = document.createElement('div');
    breedCard.className = 'cat-card';
    breedCard.innerHTML = `
      <img src="${breed.image}" alt="${breed.name}">
      <div class="cat-info">
        <h3>${breed.name}</h3>
        <p>${breed.description}</p>
      </div>
    `;
    breedsContainer.appendChild(breedCard);
  });
}

// Render cat interests
function renderCatInterests() {
  const interestsContainer = document.getElementById('catInterests');
  
  catInterests.forEach(interest => {
    const interestCard = document.createElement('div');
    interestCard.className = 'interest-card';
    interestCard.innerHTML = `
      <h3>${interest.title}</h3>
      <p>${interest.description}</p>
    `;
    interestsContainer.appendChild(interestCard);
  });
}