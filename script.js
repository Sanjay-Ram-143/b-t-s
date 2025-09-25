// Function to search for a product and scroll to it
function searchProduct() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const products = document.querySelectorAll('.product-card');
    
    products.forEach(product => {
        const productName = product.querySelector('h1').textContent.toLowerCase();
        
        if (productName.includes(searchTerm)) {
            product.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    });
}




    const toggleBtn = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');
    const openIcon = document.getElementById('open-icon');
    const closeIcon = document.getElementById('close-icon');
    const navLinks = document.querySelectorAll('.nav-link');

    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      openIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        openIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });