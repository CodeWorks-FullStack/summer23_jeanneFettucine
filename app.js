// SECTION global variables

const menu = [
  {
    name: 'chicken parm',
    price: 17.95,
    quantity: 0
  },
  {
    name: 'spaghetti with italian sausage',
    price: 13.50,
    quantity: 0
  },
  {
    name: 'lasagna',
    price: 21.50,
    quantity: 0
  },
  {
    name: 'manicotti',
    price: 6.79,
    quantity: 0
  },
  {
    name: 'cheese pizza',
    price: 11,
    quantity: 0
  },

]



// SECTION functions

function addChickenParmToCart() {
  // ✅ get a console log when this button is clicked
  console.log('I clicked the button');

  // ✅ get the chicken parm object out of my array
  let chickenParm = menu.find(menuItem => menuItem.name == 'chicken parm')

  chickenParm.quantity++

  // NOTE does the same thing as the line above
  // chickenParm.quantity+= 1

  // ✅ make the quantity of that object go up by 1
  console.log(chickenParm);

  drawCart()

}

function addSpaghettiToCart() {
  let spaghetti = menu.find(menuItem => menuItem.name == 'spaghetti with italian sausage')

  spaghetti.quantity++
  console.log('🍝', spaghetti);

  drawCart()
}

function addItemToCart(itemName) {
  console.log('This is the item name:', itemName);

  let dish = menu.find(menuItem => menuItem.name == itemName)

  dish.quantity++
  console.log(dish);

  drawCart()
}


function drawCart() {


  let stringOfMenuItemHTML = ''
  menu.forEach(menuItem => {
    if (menuItem.quantity > 0) {
      stringOfMenuItemHTML += `
      <li>
        <div class="d-flex fs-3 justify-content-between">
          <span>${menuItem.name} x${menuItem.quantity}</span>
          <span>$${menuItem.price.toFixed(2)}</span>
        </div>
      </li>
      `
      console.log(menuItem);
    }
  })

  console.log(stringOfMenuItemHTML);


  const cartElement = document.getElementById('cart')

  cartElement.innerHTML = stringOfMenuItemHTML

  drawTotal()
}


function drawTotal() {
  let cartTotalElement = document.getElementById('cartTotal')

  let cartSum = 0

  menu.forEach(menuItem => {
    cartSum += menuItem.price * menuItem.quantity
  })



  cartTotalElement.innerText = cartSum.toFixed(2).toString()
}

function checkOut() {

  const wantsToCheckOut = window.confirm("Are you sure you want to check out? Did you remember the manicotti for jeremy?")

  if (!wantsToCheckOut) {
    return
  }

  menu.forEach(menuItem => menuItem.quantity = 0)

  drawCart()

  // @ts-ignore
  Swal.fire("Enjoy your pasta, friendo!")

}

// SECTION function calls