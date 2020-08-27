export default () => {
  document.addEventListener('keydown', (e) => {
    switch (e.key) {
      case 'ArrowDown':
        document.querySelector('.tracks').focus({preventScroll:true})
        e.preventDefault()
        e.stopImmediatePropagation()
        break
    }

  })
}