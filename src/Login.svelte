<script>
  import { accounts, account, islogin, mode } from "./stores.js";

  let username = "";
  let pin = "";

  function checkLogin() {
    if (!(username in $accounts) || $accounts[username].password != pin) {
      alert("Incorrect Account Number or PIN");
    } else {
      $islogin = true;
      $mode = "profile";
      $account = username;
      username = "";
      pin = "";
    }
  }
  function forgot() {
    $islogin = false;
    $mode = "forgot";
  }
  
</script>
<div id="login-container">
  <h1>Soft-fell</h1>

  <input bind:value={username} placeholder="Username" />
  <input type="password" bind:value={pin} placeholder="Password" />
  <div id="login-btn-container">
    <button on:click={() => checkLogin()}>Log In</button>
    <p>|</p>
    <button on:click={() => forgot()}>forgot password</button>
  </div>
</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Prompt&display=swap");

  :global(body) {
    margin: 0;
    padding: 0;
    font-family: "prompt", sans-serif;
		background-image: url("https://cdn.discordapp.com/attachments/959342189224271872/960768895021637712/BG_center_wave5.png");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center;
    background-size: cover;
  }

  #login-container {
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  p {
    display: inline;
  }

  #login-btn-container {
    display: inline;
  }

  #login-btn-container button {
    margin: 0;
    padding: 10px;
    border: none;
    border-radius: 20px;
    background-color: transparent;
    color: #3a3845;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  #login-btn-container button:hover {
    color: #ff2361;
    transition: 0.1s;
  }

  :global(input) {
    display: flex;
    margin: 6px;
  }
</style>
