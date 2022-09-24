const getStarted = document.getElementById("getStarted");
const playerOneInput = document.getElementById("playerOne-input");
const submitInputs = document.querySelector("form");
const submitPlayerTwo = document.querySelector("#playerTwoForm");

// //Setup continue
// const continueBtn = () => {
//   const proceeds = document.querySelectorAll("button");
//   proceeds.forEach((proceed) => {
//     proceed.addEventListener("submit", fetchPlayerTwo);
//   });
// };

function showPlayerOne() {
  //Show player one
  const playerOne = document.getElementById("playerOne");
  playerOne.style.display = "block";
  const gettingStarted = document.getElementById("gettingStarted");
  gettingStarted.style.display = "none";
}
getStarted.addEventListener("click", showPlayerOne);

//Fetch Player one
function fetchPlayerOne(e) {
  e.preventDefault();

  const player = document.querySelector("input").value;
  const playerName = player.split(" ").join("");
  fetch("https://api.github.com/users/" + playerName)
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

  function hideProfile() {
    const hide = document.querySelector("#usersUI");
    hide.style.display = "none";
    const hideplayerOneSection = document.getElementById("playerOne");
    hideplayerOneSection.style.display = "none";
    const showPlayerTwoSection = document.getElementById("playerTwo");
    showPlayerTwoSection.style.display = "block";
  }
  setTimeout(() => {
    hideProfile();
  }, 1000);
}
submitInputs.addEventListener("submit", fetchPlayerOne);

// // Fetch Player Two
// function fetchPlayerTwo(e) {
//   e.preventDefault();

//   const player = document.querySelector("input").value;
//   const playerName = player.split(" ").join("");
//   fetch("https://api.github.com/users/" + playerName)
//     .then((result) => result.json())
//     .then((data) => {
//       console.log(data);
//       const playerOneProfile = document.getElementById("usersUI");
//       playerOneProfile.innerHTML = `
//       <div class='playerOne-container'>
//       <img src=${data.avatar_url}/>
//       <ul class="lists">
//           <li class="lists-item">Name: ${data.name}</li>
//           <li class="lists-item">Username: ${data.login}</li>
//           <li class="lists-item">Followers: ${data.followers}</li>
//           <li class="lists-item">Following: ${data.following}</li>
//           <li class="lists-item">Public Repo: ${data.public_repos}</li>
//       </ul>
//       </div>`;
//     });
// }
// submitPlayerTwo.addEventListener("submit", continueBtn);
