import { TimelineMax } from 'gsap/TimelineMax';




// //Nav

//---- Landing ----
(function(){


    const LandingHeader = document.getElementById('Landing_Header');
    const HideLandingHeaderTl = new TimelineMax();
        HideLandingHeaderTl
            .set(LandingHeader, {top: 0})
            .to(LandingHeader, 1, {top: '-100%', ease: Power2.easeIn});
        HideLandingHeaderTl.pause();

   var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
        HideLandingHeaderTl.reverse();
  } else {
    HideLandingHeaderTl.play();
  }
  prevScrollpos = currentScrollPos;
}


}());

