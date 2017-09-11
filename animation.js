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
	animateMe($('#object1'), 1000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object2'), 1000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object3'), 1000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object4'), 1000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object5'), 1000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object6'), 1000, Math.random() * $(document).width()
, 500, 1);
	animateMe($('#object7'), 1000, Math.random() * $(document).width()
, 500, 1);
});
