const toggleButton = document.getElementsByClassName('toggle-ribbon')[0]
const navbarLinks = document.getElementsByClassName('ribbon-links')[0]

const mainNavButton = document.getElementsByClassName('toggle-mainNav')[0]
const mainNavLinks = document.getElementsByClassName('mainNav-links')[0]

console.log("is this working?")

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

mainNavButton.addEventListener('click', () => {
  mainNavLinks.classList.toggle('active')
})
