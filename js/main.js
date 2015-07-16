//define variables (figure out what you want to keep track of)
var numMoves = 0;

$(function() {
  
  //click listener for the cards
  $('.cards').click(function() {

  	// add "selected" class to card that was clicked which will change its css
	$(this).addClass('selected');

	//conditional based on number of cards clicked

	if($('.selected').length == 2) {
		//do stuff... compare etc... 
		numMoves = numMoves + 1;
	} else {
		//console.log('ONLY selected 1 card...');
	}

  });


});