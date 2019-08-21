import $ from 'jquery';
import { TweenMax, TweenLite, TimelineMax, Expo, Power1 } from 'gsap/all';
import ScrollMagic from "scrollmagic";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap"; 
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

//Global Animations

//Variables ------

    const ConnectIcon = document.getElementById('Constants-ConnectIcon');
    const ConnectIconWhite = document.getElementById('ConnectIconWhite');
    const ConnectIconBlue = document.getElementById('ConnectIconBlue');

//Variables ------


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







//Pure GSAP -------- ------- ----- ---- --- -- -

//ConnectIcon ------
    const ConnectIconTl = new TimelineMax();
    ConnectIconTl
        .add('IconChange')
        .set(ConnectIcon, {className: '+=ConnectIconBG'}, 'IconChange')
        .set(ConnectIconWhite, {display: 'none',}, 'IconChange')
        .set(ConnectIconBlue, {display: 'block',}, 'IconChange')
        ;

    ConnectIconTl.pause();

        //ActivateConnectIconChange
        const ConnectIconActive = (e) => {
            ConnectIconTl.play();
        }
        //DeactivateConnectIconChange
        const ConnectIconInactive = (e) => {
            ConnectIconTl.reverse();
        }

        //Event Listeners
        ConnectIcon.addEventListener('mouseover', ConnectIconActive);
        ConnectIcon.addEventListener('mouseout', ConnectIconInactive);


















//ScrollMagic -------- ------- ----- ---- --- -- -

const controller = new ScrollMagic.Controller();

//Scenes --------------

//Footer -------
    //Background
        const FooterBackgroundScene = new ScrollMagic.Scene({
            triggerElement: '#Footer',
            // reverse: false,
            triggerHook: .4,
        })
        .setClassToggle('#Footer_Background', 'Slide-Up')
        .addTo(controller);

    //White Text
        const FooterWhiteTextScene = new ScrollMagic.Scene({
            triggerElement: '#Footer',
            // reverse: false,
            triggerHook: .42,
        })
        .setClassToggle('#Footer_Content-White', 'Fade-In')
        .addTo(controller);



        