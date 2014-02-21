$(document).ready(function() {
    $('.social').each(function(){
        $(this)
            .hover(function(){
                $(this).stop().animate({
                    'width': $(this).width() + $(this).children('.description').width() + 13 + 'px'
                    }, 150, 'linear');
                }, function() {
                    $(this).stop().animate({'width':'30px'}, 150, 'linear');
            });
    });
});