// provides an event listener called updateTracks to ajax calls

export default () => {
  const updateTracks = new CustomEvent('updateTracks')
  const origOpen = XMLHttpRequest.prototype.open
  XMLHttpRequest.prototype.open = function() {
    this.addEventListener('load', function() {
      if(this.readyState === 4 && this.responseText.includes && this.responseText.includes('<div id="view-content">')){
        window.dispatchEvent(updateTracks)
      }
    })
    origOpen.apply(this, arguments)
  }
}