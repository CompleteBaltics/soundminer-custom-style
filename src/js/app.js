import '../css/custom.pcss'
import { addColor } from './components/colors'
import ajaxHook from './utils/ajaxHook'
import { stickyHeader, stickyPanel } from './components/sticky'
import navEvents from './components/navigation'

// add color to track list
ajaxHook()
window.addEventListener('load', () => addColor('.col-artwork .img-artwork', 'borderLeftColor'))
window.addEventListener('updateTracks', () => addColor('.col-artwork .img-artwork', 'borderLeftColor'))
// stick elements
stickyHeader()
stickyPanel()
// navigation events for keyboard
navEvents()
document.addEventListener('click', (e) => {
  console.log(e.target)
  if(e.target.id === 'downloadbytype'){
    document.querySelector('#wrap-download').style.display = ''
  }
})