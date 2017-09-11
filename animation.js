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
animateMe($('#object1'), 4000, 200, 500, 1);
animateMe($('#object2'), 3000, 200, 500, 1);
