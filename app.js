var int;
function rotate(){
    function next(){
        $('.arrow-next').trigger('click');
    }
    int = self.setInterval(next,5000);
}
function freeze(){
    window.clearInterval(int);
    return false;
}
function arrowNext() {
    var currentSlide = $('.active-slide');
    var nextSlide, nextDot;
    var currentDot = $('.active-dot');
    if ($('.slide').last().hasClass('active-slide')){
        nextSlide = $('.slide').first(); 
        nextDot = $('.dot').first();
    } else { 
        nextSlide = currentSlide.next();
        nextDot = currentDot.next();
    }
    currentSlide.slideUp(600).removeClass('active-slide');
    nextSlide.slideDown(600).addClass('active-slide');
    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
}
function arrowPrev() {
    var currentSlide = $('.active-slide');
    var prevSlide, prevDot;
    var currentDot = $('.active-dot');
    if ($('.slide').first().hasClass('active-slide')){
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
    } else { 
        prevSlide = currentSlide.prev();
        prevDot = currentDot.prev();
    }
    currentSlide.slideUp(600).removeClass('active-slide');
    prevSlide.slideDown(600).addClass('active-slide');
    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
}
function dropDown(){
    var currMen = $(this).siblings('.dropdown-menu');
    $('.dropdown-menu').not(currMen).hide();
    currMen.toggle();
}
var main = function(){
  $(document)
    .on('click','.dropdown-toggle',dropDown)
    .on('click','.arrow-next',arrowNext)
    .on('click','.arrow-prev',arrowPrev);
  $('.slider-dots')
    .on('click','.dot',freeze)
    .on('click','.active-dot',rotate);
  rotate();
};
var int;
function rotate(){
    function next(){
        $('.arrow-next').trigger('click');
    }
    int = self.setInterval(next,5000);
}
function freeze(){
    window.clearInterval(int);
    return false;
}
$(document).ready(main);
