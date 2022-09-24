class userUI {
  constructor() {
    this.user = document.querySelector("#usersUI");
  }
  displayUser() {
    this.user.innerHTML = `
      <h1>Confirm Players</h1>
        <div>users-container
          <div id='player-one' class="user">
            <p class='subTitle'>Player 1</p>
            <div class="user-box">
              <ul class="lists">
              <li class="lists-item">Name: </li>
              <li class="lists-item">Username: </li>
              <li class="lists-item">Followers: </li>
              <li class="lists-item">Following: </li>
              <li class="lists-item">Public Repos:</li>
              </ul>
            </div>
          </div>
          <div id='player-two' class="user">
            <p class='subTitle'>Player 2</p>
            <div class="user-box">
              <ul class="lists">
              <li class="lists-item">Name: </li>
              <li class="lists-item">Username: </li>
              <li class="lists-item">Followers: </li>
              <li class="lists-item">Following: </li>
              <li class="lists-item">Public Repos:</li>
              </ul>
            </div>
          </div>
        </div>
        <div class='battle-button'>
          <button>Initiate Battle</button>
        </div>
        <div>
          <button> Reselect Players</button>
        </div>
      `;
  }
  displayUsersResult() {
    this.profile.innerHTML = `
    <h1 class="lead">Result</h1>
        <div class="users-container">
          <div id="player-one" class="user">
            <p class="subTitle">Winner</p>
            <div class="user-box">
              <ul class="lists">
                <li class="lists-item"> <h3> Score: </h3> </li>
                <li class="lists-item"> <img src=/> </li>
                <li class="lists-item">Name: </li>
                <li class="lists-item">Username: </li>
                <li class="lists-item">Followers: </li>
                <li class="lists-item">Following: </li>
                <li class="lists-item">Public Repos:</li>
              </ul>
            </div>
          </div>
          <div id="player-two" class="user">
            <p class="subTitle">Loser</p>
            <div class="user-box">
              <ul class="lists">
              <li class="lists-item> <h3> Score: </h3></li>
                <li class="lists-item"> <img /> </li>
                <li class="lists-item">Name: </li>
                <li class="lists-item">Username: </li>
                <li class="lists-item">Followers: </li>
                <li class="lists-item">Following: </li>
                <li class="lists-item">Public Repos:</li>
              </ul>
            </div>
          </div>
        </div>
        <div class="resetGame">
          <button> Start Over </button>
        </div>
    `;
  }
}
