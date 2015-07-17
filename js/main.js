// prime variables and functions
var moves = parseInt(0);
var cardPair = [];

// adds border to a matched pair
function addBorder() {
  $('.selected').addClass('matched');
}

// end of game sequence
function winner() {
  // add border
  addBorder();
  // insert moves in congrats message
  $('#number-of-moves').html(moves);
  // turn on congrats message
  $('#gameOver').css('display', 'inherit');
  // pop up the alert including congrats message
  alert( $('#gameOver').text() );
}

// begin
$(function() {

  // click a card
  $('.cards').click(function() {

  	// flip the card
  	$(this).addClass('selected');
    // save it
    cardPair.push( $(this).attr('class') );
    console.log('cardPair: ' + cardPair);
    // count the up-cards
    var upCards = $('.selected').length;
    console.log('upCards: ' + upCards);

  	// if it's the 2nd or 4th flip
  	if( upCards === 2 || upCards === 4 ) {

      // add a move
      moves = moves + 1;
      console.log('moves: ' + moves);

        // and if it's the 4th flip
        if( upCards === 4 ) {

          // game over
          winner();

        // otherwise it's the 2nd flip
        } else {

          // and if the 1st pair matches
          if( cardPair[0] === cardPair[1] ) {

            // add border
            addBorder();
          }

          // whether or not 1st pair matches, reset cardPair
          cardPair = [];
          console.log('cardPair reset: ' + cardPair);

        // wait for 3rd flip
        }

      // otherwise it's the 1st or 3rd flip
      } else {

        // if it's the 3rd flip and 1st pair doesn't match
        var matchedCards = $('.matched').length;
        if( upCards === 3 && matchedCards !== 2) {

          // flip back the 1st pair
          $(this).siblings().removeClass('selected');
        // this now counts as the 1st flip
        }

      // wait for 2nd or 4th flip
      }
  });
});
