var text = "";
var count= 0;
var maxspeed= 200;
$(document).ready(function(){
function type(){
	var random = Math.floor(Math.random() * maxspeed);
	setTimout(type, random);
	$('#box').append('a');
}

type();

});
