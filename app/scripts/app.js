/*Contact button*/

$('#contactButton').click(function(){
	alert('Go to the footpage');
});

$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});