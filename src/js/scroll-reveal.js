const scrollReveal = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 300,
  reset: true
})

scrollReveal.reveal(`
  .hero__figure, .hero__title, .hero__text, .hero__button,
  .about__figure, .about__title, .about__text,
  .services__title, .services__text, .services__card,
  .testimonials__title, .testimonials__block,
  .contact__title, .contact__text, .contact__button, .contact__list
`, { interval: 75 })
