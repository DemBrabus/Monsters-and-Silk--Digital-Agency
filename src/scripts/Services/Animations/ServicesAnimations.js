import { TweenMax, TweenLite, TimelineMax, Expo, Power1 } from 'gsap/all';
import ScrollMagic from 'scrollmagic';
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

//Services
(function(){

    //GSAP --------------- ------------------

        //Variables --- ----
            const ServicesHeader = document.getElementById('Services_Intro-Header');
            const ServicesRight = document.getElementById('Services_Intro-Right');
            const Service1 = document.getElementById('Service1');
            const Service2 = document.getElementById('Service2');
            const Service3 = document.getElementById('Service3');
            const Service4 = document.getElementById('Service4');

        //Variables ------ ---------

        //Services Intro --- ---

            const ServicesIntroTl = new TimelineMax();
                ServicesIntroTl
                    .add('wave1')
                        .set(ServicesHeader, {y: 50}, 'wave1')
                        .set(ServicesRight, {y: 50}, 'wave1')
                        .set(Service1, {y: 50}, 'wave1')

                    .add('wave2')
                        .to(ServicesHeader, .6, {opacity: 1, y: 0, ease: Power1.easeIn, delay: .5}, 'wave2')
                        .to(ServicesRight, .6, {opacity: 1, y: 0, ease: Power1.easeIn}, '-=.4')
                        .to(Service1, .6, {opacity: 1, y: 0, ease: Power1.easeIn}, '-=.4')

                ;



    //ScrollMagic
        const controller = new ScrollMagic.Controller();

        const Services1Scene = new ScrollMagic.Scene({
            triggerElement: '#Service1',
            reverse: false,
            triggerHook: .95
        })
        .addClassToggle('#Services1', 'Fade-In')
        .addTo(controller);


        const Services2Scene = new ScrollMagic.Scene({
            triggerElement: '#Service2',
            reverse: false,
            triggerHook: .95
        })
        .addClassToggle('#Services2', 'Fade-In')
        .addTo(controller);



}());