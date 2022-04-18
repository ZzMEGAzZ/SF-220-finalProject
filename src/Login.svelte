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
    document.getElementById("txt").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 1000);
  }

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
  }
</script>

<body>
  <main on:load={startTime()} />
  <header><div id="txt" /></header>
  <div id="login-container">
    <div id="box">
      <h1>Soft-fell</h1>

      <div id="profile-container">
        <img
          id="profile"
          src="https://cdn.discordapp.com/attachments/959342189224271872/965599246294335529/Icon-01-02.png"
          alt="profile"
        />
        <input bind:value={username} placeholder="ชื่อบัญชี" />
      </div>
      <div id="password-container">
        <img
          id="key"
          src="https://cdn.discordapp.com/attachments/959342189224271872/965595925873573948/Icon-02-02-01.png"
          alt="profile"
        />
        <input
          id="password"
          type="password"
          bind:value={pin}
          placeholder="รหัสผ่าน"
          on:keypress={(e) => {
            if (e.key == "Enter") {
              checkLogin();
            }
          }}
        />
      </div>
      <div id="login-btn-container">
        <button on:click={() => checkLogin()}>เข้าสู่ระบบ</button>
        <p>|</p>
        <button on:click={() => forgot()}>ลืมรหัสผ่าน</button>
      </div>
    </div>
  </div>
</body>

<style>
  body {
    background: linear-gradient(
      -45deg,
      #bedcef,
      #7ebce9,
      #4575a5,
      #1e4770,
      #112231
    );
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  #profile-container,
  #password-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #profile-container #profile,
  #password-container #key {
    width: 40px;
    height: 40px;
    margin: 10px;
    opacity: 0.5;
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

  #box {
    width: 300px;
    height: 250px;
    background-color: rgb(255, 255, 255, 0.3);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  h1 {
    color: white;
  }

  p {
    display: inline;
    color: white;
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
    color: white;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  #login-btn-container button:hover {
    color: #ff2361;
    transition: 0.1s;
  }

  #txt {
    margin-left: 27px;
    color: #ffffff;
    font-size: 20px;
  }
</style>
