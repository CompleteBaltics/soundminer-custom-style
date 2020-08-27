import * as Vibrant from 'node-vibrant'

export const addColor = (selector, styleProp) => {
  document.querySelectorAll(selector).forEach((img) => {
    const vibrant = new Vibrant(img.src)
    vibrant.getPalette((err, palette) => {
      img.closest('tr').style[styleProp] = palette.Vibrant.getHex()
      img.closest('tr').style.setProperty('--color', palette.Vibrant.getHex())
    })
  })
}
