function autoWin() {

  var squareContainer = document.getElementById("box"),
      squares = squareContainer.getElementsByTagName("span");

  var regex = /rgb\(.+[^;]/;
  var i;
  var oldSquareVal = null, currentSquareVal = null;

  //first check if first square is it
  styleAtt1 = squares[0].getAttribute("style");
  colorVal1 = styleAtt1.match(regex);
  
  styleAtt2 = squares[1].getAttribute("style");
  colorVal2 = styleAtt2.match(regex);

  if (colorVal1 !== colorVal2) {
    squares[0].click();
  }

  for (i = 0; i < squares.length; i++) {

    styleAtt = squares[i].getAttribute("style");
    colorVal = styleAtt.match(regex);

    currentSquareVal = colorVal[0];

    if (currentSquareVal !== oldSquareVal && oldSquareVal !== null) {
      squares[i].click();
      return;
    }

    oldSquareVal = currentSquareVal;

  }

};

setInterval(function() {
  autoWin();
}, (0));
