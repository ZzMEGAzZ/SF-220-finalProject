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
    $mode = "forgot";
    $islogin = true;
  }
</script>

<div id='login-container'>
  <h1>Login</h1>

  <input bind:value={username} placeholder="Username" />
  <input type="password" bind:value={pin} placeholder="Password" />
  <div id='login-btn-container'>
    <button  on:click={checkLogin}>Log In</button>
    <button  on:click={forgot}>forgot password</button>
  </div>
</div>

<style>
  :global(body){
    background-color: antiquewhite;
  }
  #login-container {
    height:100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  #login-btn-container {
    display: inline;
  }

  :global(input) {
    display: flex;
    margin: 6px;
  }
</style>
