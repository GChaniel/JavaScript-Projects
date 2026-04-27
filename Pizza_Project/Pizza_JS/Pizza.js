// This defines the important element in the order summary box
const orderModal = document.getElementById("orderModal");
const closeModal = document.getElementById("closeModal");
const modalOrderItems = document.getElementById("modalOrderItems");
const modalOrderTotal = document.getElementById("modalOrderTotal");

function openModal() {
  orderModal.classList.add("show");
}

function closeOrderModal() {
  orderModal.classList.remove("show");
}

closeModal.addEventListener("click", closeOrderModal);

// We define the buy now button to enable it function
const buyNowButtons = document.querySelectorAll(".buy-now");

buyNowButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const itemName = button.dataset.name;
    const itemPrice = Number(button.dataset.price);

    modalOrderItems.innerHTML = `
        <li>
            <span class="modal-item-name">${itemName}</span>
            <span class="modal-line"></span>
            <span class="modal-item-price">£${itemPrice.toFixed(2)}</span> 
        </li>
    `;

    modalOrderTotal.textContent = `£${itemPrice.toFixed(2)}`;

    openModal();
  });
});

//Target the order form
const orderForm = document.getElementById("orderForm");

//Target the cancel button
const cancelOrder = document.getElementById("cancelOrder");
// When user clicks cancel order
cancelOrder.addEventListener("click", function () {
  //clear modal content
  modalOrderItems.innerHTML = "";

  //Reset total Price
  modalOrderTotal.textContent = "£0.00";

  //close modal if it is open
  closeOrderModal();
});

// Target the confirm order button
const confirmOrder = document.getElementById("confirmOrder");

// When user confirms order
confirmOrder.addEventListener("click", function () {
  alert("Thank you! Your order has been confirmed.");

  // Reset the form
  orderForm.reset();

  // Clear modal content
  modalOrderItems.innerHTML = "";

  // Reset total
  modalOrderTotal.textContent = "£0.00";

  // Close modal
  closeOrderModal();
});

//when user click "place order"
orderForm.addEventListener("submit", function (e) {
  e.preventDefault(); //prevent page reload

  buildPizzaOrder(); //call our main function
});

// Main function
function buildPizzaOrder() {
  let total = 0;
  let orderHTML = "";

  //Get Pizza Size required
  const size = document.querySelector('input[name="size"]:checked');

  if (!size) {
    alert("Please select a pizza size");
    return;
  }

  const sizeName = size.value;
  const sizePrice = Number(size.dataset.price);

  total += sizePrice;

  orderHTML += `
    <li>
        <span class="modal-item-name">${sizeName}</span>
            <span class="modal-line"></span>
            <span class="modal-item-price">£${sizePrice.toFixed(2)}</span>
        </li>
    `;

  //Crust
  let crust = handleOptions("crust", "radio");
  total += crust.total;
  orderHTML += crust.html;

  //sauce
  let sauce = handleOptions("sauce", "radio");
  total += sauce.total;
  orderHTML += sauce.html;

  //Cheese
  let cheese = handleOptions("cheese", "radio");
  total += cheese.total;
  orderHTML += cheese.html;

  //toppings
  let toppings = handleOptions("toppings", "checkbox");
  total += toppings.total;
  orderHTML += toppings.html;

  //sides
  let sides = handleOptions("sides", "checkbox");
  total += sides.total;
  orderHTML += sides.html;

  //drinks
  let drinks = handleOptions("drinks", "checkbox");
  total += drinks.total;
  orderHTML += drinks.html;

  //extras
  let extras = handleOptions("extras", "checkbox");
  total += extras.total;
  orderHTML += extras.html;

  //Insert into Modal
  modalOrderItems.innerHTML = orderHTML;

  //set total price
  modalOrderTotal.textContent = `£${total.toFixed(2)}`;

  //open modal
  openModal();
}

//Functions for groups
function handleOptions(name, type = "radio") {
  let groupTotal = 0;
  let groupHTML = "";

  let inputs;

  if (type === "radio") {
    inputs = document.querySelector(`input[name="${name}"]:checked`);
    if (!inputs) return { total: 0, html: "" };

    const itemName = inputs.value;
    const itemPrice = Number(inputs.dataset.price || 0);

    groupTotal += itemPrice;

    groupHTML += `
      <li>
        <span class="modal-item-name">${itemName}</span>
        <span class="modal-line"></span>
        <span class="modal-item-price">£${itemPrice.toFixed(2)}</span>
      </li>
    `;
  } else {
    inputs = document.querySelectorAll(`input[name="${name}"]:checked`);

    inputs.forEach((input) => {
      const itemName = input.value;
      const itemPrice = Number(input.dataset.price || 0);

      groupTotal += itemPrice;

      groupHTML += `
        <li>
          <span class="modal-item-name">${itemName}</span>
          <span class="modal-line"></span>
          <span class="modal-item-price">£${itemPrice.toFixed(2)}</span>
        </li>
      `;
    });
  }

  return { total: groupTotal, html: groupHTML };
}
