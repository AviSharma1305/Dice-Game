var player1 = Math.floor(Math.random() * 6) + 1;
document
  .getElementsByClassName("dice-img1")[0]
  .setAttribute("src", "assets/dice" + player1 + ".png");

var player2 = Math.floor(Math.random() * 6) + 1;
player2 = Math.floor(player2);
document
  .getElementsByClassName("dice-img2")[0]
  .setAttribute("src", "assets/dice" + player2 + ".png");

if (player1 > player2) {
  document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
} else if (player1 < player2) {
  document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
} else {
  document.querySelector("h1").innerHTML = "Its a tie!!";
}
