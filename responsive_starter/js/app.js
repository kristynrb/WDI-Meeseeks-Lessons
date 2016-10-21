window.onload = function() {

	// This script is for dynamically adding product divs to the page within
	// the products-container

	console.log('app.js');

	// gets the products-container
	var productsContainer = document.getElementById('products-container');

	// generates six product divs and puts them in the products-container
	for (var i=0; i < 6; i++) {

		// adds a div for each product
		var item = document.createElement('div');
		item.className = "item";
		item.setAttribute("id", i);
		productsContainer.appendChild(item);

		// inside each div, adds a product 'image' for each product
		var itemImg = document.createElement('div');
		itemImg.className = "item-img";
		item.appendChild(itemImg);

		// inside each div, adds a 'description' to each product item
		var itemDescr = document.createElement('div');
		itemDescr.className = "item-descr";
		item.appendChild(itemDescr);

	} // end for loop

} // end window.onload