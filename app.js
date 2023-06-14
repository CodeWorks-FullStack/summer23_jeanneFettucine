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

  // ✅ make the quantity of that object go up by 1
  chickenParm.quantity++

  // NOTE does the same thing as the line above
  // chickenParm.quantity+= 1

  console.log(chickenParm);


  // NOTE every time an item's quantity is increased, we run draw cart so that our page updates
  drawCart()

}

function addSpaghettiToCart() {
  let spaghetti = menu.find(menuItem => menuItem.name == 'spaghetti with italian sausage')

  spaghetti.quantity++
  console.log('🍝', spaghetti);

  // NOTE every time an item's quantity is increased, we run draw cart so that our page updates
  drawCart()
}

// NOTE when this function is called, the value for itemName is supplied. Look at my index.html to see what I am passing through to this function
function addItemToCart(itemName) {
  console.log('This is the item name:', itemName);

  let dish = menu.find(menuItem => menuItem.name == itemName)

  dish.quantity++
  console.log(dish);

  // NOTE every time an item's quantity is increased, we run draw cart so that our page updates
  drawCart()
}


function drawCart() {


  // NOTE setting up a placeholder outside of our forEach loop so that we can store a string of HTML and it doesn't get blown away on each iteration
  let stringOfMenuItemHTML = ''

  menu.forEach(menuItem => {

    // NOTE we are making sure that they have the current menu item in their cart before we add the HTML to our string above
    if (menuItem.quantity > 0) {

      // NOTE using backticks to get a multi-line string that is easier to read, and also so we can interpolate the values of each menu item into our string of HTML
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

  // NOTE after the for loop runs, we should have an <li> tag for each menuItem that had quantity
  console.log(stringOfMenuItemHTML);


  const cartElement = document.getElementById('cart')


  // NOTE we set the innerHTML because we have a string of HTML here, and we want our document to read it as that
  cartElement.innerHTML = stringOfMenuItemHTML

  // NOTE every time we update the cart in the HTML, we call drawTotal so that we also update our calculated total
  drawTotal()
}


function drawTotal() {


  // NOTE we set up a variable outside of our forEach loop so that we can add it to on each iteration
  let cartSum = 0

  menu.forEach(menuItem => {

    // NOTE we add to our above variable the price of the item multiplied by the quantity so that we get a calculated total of all of our items in the menu
    cartSum += menuItem.price * menuItem.quantity
  })


  let cartTotalElement = document.getElementById('cartTotal')


  // NOTE we are just updating text content here, so use innerText instead of HTML
  // NOTE toFixed is a number method that will add a specified amount of decimals points after the whole number
  // NOTE toString is a number method that will turn a number into a string
  cartTotalElement.innerText = cartSum.toFixed(2).toString()
}

function checkOut() {


  // NOTE window.confirm will return a true or false boolean based on which button the user clicked in window
  // NOTE cancel button will return false, OK button will return true
  const wantsToCheckOut = window.confirm("Are you sure you want to check out? Did you remember the manicotti for jeremy?")

  // NOTE if(wantsToCheckout == false)
  if (!wantsToCheckOut) {
    // NOTE if the user does not want to check out, we tell the checkOut function to return, which ends the function and does not run any code beyond this point
    // NOTE return is a full-stop for functions
    return
  }

  // NOTE grab each menuItem out of our array, and set each quantity to 0
  menu.forEach(menuItem => menuItem.quantity = 0)

  // NOTE all of our quantities just changed, we need to update the document now
  drawCart()



  // NOTE this is from the SweetAlert javascript library, these are nicer looking window messages
  // REVIEW https://sweetalert2.github.io/
  // @ts-ignore
  Swal.fire("Enjoy your pasta, friendo!")

}

// SECTION function calls

// NOTE nothing needed to run as soon as the page loaded today!