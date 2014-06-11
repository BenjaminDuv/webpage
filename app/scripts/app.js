// Common footer and header
$('#footer').load("../views/footer.html");
$('#header').load("../views/header.html");


/*Contact button*/
$('#contactButton').click(function(){
	alert('Go to the footpage');
});

// Onclik event for the links going to the foot page
$(".link").click(function(){
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 500);
    return false;
});