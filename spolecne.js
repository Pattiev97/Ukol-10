const menuTlacitko = document.querySelector('#menu-tlacitko');
const menuPolozky = document.querySelector('#menu-polozky')

menuTlacitko.addEventListener('click', () => {
    menuPolozky.classList.toggle('show');

    const ikona = menuTlacitko.querySelector('i');

    if(menuPolozky.classList.contains('show')) {
        ikona.className = 'fas fa-xmark'
    } else {
        ikona.className = 'fas fa-bars'
    }
})