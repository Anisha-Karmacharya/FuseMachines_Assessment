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