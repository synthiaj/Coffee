var text = "";
var count= 0;
var maxspeed= 200;
var move = "";
var tagId ="";

$(document).ready(function(){

	function typeit(punch){
		var lala = $(punch);
		if (lala[0]){
			move = lala.html();
			tagId = lala;
			lala.html("");
		}

	text = move;
	type();
	}

	function character(start, end, text){
  return text.substring(start, end);
}

	function type(){
	var random = Math.floor(Math.random() * maxspeed);
	setTimeout(type, random);
	$('#box1').append(character(count, count+1, text));
	count++;
}

typeit('#box1');

});

//
 var coffeeData = new Array();
$("coffeeD").each(function(){
var coffeeD = $(this).text();
coffeeData.push(coffeeD);
});
//
