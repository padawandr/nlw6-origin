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

window.addEventListener('scroll', () => {
  addHeaderShadow()
  showGoTopButton()
})

function toggleIcons() {
  toggle.forEach((icon) => {
    icon.classList.toggle('show')
  })
}

function addHeaderShadow() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

function showGoTopButton() {
  const button = document.querySelector('.go-top')

  if (window.scrollY >= 560) {
    button.classList.add('show')
  } else {
    button.classList.remove('show')
  }
}
