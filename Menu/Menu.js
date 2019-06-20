
const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu refence.
  menu.classList.toggle('menu--open')
}

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu')

// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button')

// Using your menuButton reference, add a click handler that calls toggleMenu
menuButton.addEventListener('click', () => {
  toggleMenu()
})

window.addEventListener('mouseup', event => {
  if(event.target != menu && event.target.parentNode != menu && event.target.parentNode.parentNode != menu && event.target != menuButton) { // If target click is not the menu, not the unordered list, not the list item, nor the menu button --> toggle the menu
    toggleMenu()
  }
  // console.log(`menu button click: ${event.target != menuButton}`)
  // console.log(`menu click: ${event.target != menu}`)
  // console.log(event.target)
})