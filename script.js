document.addEventListener('DOMContentLoaded', () => {
  const balanceText = document.getElementById('balance-text');
  const toggleIcon = document.getElementById('toggle-balance');

  let isVisible = false;
  const realBalance = '₹75,000'; // Change to actual balance or fetch dynamically

  // Toggle balance visibility
  if (balanceText && toggleIcon) {
    toggleIcon.addEventListener('click', () => {
      isVisible = !isVisible;

      if (isVisible) {
        balanceText.textContent = realBalance;
        toggleIcon.classList.remove('fa-eye');
        toggleIcon.classList.add('fa-eye-slash');
      } else {
        balanceText.textContent = '₹ *******';
        toggleIcon.classList.remove('fa-eye-slash');
        toggleIcon.classList.add('fa-eye');
      }
    });
  }

  // (Optional) Mobile sidebar auto close — if you plan to add a mobile toggle
  const sidebarLinks = document.querySelectorAll('.sidebar nav ul li a');
  const sidebar = document.querySelector('.sidebar');

  sidebarLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768 && sidebar) {
        sidebar.style.display = 'none'; // Hide sidebar on small screen
      }
    });
  });
});

