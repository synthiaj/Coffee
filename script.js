var text = "";
var count= 0;
var maxspeed= 200;
$(document).ready(function(){

	function typeit(punch){
	text = punch;
	type();
	}

	function character(start, end, text){
  return text.substring(start, end);
}

	function type(){
	var random = Math.floor(Math.random() * maxspeed);
	setTimeout(type, random);
	$('#box').append(character(count, count+1, text));
	count++;
}

typeit("Coffee is awesome!");

});
