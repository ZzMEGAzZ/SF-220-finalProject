<script>
  import { islogin, mode, accounts, account } from "./stores.js";
  let show = false;
  let show2 = true;
  let account_now = "";

  function show_input() {
    let account_now = document.getElementById("account_now").value;
    let idnow = document.getElementById("idnow").value;
    $account = account_now;
    if ($accounts[$account].id == idnow) {
      show = !show;
      show2 = !show2;
    } else {
      alert("ไม่มีบัญชีนี้หรือusernameกับรหัสผ่านไม่ตรงกัน");
    }
  }
  function change_password() {
    let new_password = document.getElementById("new_password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (new_password == confirm_password) {
      $accounts[$account].password = new_password;
      alert("เปลี่ยนรหัสผ่านเรียบร้อย");
      show = !show;
      $mode = "";
      $account = "";
      $accounts = [...new Set($accounts)];
    } else {
      alert("รหัสผ่านใหม่ไม่ตรงกัน");
    }
  }

  function goback() {
    $mode = "";
  }
</script>

<div class="container">
  <box>
    <h1>ลืมรหัสผ่าน</h1>
    {#if show2}
    <div class="container-user">
      <img
        id="profile"
        src="https://cdn.discordapp.com/attachments/959342189224271872/965599246294335529/Icon-01-02.png"
        alt="profile"
      >
      <input id="account_now" type="text" placeholder="ชื่อบัญชี" />
    </div>

    <div class="container-key">
      <img
        id="key"
        src="https://cdn.discordapp.com/attachments/906605933772300349/965873596171972648/test.png"
        alt="key"
      >
      <input id="idnow" type="text" placeholder="รหัสนักศึกษา" />
    </div>
      <div class="button">
        <button on:click={() => show_input()}>ยืนยัน</button>
        <p>|</p>
        <button on:click={() => goback()}>ย้อนกลับ</button>
      </div>
    {/if}

    {#if show}
      {$account}
      <input id="new_password" type="text" placeholder="รหัสผ่านใหม่" />
      <input
        id="confirm_password"
        type="text"
        placeholder="ยืนยันรหัสผ่านใหม่"
        on:keypress={(e) => {
          if (e.key == "Enter") {
            change_password();
          }
        }}
      />
      <div class="button">
        <button on:click={() => change_password()}>ยืนยันรหัสผ่านใหม่</button>
      </div>
    {/if}
  </box>
</div>
<div id="bg" />

<style>
  #bg {
    background: linear-gradient(-45deg, #a202ff, #0671b7, #67a3d9, #c8e7f5);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;
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

  div.container {
    height: 95%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  div.button {
    display: inline-flex;
  }
  div.button button {
    margin: 0;
    border: none;
    background-color: transparent;
    color: #3a3845;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  div.button button:hover {
    color: #ff2361;
    transition: 0.1s;
  }

  box{
    width: 325px;
    height: 269px;
    border-radius: 30px;
    background-color: rgb(255, 255, 255, 0.3);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  #profile, #key{
    width: 40px;
    height: 40px;
    margin: 10px;
    opacity: 0.5;
  }

  .container-key, .container-user{
    display:flex;
    align-items: center;
  }
</style>

