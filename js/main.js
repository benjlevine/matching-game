// prime variables and functions
var moves = parseInt(0);
var cardPair = [];

// shuffle cards
function shuffle() {
  var gameBoard = $('#game-cards');
  console.log('gameBoard: ' + gameBoard.html());
  var cards = gameBoard.children();
  console.log(cards);
  while (cards.length) {
      gameBoard.append( cards.splice(Math.floor(Math.random() * cards.length), 1) );
      console.log('gameBoard: ' + gameBoard.html());
      console.log(cards);
  }
  console.log('shuffled!')
}

// reset variables
function resetVars() {
  moves = parseInt(0);
  cardPair = [];
  console.log('moves reset!')
}

// end of game sequence
function winner() {
  // add border
  $('.selected').addClass('matched');
  // insert moves in congrats
  $('#number-of-moves').html(moves);
  // show congrats
  $('#gameOver').css('display', 'inherit');
  // alert includes congrats
  alert( $('#gameOver').text() );
  // reset variables
  resetVars();
}

// BEGIN
$(function() {

  // shuffle cards
  shuffle();

  // select card
  $('.cards').click(function() {

  	// flip the card
  	$(this).addClass('selected');
    // save it
    var cardType = $(this).attr('class');
    cardPair.push(cardType);
    console.log(cardPair);
    // count the up-cards
    var upCards = $('.selected').length;

  	// if it's the 2nd or 4th flip
  	if( upCards === 2 || upCards === 4 ) {
      console.log('upCards: ' + upCards);

      // add a move
      moves = moves + 1;
      console.log('moves: ' + moves);

        // and if it's the 4th flip
        if( upCards === 4 ) {
          console.log('match!');

          // winner winner chicken dinner
          winner();

        } else { // otherwise it's the 2nd flip

          // if the 1st pair matches
          if( cardPair[0] === cardPair[1] ) {
            console.log('match!');

            // add border
            $('.selected').addClass('matched');
          }

          // whether or not 1st pair matches, reset cardPair
          cardPair = [];

        } // end 2nd flip, wait for 3rd flip

      } else { // otherwise it's the 1st or 3rd flip

        // if there are no matching pairs
        if( $('.matched').length !== 2) {

          // flip back any other up cards
          $(this).siblings().removeClass('selected');
          // recount the up cards
          upCards = $('.selected').length;
          console.log('upCards: ' + upCards);
        } // this now counts as the 1st flip

      } // wait for 2nd or 4th flip

  }); // end select card

  // start button
  $('#start').click(function() {
    // reset variables
    resetVars();
    // flip all cards face down
    $('.cards').removeClass('selected matched');
    // hide congrats
    $('#gameOver').css('display', 'none');
    // shuffle cards
    shuffle();
  }); // end start button

  // reset button
  $('#reset').click(function() {
    // hide congrats
    $('#gameOver').css('display', 'none');
    // flip all cards face down
    $('.cards').removeClass('selected matched');
  }); // end reset button

}); // END
