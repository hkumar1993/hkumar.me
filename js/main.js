let navToggle = false;


document.addEventListener('DOMContentLoaded', function(){
    const tripleDot = document.querySelector('.triple-dot')
    const hiddenNav = document.querySelector('.hidden-nav')
    const darkShroud = document.querySelector('.dark-shroud')
    const images = Array.from(document.querySelectorAll('img'))

    images.forEach( img => {
        img.addEventListener("load", function(){
            img.classList.add('fadeIn')
        })
    });


    function toggleNav() {
        console.log('clicked')
        if (navToggle) {
            hiddenNav.classList.remove('show')
            darkShroud.classList.add('hidden')
        } else {
            hiddenNav.classList.add('show')
            darkShroud.classList.remove('hidden')
        }
        navToggle = !navToggle
    }

    tripleDot.addEventListener('click', toggleNav);
    darkShroud.addEventListener('click', toggleNav);
    hiddenNav.addEventListener('click', toggleNav);
})