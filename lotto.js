// This method lets us call [1,2,3].shuffle and get [3,2,1]
Array.prototype.shuffle = function () {
  var m = this.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);
    [this[m], this[i]] = [this[i], this[m]];
  }
  return this;
}

// Our lotto class
function Lotto() {
  // This'll give us an array of numbers from 0 to 19.
  var balls = Array.from({length: 19}, function (v, k) { return k+1 });
  var chosenNumbers = [];
  var winningNumbers = [];

  function shuffleBalls(){
    balls.shuffle();
  };

  function setChosenNumbers(newChosenNumbers){
    chosenNumbers = newChosenNumbers;
  };

  function isUserAWinner(){
    if ( chosenNumbers.sort().join('-') == winningNumbers.sort().join('-') ){
      console.log('User is a winner');
    }
  };

  function play() {
    shuffleBalls();

    console.log('Chosen Numbers', chosenNumbers)

    // Selecting the winning numbers.
    winningNumbers = balls.slice(0, 3);
    console.log('Winning Numbers', winningNumbers)

    isUserAWinner();
  };

  // These are our public methods, which we'll allow users to interact with.
  return {
    setChosenNumbers,
    play
  };
}

var lotto = Lotto();
lotto.setChosenNumbers([1,2,3]);
lotto.play();
