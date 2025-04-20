<script>
  const searchInput = document.getElementById('searchInput');
  const products = document.querySelectorAll('.product-card');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.toLowerCase();

    products.forEach(card => {
      const name = card.querySelector('.product-name').textContent.toLowerCase();
      if (name.includes(query)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
</script>
