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
    console.log('newChosenNumbers: ', newChosenNumbers);
    // TODO: We need to set the chosenNumbers variable, with the value of newChosenNumbers
  };

  function play() {
    shuffleBalls();

    console.log('Chosen Numbers', chosenNumbers)

    // TODO: We want to select 3 winning balls for our lottery. 
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
    // [].slice could be the way to do it.
    winningNumbers = balls.slice(0, 3)
    console.log('Winning Numbers', winningNumbers)

    // TODO: Finally, if the user is a winner, tell them.
  };

  // These are our public methods, which we'll allow users to interact with.
  return {
    setChosenNumbers,
    play
  };
}

var lotto = Lotto();
lotto.setChosenNumbers([3,5,6]);
lotto.play();
