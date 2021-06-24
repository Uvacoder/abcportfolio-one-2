import Alpine from 'alpinejs'
import 'lazysizes'

window.Alpine = Alpine

document.addEventListener('DOMContentLoaded', () => {
  Alpine.start()
})

// Create Global Alpine Store for Nav.
document.addEventListener('alpine:init', () => {
  Alpine.store('nav', {
    isOpen: false,
    close() { return this.isOpen = false },
    open() { return this.isOpen = true },
    toggle() { return this.isOpen = !this.isOpen }
  })
});

// Show alert success
if (window.location.search.includes('submit')) {
  alert('Thanks for reaching out! I will be in touch shortly.')
}
