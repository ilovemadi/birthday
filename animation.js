var animateMe = function(targetElement, speed, leftPos, topPos, opacity){
    
    $(targetElement).css({top:topPos});
    $(targetElement).css({left:leftPos})
    $(targetElement).css({opacity:opacity})
    $(targetElement).animate(
        {
        'top': -$(document).width() + 1000,
        'opacity': "0%"
        }, 
        { 
        duration: speed, 
        complete: function(){
            leftPos = Math.random() * $(document).width();
            animateMe(this, speed, leftPos, topPos, 1);
            }
        }
    );
    
};
$(function(){
	animateMe($('#object1'), 8000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object2'), 8000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object3'), 8000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object4'), 8000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object5'), 8000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object6'), 8000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object7'), 8000, Math.random() * $(document).width()
, 500, 1);
});
