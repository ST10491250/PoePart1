let cart = []; // Array to store cart items
      let tyres = [...document.querySelectorAll('.card')]; // All tyres on the page

      // Function to add items to the cart
      function addToCart(tyreName, price) {
        let found = false;
        for (let i = 0; i < cart.length; i++) {
          if (cart[i].tyreName === tyreName) {
            cart[i].quantity += 1;
            found = true;
            break;
          }
        }
        if (!found) {
          cart.push({ tyreName: tyreName, price: price, quantity: 1 });
        }
        updateCart();
      }

      // Function to update the cart display
      function updateCart() {
        const cartList = document.getElementById('cart-list');
        const totalPriceElement = document.getElementById('total-price');
        cartList.innerHTML = ''; // Clear the cart list

        let totalPrice = 0;
        cart.forEach(item => {
          const listItem = document.createElement('li');
          listItem.textContent = `${item.tyreName} - R${item.price} x ${item.quantity} = R${item.price * item.quantity}`;
          
          const removeButton = document.createElement('button');
          removeButton.textContent = 'Remove';
          removeButton.onclick = () => removeFromCart(item.tyreName);
          listItem.appendChild(removeButton);
          
          cartList.appendChild(listItem);
          totalPrice += item.price * item.quantity;
        });
        totalPriceElement.textContent = `Total Price: R${totalPrice}`;
      }

      // Function to remove items from the cart
      function removeFromCart(tyreName) {
        cart = cart.filter(item => item.tyreName !== tyreName);
        updateCart();
      }

      // Function to filter tyres by search input
      function filterProducts() {
        const searchTerm = document.getElementById('search-bar').value.toLowerCase();
        tyres.forEach(tyre => {
          const name = tyre.getAttribute('data-name').toLowerCase();
          tyre.style.display = name.includes(searchTerm) ? 'block' : 'none';
        });
      }

      // Sort tyres by price
      function sortByPrice() {
        const sortBy = document.getElementById('sort-price').value;
        let sortedTyres;
        if (sortBy === 'low-to-high') {
          sortedTyres = tyres.sort((a, b) => parseInt(a.getAttribute('data-price')) - parseInt(b.getAttribute('data-price')));
        } else if (sortBy === 'high-to-low') {
          sortedTyres = tyres.sort((a, b) => parseInt(b.getAttribute('data-price')) - parseInt(a.getAttribute('data-price')));
        } else if (sortBy === 'mid-range') {
          sortedTyres = tyres.filter(tyre => {
            const price = parseInt(tyre.getAttribute('data-price'));
            return price >= 2000 && price <= 3000;
          });
        } else {
          sortedTyres = tyres; // Default
        }
        displaySortedTyres(sortedTyres);
      }

      // Sort tyres alphabetically
      function sortByAlphabet() {
        const sortBy = document.getElementById('sort-alphabet').value;
        let sortedTyres;
        if (sortBy === 'asc') {
          sortedTyres = tyres.sort((a, b) => a.getAttribute('data-name').localeCompare(b.getAttribute('data-name')));
        } else if (sortBy === 'desc') {
          sortedTyres = tyres.sort((a, b) => b.getAttribute('data-name').localeCompare(a.getAttribute('data-name')));
        } else {
          sortedTyres = tyres; // Default
        }
        displaySortedTyres(sortedTyres);
      }

      // Function to display sorted tyres
      function displaySortedTyres(sortedTyres) {
        const grid = document.querySelector('.grid');
        grid.innerHTML = ''; // Clear the current grid
        sortedTyres.forEach(tyre => {
          grid.appendChild(tyre); // Add sorted tyres back to the grid
        });
      }




