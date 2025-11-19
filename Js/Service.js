let cart = []; // Array to store cart items

  function addToCart(service, price) {
    // Check if service is already in cart
    let found = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].service === service) {
        cart[i].quantity += 1; // Increment quantity if already in cart
        found = true;
        break;
      }
    }

    // If service isn't in cart, add new item with quantity 1
    if (!found) {
      cart.push({ service: service, price: price, quantity: 1 });
    }

    // Update the cart display
    updateCart();
  }

  function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPriceElement = document.getElementById('total-price');

    // Clear current cart display
    cartList.innerHTML = '';

    let totalPrice = 0;

    // Add each item to the cart display
    cart.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.service} - R${item.price} x ${item.quantity} = R${item.price * item.quantity}`;
      
      // Create a remove button for each item in the cart
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.style.marginLeft = '10px';
      removeButton.onclick = () => removeFromCart(item.service);

      listItem.appendChild(removeButton);
      cartList.appendChild(listItem);

      totalPrice += item.price * item.quantity; // Calculate total price
    });

    // Update the total price
    totalPriceElement.textContent = `Total Price: R${totalPrice}`;
  }

  function removeFromCart(service) {
    // Remove the item from the cart
    cart = cart.filter(item => item.service !== service);

    // Update the cart display
    updateCart();
  }

  function checkout() {
    if (cart.length === 0) {
      alert("Your cart is empty. Please add some services before proceeding.");
      return;
    }

    let cartDetails = cart.map(item => `${item.service} - R${item.price} x ${item.quantity}`).join("\n");
    let total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    
    alert(`Checkout successful!\n\nServices:\n${cartDetails}\nTotal: R${total}`);
    
    // Clear cart after checkout
    cart = [];
    updateCart();
  }