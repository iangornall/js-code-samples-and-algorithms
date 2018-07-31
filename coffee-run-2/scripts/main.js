var coffeeOrderForm = document.querySelector('[data-coffee-order="form"]');
var coffeeInput = document.querySelector('[name="coffee"]');
var emailInput = document.querySelector('[name="emailAddress"]');
var sizesInput = document.querySelectorAll('[name="size"]');
var flavorInput = document.querySelector('[name="flavor"]');
var strengthInput = document.querySelector('[name="strength"]');
var orderList = document.querySelector('.order-list');
var orderData = JSON.parse(localStorage.getItem('orders'));
if (orderData === null){
  orderData = [];
}

var storeData = function() {
  for (sizeInput of sizesInput){
    if (sizeInput.checked) {
      var size = sizeInput.value;
    }
  }
  orderData.push({coffee: coffeeInput.value,
                  email: emailInput.value,
                  size: size,
                  flavor: flavorInput.value,
                  strength: strengthInput.value});
  localStorage.setItem('orders', JSON.stringify(orderData));
}
var resetForm = function() {
  coffeeInput.value = '';
  emailInput.value = '';
  for (sizeInput of sizesInput){
    sizeInput.checked = false;
  }
  flavorInput.value="";
  strengthInput.value = '100';
}
var displayData = function(data, i) {
  var coffeeOrderDisplay = document.createElement('li');
  coffeeOrderDisplay.classList.add('coffee-order');

  var panel = document.createElement('div');
  panel.classList.add('panel', 'panel-default');
  coffeeOrderDisplay.appendChild(panel);

  var panelBody = document.createElement('div');
  panelBody.classList.add('panel-body');
  panel.appendChild(panelBody);

  var coffeeDisplay = document.createElement('p');
  coffeeDisplay.textContent = `Coffee: ${data.coffee}`;
  panelBody.appendChild(coffeeDisplay);

  var emailDisplay = document.createElement('p');
  emailDisplay.textContent = `Email: ${data.email}`;
  panelBody.appendChild(emailDisplay);

  var sizeDisplay = document.createElement('p');
  sizeDisplay.textContent = `Size: ${data.size}`;
  panelBody.appendChild(sizeDisplay);

  var flavorDisplay = document.createElement('p');
  flavorDisplay.textContent = `Flavor: ${data.flavor}`;
  panelBody.appendChild(flavorDisplay);

  var strengthDisplay = document.createElement('p');
  strengthDisplay.textContent = `Strength: ${data.strength}`;
  panelBody.appendChild(strengthDisplay);

  var completedButton = document.createElement('button');
  completedButton.textContent = 'Order Complete';
  completedButton.classList.add('btn', 'btn-default');
  panelBody.appendChild(completedButton);

  completedButton.addEventListener('click', () => {
    orderList.removeChild(coffeeOrderDisplay);
    orderData.splice(i, 1);
    localStorage.setItem('orders', JSON.stringify(orderData));
  });

  orderList.appendChild(coffeeOrderDisplay);
}

var updateDisplay = function() {
  orderData.forEach((order, i) => {
    displayData(order, i);
  });
}

var removeDisplay = function() {
  while (orderList.firstChild) {
    orderList.removeChild(orderList.firstChild);
  }
}

updateDisplay();

coffeeOrderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  storeData();
  removeDisplay();
  updateDisplay();
  resetForm();
})

$.ajax('https://dc-coffeerun.herokuapp.com/api/coffeeorders', {
  success: function(data) {
    console.log(data);
  }
});
