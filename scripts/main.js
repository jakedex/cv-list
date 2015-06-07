'use strict';
//
//$(function(){
//    var cvDrawing = $('#cvDrawing');
//    TweenMax.to(cvDrawing, 2, {opacity: 100});
//});
var cvStack = $('.cvStack');
TweenMax.from(cvStack, 1, {perspective: 200});

TweenMax.from('#drawing1', 1, {left: -200, top: -200, rotation: 5, rotationX: -10, rotationY: -10, rotationZ: -10, z: 50, ease: Power3.easeOut});
TweenMax.from('#drawing2', 1, {left: 300, top: 200, rotation: 2.5,rotationX: 30, rotationY: -10, rotationZ: 10, z: -100, ease: Power3.easeOut});
TweenMax.from('#drawing3', 1, {left: 500, top: -200, rotation: -5,rotationX:10, rotationY: 10, z: -100, ease: Power3.easeOut});

$('.cvStack img').mouseover(function() {
    TweenMax.to('#drawing1', .1, {z:10});
    TweenMax.to('#drawing2', .1, {});
    TweenMax.to('#drawing3', .1, {z: -10});
});

$('.cvStack img').mouseout(function() {
    TweenMax.to('#drawing1', .1, {z:0});
    TweenMax.to('#drawing2', .1, {});
    TweenMax.to('#drawing3', .1, {z:0});
});

