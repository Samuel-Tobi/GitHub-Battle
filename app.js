const getStarted = document.getElementById("getStarted");
// const playerOne = document.getElementById("playerOne");
const playerOneInput = document.getElementById("playerOne-input");
// const submitPlayerOne = document.querySelector("#playerOne-form");
// const playerTwo = document.getElementById("playerTwo");

function showPlayerOne() {
  //Show player one
  const playerOne = document.getElementById("playerOne");
  playerOne.style.display = "block";
  const gettingStarted = document.getElementById("gettingStarted");
  gettingStarted.style.display = "none";
}
getStarted.addEventListener("click", showPlayerOne);

// function fetchPlayerOne() {}

// Submit Player One
const submitPlayerOne = document.querySelector("#playerOneForm");
submitPlayerOne.addEventListener("submit", (e) => {
  e.preventDefault();
  // Fetch Player One
  const playerone = document.getElementById("playerOne-input").value;
  const playeronename = playerone.split(" ").join("");
  fetch("https://api.github.com/users/" + playeronename)
    .then((result) => result.json())
    .then((data) => {
      console.log(data);
      const playerOneProfile = document.getElementById("usersUI");
      playerOneProfile.innerHTML = `
      <div class='playerOne-container'>
      <img src=${data.avatar_url}/>
      <ul class="lists">
          <li class="lists-item">Name: ${data.name}</li>
          <li class="lists-item">Username: ${data.login}</li>
          <li class="lists-item">Followers: ${data.followers}</li>
          <li class="lists-item">Following: ${data.following}</li>
          <li class="lists-item">Public Repo: ${data.public_repos}</li>
      </ul>
      </div>`;
    });

  function hidePlayerOne() {
    const playerOne = document.getElementById("playerOne");
    playerOne.style.display = "none";
  }
  setTimeout(() => {
    hidePlayerOne();
  }, 1000);

  const playerTwo = document.querySelector("#playerTwo");
  playerTwo.style.display = "block";
});

// https://api.github.com/users/username

function fetchPlayerTwo() {
  const submitPlayerTwo = document.querySelector("#playerTwoForm");
  submitPlayerTwo.addEventListener("click", (e) => {
    e.preventDefault();
    //
    console.log("working");
  });
}
