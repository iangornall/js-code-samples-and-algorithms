var coffeeOrderForm = document.querySelector('.coffee-order-form');
var caffeineInput = document.querySelector('[name="caffeine"]');
coffeeOrderForm.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log(caffeineInput);
});