document.addEventListener('DOMContentLoaded', () => {
    // Sample Product Data
    const products = [
        { id: 1, name: "Wireless Mouse", category: "electronics", price: 25.99, rating: 4.5, image: "https://via.placeholder.com/250" },
        { id: 2, name: "T-Shirt", category: "apparel", price: 15.00, rating: 4.2, image: "https://via.placeholder.com/250" },
        { id: 3, name: "JavaScript Book", category: "books", price: 39.99, rating: 4.8, image: "https://via.placeholder.com/250" },
        { id: 4, name: "Keyboard", category: "electronics", price: 75.50, rating: 4.7, image: "https://via.placeholder.com/250" },
        { id: 5, name: "Jeans", category: "apparel", price: 50.00, rating: 4.3, image: "https://via.placeholder.com/250" },
        { id: 6, name: "Monitor", category: "electronics", price: 199.99, rating: 4.9, image: "https://via.placeholder.com/250" },
        { id: 7, name: "Fantasy Novel", category: "books", price: 19.95, rating: 4.6, image: "https://via.placeholder.com/250" },
        { id: 8, name: "Hoodie", category: "apparel", price: 45.00, rating: 4.8, image: "https://via.placeholder.com/250" }
    ];

    const productList = document.getElementById('product-list');
    const categoryFilter = document.getElementById('category-filter');
    const sortBy = document.getElementById('sort-by');

    // Function to display products
    const displayProducts = (productsToDisplay) => {
        productList.innerHTML = ''; // Clear existing products
        productsToDisplay.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <p class="product-rating">Rating: ${'★'.repeat(Math.round(product.rating))}${'☆'.repeat(5 - Math.round(product.rating))}</p>
            `;
            productList.appendChild(productCard);
        });
    };

    // Function to filter and sort products
    const updateProducts = () => {
        let filteredProducts = [...products];

        // Apply category filter
        const selectedCategory = categoryFilter.value;
        if (selectedCategory !== 'all') {
            filteredProducts = filteredProducts.filter(product => product.category === selectedCategory);
        }

        // Apply sorting
        const sortValue = sortBy.value;
        switch (sortValue) {
            case 'price-asc':
                filteredProducts.sort((a, b) => a.price - b.price);
                break;
            case 'price-desc':
                filteredProducts.sort((a, b) => b.price - a.price);
                break;
            case 'rating-desc':
                filteredProducts.sort((a, b) => b.rating - a.rating);
                break;
        }

        displayProducts(filteredProducts);
    };

    // Event listeners for controls
    categoryFilter.addEventListener('change', updateProducts);
    sortBy.addEventListener('change', updateProducts);

    // Initial display of all products
    displayProducts(products);
});