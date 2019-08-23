
$(document).ready(function() {
	var height = $(window).height();

    $('#header').css('height', height);
	   

    var img = new Image();
    img.src = "/img/Wineman3_White-01.png";
    img.style ="width: 30rem;"
    img.class = "masthead-avatar mb-5";
    img.onload=function(){$(img).fadeIn(1000);}
    var header = document.getElementById('header');
    img.style.display="none";
    document.getElementById('avi-header').appendChild(img);


});