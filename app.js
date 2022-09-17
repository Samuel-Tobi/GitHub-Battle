const getStarted = document.getElementById("getStarted");
// const playerOne = document.getElementById("playerOne");
const playerOneInput = document.getElementById("playerOne-input");
const submitPlayerOne = document.querySelector("#playerOne-form");
// const playerTwo = document.getElementById("playerTwo");

// const git = new Git();
// const userUI = new UserUI();

//users object
const users = {
  playerOne: "",
  playerTwo: "",
};

function showPlayerOne() {
  //Show player one
  const playerOne = document.getElementById("playerOne");
  playerOne.style.display = "block";
  const gettingStarted = document.getElementById("gettingStarted");
  gettingStarted.style.display = "none";
}
getStarted.addEventListener("click", showPlayerOne);

// function submitPlayerOne() {
//   // Submit Player One
//   const submitPlayerOne = document.querySelector("#playerOne-form");
//   submitPlayerOne.addEventListener("submit", (e) => {
//     e.preventDefault();

//     username.playerOne = playerOneInput.value.trim();

//     // Fetch Player One
//     git.getUse(username.playerOne).then((input) => {
//       users.playerOne = input.user;
//     });
//   });
// }
