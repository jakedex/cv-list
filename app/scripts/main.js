'use strict';

var cvStack = $('.cvStack');
TweenMax.from(cvStack, 1, {
    perspective: 200
});

TweenMax.from('#drawing1', 1, {
    left: -200,
    top: -200,
    rotation: 5,
    rotationX: -10,
    rotationY: -10,
    rotationZ: -10,
    z: 50,
    ease: Power3.easeOut
});

TweenMax.from('#drawing2', 1, {
    left: 300,
    top: 200,
    rotation: 2.5,
    rotationX: 30,
    rotationY: -10,
    rotationZ: 10,
    z: -100,
    ease: Power3.easeOut
});

TweenMax.from('#drawing3', 1, {
    left: 500,
    top: -200,
    rotation: -5,
    rotationX: 10,
    rotationY: 10,
    z: -100,
    ease: Power3.easeOut
});

$('.cvStack img').mouseover(function () {
    TweenMax.to('#drawing1', .1, {
        z: 10
    });
    TweenMax.to('#drawing2', .1, {});
    TweenMax.to('#drawing3', .1, {
        z: -10
    });
});

$('.cvStack img').mouseout(function () {
    TweenMax.to('#drawing1', .1, {
        z: 0
    });
    TweenMax.to('#drawing2', .1, {});
    TweenMax.to('#drawing3', .1, {
        z: 0
    });
});

(function ($) {
    // Init ScrollMagic
    var ctrl = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave'
        }
    });

    // make navbar visible on #two
    var navVisable = TweenMax.fromTo('.fixedNav', .1, {opacity: 0, marginTop: -80}, {
        autoAlpha: 1,
        display:'block',
        marginTop: -61
    });
    
    // cvDrawing to section #two
    var cvToTwo = new TimelineMax();
    cvToTwo.to('#drawing1', 1, {top: 550, left: -180, scale: .6, ease: Power3.easeInOut});
    cvToTwo.to('#drawing2', 1, {top: 550, left: 73, scale: .6, ease: Power3.easeInOut}, '.25');
    cvToTwo.to('#drawing3', 1, {top: 550, left: 330, scale: .6, ease: Power3.easeInOut}, '.5');
    
    // Create scene cvScatter
    new ScrollMagic.Scene({
            duration: '70%'
        })
        .setTween(cvToTwo)
        .triggerElement($('#one')[0])
        .addTo(ctrl);
    
    // create scene navbar
    new ScrollMagic.Scene({
            duration: '10%'
        })
        .setTween(navVisable)
        .triggerElement($('#two')[0])
        .addTo(ctrl);

    
})(jQuery);