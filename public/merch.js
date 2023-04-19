// $(document).ready(function() {
// 	$('.product-list').slick({
// 		infinite: true,
// 		slidesToShow: 3,
// 		slidesToScroll: 3,
// 		arrows: true,
// 		dots: false
// 	});
// });

async function loadProducts() {
	let products = [];
	try {
		const response = await fetch('/api/products');
		products = await response.json();
		localStorage.setItem('products', JSON.stringify(products));
	} catch {
		const productsText = localStorage.getItem('products');
		if (productsText) {
			products = JSON.parse(productsText);
		}
	}

	displayProducts(products);
}

function displayProducts(products) {
	const list = document.querySelector('#product-list');

	if (products.length) {
		for (const [i, product] of products.entries()) {
			const img = document.createElement('div class=product-img');
			const det = document.createElement('div class=product-details');
			const name = document.createElement('h2');
			const size = document.createElement('p');
			const quantity = document.createElement('p');
			const price = document.createElement('p');

			name.textContent = product.name;
			size.textContent = product.size;
			quantity.textContent = product.quantity;
			price.textContent = product.price;

			det.appendChild(name);
			det.appendChild(size);
			det.appendChild(quantity);
			det.appendChild(price);

			const newItem = document.createElement('div class=product-item');
			newItem.appendChild(img);
			newItem.appendChild(det);

			list.appendChild(newItem);
		}
	} else {
		list.innerHTML = "<div class='product-item'><h1 class='text-center'>No Current Products to Display.</h1></div>";
	}
}

loadProducts();