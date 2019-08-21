import { TimelineMax } from 'gsap/TimelineMax';




// //Nav

const Header = document.getElementById('Header');
    const HideHeaderTl = new TimelineMax();
        HideHeaderTl
            .set(Header, {top: 0})
            .to(Header, 1, {top: '-100%', ease: Power2.easeIn});
        HideHeaderTl.pause();

   var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
        HideHeaderTl.reverse();
  } else {
    HideHeaderTl.play();
  }
  prevScrollpos = currentScrollPos;
}