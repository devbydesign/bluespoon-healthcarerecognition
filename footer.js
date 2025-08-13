// Centralized Footer HTML
const footerHTML = `
<footer>
  <div class="container footer-grid">
    <div class="footer-section footer-company">
      <h3>Blue Spoon Boutique</h3>
      <p>10 Green Hills Drive<br>Verona, VA, 24482<br>(540) 480-6327</p>
    </div>
    <div class="footer-section footer-links">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Search</a></li>
        <li><a href="contact.html">Contact Us</a></li>
        <li><a href="contact.html">Support</a></li>
        <li><a href="contact.html">Feedback and Suggestions</a></li>
      </ul>
    </div>
    <div class="footer-section footer-social">
      <h3>Follow Us</h3>
      <div class="social-icons">
        <a href="https://www.facebook.com/bluespoonboutique" target="_blank" aria-label="Facebook">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="https://www.instagram.com/bluespoonboutique" target="_blank" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.linkedin.com/bluespoonboutique?_l=en_US" target="_blank" aria-label="LinkedIn">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="https://www.pinterest.com/bluespoonboutique" target="_blank" aria-label="Pinterest">
          <i class="fab fa-pinterest"></i>
        </a>
      </div>
    </div>
  </div>
  <div class="container copyright">
    <p>Website created by RBB Marketing. All rights reserved.</p>
  </div>
</footer>
`;

// Function to load footer and set dynamic values
function loadFooter() {
  // Insert footer HTML before the closing body tag
  document.body.insertAdjacentHTML('beforeend', footerHTML);
  
  // Set the current year in the footer
  const yearSpan = document.getElementById('current-year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}

// Load footer when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', loadFooter);
} else {
  loadFooter();
}
