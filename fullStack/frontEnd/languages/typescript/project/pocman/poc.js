// URL for the fakestoreapi products API endpoint
const apiUrl = 'https://pokeapi.co/api/v2/pokemon/';

// Fetch list of products from the API
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }
    return response.json();
  })
  .then(productsData => {
    // Store all products
    const allProducts = productsData;

    // Get buttons and container
    const menClothingBtn = document.getElementById('men-clothing-btn');
    const jewelryBtn = document.getElementById('jewelry-btn');
    const filteredProductsContainer = document.getElementById('filtered-products');

    // Event listener for Men's Clothing button
    menClothingBtn.addEventListener('click', () => {
      showFilteredProducts('men clothing');
    });

    // Event listener for Jewelry button
    jewelryBtn.addEventListener('click', () => {
      showFilteredProducts('jewelries');
    });

    // Function to display filtered products
    function showFilteredProducts(category) {
      // Filter products based on the selected category
      const filteredProducts = allProducts.filter(product => product.category.toLowerCase() === category);

      // Clear previous content
      filteredProductsContainer.innerHTML = '';

      // Display filtered products
      filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.title;
        productDiv.appendChild(productImage);
        productDiv.appendChild(document.createTextNode(product.title));
        filteredProductsContainer.appendChild(productDiv);
      });
    }
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });
