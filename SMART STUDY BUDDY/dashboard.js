document.getElementById('menu-toggle').addEventListener('click', () => {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open');
});

// Dummy logout
document.getElementById('logout-btn').addEventListener('click', () => {
  alert('Logged out successfully!');
  window.location.href = 'index.html';
});
