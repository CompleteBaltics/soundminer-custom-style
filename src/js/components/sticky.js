const main = document.querySelector('#main')
export const stickyHeader = () => {
  // create the observer
  const headerEl = document.querySelector('#search')
  const sentinalEl = document.createElement('div')
  sentinalEl.classList.add('sentinel')
  sentinalEl.style.position = 'absolute'
  sentinalEl.style.top = '5rem'
  document.querySelector('#main').prepend(sentinalEl)
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      headerEl.classList.add('sticky')
      main.classList.add('sticky-search')
    } else {
      headerEl.classList.remove('sticky')
      main.classList.remove('sticky-search')
    }
  })
  observer.observe(sentinalEl)
}

export const stickyPanel = () => {
  // create the observer
  const panelEl = document.querySelector('#wrap-panel')
  const sentinalEl = document.createElement('div')
  sentinalEl.classList.add('sentinel')
  sentinalEl.style.position = 'absolute'
  sentinalEl.style.top = '6rem'
  panelEl.before(sentinalEl)
  const observer = new IntersectionObserver((entries) => {
    if (!entries[0].isIntersecting) {
      panelEl.classList.add('sticky')
      main.classList.add('sticky-panel')
    } else {
      panelEl.classList.remove('sticky')
      main.classList.remove('sticky-panel')
    }
  })
  observer.observe(sentinalEl)
}