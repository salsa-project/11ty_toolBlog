// Theme handling
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;
const sunIcon = themeToggle.querySelector('.sun');
const moonIcon = themeToggle.querySelector('.moon');

// System preference detection
const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
const storedPreference = localStorage.getItem('theme');

// Set initial theme
const initialTheme = storedPreference || systemPreference;
html.classList.toggle('dark', initialTheme === 'dark');
moonIcon.classList.toggle('hidden', initialTheme === 'dark');
sunIcon.classList.toggle('hidden', initialTheme !== 'dark');

// Prevent FOUC
html.classList.remove('hidden');

themeToggle.addEventListener('click', () => {
  html.classList.toggle('dark');
  const isDark = html.classList.contains('dark');
  
  // Update icons
  moonIcon.classList.toggle('hidden', isDark);
  sunIcon.classList.toggle('hidden', !isDark);
  
  // Store preference
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});