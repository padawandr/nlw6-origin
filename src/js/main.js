const header = document.querySelector('#header')
const menu = document.querySelector('#menu')
const links = document.querySelectorAll('.menu__link')
const toggle = document.querySelectorAll('.navbar .icon')

for (const element of toggle) {
  element.addEventListener('click', () => {
    menu.classList.toggle('show')
    toggleIcons()
  })
}

for (const link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('show')
    toggleIcons()
  })
}

const navHeight = header.offsetHeight
window.addEventListener('scroll', () => {
  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
})

function toggleIcons() {
  toggle.forEach((icon) => {
    icon.classList.toggle('show')
  })
}
