

import TimelineMax from 'gsap/TimelineMax';
import TweenMax, { Expo } from 'gsap/TweenMax';


const MobileHeader = document.getElementById('MobileHeader');
const MobileMenu = document.getElementById('MobileNav');
const MobileListItems = document.querySelectorAll('.MobileNav_ListItem');
const MobileMenuIcon = document.getElementById('MobileMenuIcon');
const MobileMenuClose = document.getElementById('MobileMenuClose');

const ToggleMobileNavTl = new TimelineMax();

    ToggleMobileNavTl
        .add('wave1')
            .set(MobileMenu, {display: 'block', opacity: 0}, 'wave1')
            .set(MobileHeader, {display: 'flex', opacity: 0}, 'wave1')
        .add('wave2')
            .fromTo(MobileMenu, 1, {opacity: 0}, {opacity: 1}, 'wave2')
            .fromTo(MobileHeader, 1, {opacity: 0}, {opacity: 1, ease: Expo.easeInOut}, 'wave2')
            .staggerFrom(MobileListItems, .3, {opacity: 0 ,x: -400, ease: Expo.easeInOut, delay: .2}, .1, 'wave2')
            ;

    ToggleMobileNavTl.pause();

    const ToggleMobileNav = (e) => {
        ToggleMobileNavTl.play();
    }
    const CloseMobileNav = (e) => {
        ToggleMobileNavTl.reverse();
    }
        

    MobileMenuIcon.addEventListener('click', ToggleMobileNav);
    MobileMenuClose.addEventListener('click', CloseMobileNav);

