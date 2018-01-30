let navToggle = false;


document.addEventListener('DOMContentLoaded', function(){
    const tripleDot = document.querySelector('.triple-dot')
    const hiddenNav = document.querySelector('.hidden-nav')
    console.log(hiddenNav)

    function toggleNav() {
        console.log('clicked')
        if (navToggle) {
            hiddenNav.classList.remove('show')
        } else {
            hiddenNav.classList.add('show')
        }
        navToggle = !navToggle
    }

    tripleDot.addEventListener('click', toggleNav);
})