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
    <a  href="#" on:click={checkLogin}>Log In</a>
    <p> | </p>
    <a  href="#" on:click={forgot}>forgot password</a>
  </div>
</div>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Prompt&display=swap');

  :global(body){
    margin: 0;
    padding: 0;
    font-family: 'prompt',sans-serif;
    background-color: white;
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

  p{
    display: inline;
  }

  #login-btn-container {
    display: inline;
  }

  :global(input) {
    display: flex;
    margin: 6px;
  }
</style>
