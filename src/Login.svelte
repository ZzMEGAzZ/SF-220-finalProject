<script>
  import { accounts, account, islogin, mode } from "./stores.js";

  let username = "";
  let pin = "";

  function checkLogin() {
    if (!(username in $accounts) || $accounts[username].password != pin) {
      alert("ชื่อบัญชีหรือรหัสผ่านไม่ถูกต้อง");
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

  function startTime() {
        const today = new Date();
        let h = today.getHours();
        let m = today.getMinutes();
        let s = today.getSeconds();
        m = checkTime(m);
        s = checkTime(s);
        document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
        setTimeout(startTime, 1000);
      }
      
      function checkTime(i) {
        if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
        return i;
      }
</script>

<main on:load={startTime()} />
<header><div id="txt" /></header>
<div id="login-container">
  <h1>Soft-fell</h1>

  <input bind:value={username} placeholder="ชื่อบัญชี" />
  <input
    type="password"
    bind:value={pin}
    placeholder="รหัสผ่าน"
    on:keypress={(e) => {
      if (e.key == "Enter") {
        checkLogin();
      }
    }}
  />
  <div id="login-btn-container">
    <button on:click={() => checkLogin()}>เข้าสู่ระบบ</button>
    <p>|</p>
    <button on:click={() => forgot()}>ลืมรหัสผ่าน</button>
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
    height: 95%;
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

  header {
    background-color: #000000;
  }
  
  #txt {
    margin-left: 27px;
    color: #ffffff;
    font-size: 20px;
  }
</style>
