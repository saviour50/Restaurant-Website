

$(document).ready(function(){
    $('#section').waypoint(function(direction){
        if(direction == 'down'){
            $('nav').addClass('stickywhite');
        }else{
            $('nav').removeClass('stickywhite')
        }
    })


$('.roll').waypoint(function(direction){
	$('.roll').addClass('animated jackInTheBox');
},
{
	offset: '40%'
})

})






