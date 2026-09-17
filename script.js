const lockToggle = document.getElementById('lockToggle');
const lockStatus = document.getElementById('lockStatus');

lockToggle.addEventListener('change', (e) => {
  if (e.target.checked) {
    lockStatus.textContent = 'Заблокирован';
    lockStatus.style.color = '#f8fafc';
  } else {
    lockStatus.textContent = 'Разблокирован';
    lockStatus.style.color = '#ef4444';
  }
});
