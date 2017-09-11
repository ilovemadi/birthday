var animateMe = function(targetElement, speed, leftPos, opacity){
    
    $(targetElement).css({left:leftPos})
    $(targetElement).css({opacity:opacity})
    $(targetElement).css({top:"100%"})
    $(targetElement).animate(
        {
        'top': -$(document).width() + 2000,
        'opacity': 0
        }, 
        { 
        duration: speed, 
        complete: function(){
            leftPos = Math.random() * $(document).width();
            animateMe(this, speed, leftPos, 1);
            }
        }
    );
    
};
$(function(){
	animateMe($('#object1'), 5000, Math.random() * $(document).width()
, 1);
	animateMe($('#object2'), 7000, Math.random() * $(document).width()
, 1);
	animateMe($('#object3'), 4000, Math.random() * $(document).width()
, 1);
	animateMe($('#object4'), 8000, Math.random() * $(document).width()
, 1);
	animateMe($('#object5'), 6000, Math.random() * $(document).width()
, 1);
	animateMe($('#object6'), 7000, Math.random() * $(document).width()
, 1);
	animateMe($('#object7'), 6500, Math.random() * $(document).width()
, 1);
});
