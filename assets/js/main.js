const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)

    toggle.addEventListener('click', ()=>{
        // to show menu
        nav.classList.toggle('show-menu')
        // show and hide menu icon
        toggle.classList.toggle('show-icon')
    })
}
showMenu('nav-toggle', 'nav-menu')

// DROPDOWN MENU
const dropdownItems = document.querySelectorAll('.dropdown__item')
dropdownItems.forEach((item) =>{
    const dropdownButton = item.querySelector('.dropdown__button')
    dropdownButton.addEventListener('click', () =>{
        const showDropdown = document.querySelector('.show-dropdown')
        toggleItem(item)
        if(showDropdown && showDropdown != item){
            toggleItem(showDropdown)
        }
    })
})
const toggleItem = (item) =>{
    const dropdownContainer = item.querySelector('.dropdown__container')

    if(item.classList.contains('show-dropdown')){
        dropdownContainer.removeAttribute('style')
        item.classList.remove('show-dropdown')
    }
    else{
        dropdownContainer.style.height = dropdownContainer.scrollHeight + 'px'
        item.classList.add('show-dropdown')
    }


}