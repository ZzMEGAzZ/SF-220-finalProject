<script>
  import { islogin, mode, account, accounts } from "./stores.js";
  let show = false;
  let show2 = false;
  function show_input() {
    show = !show;
  }
  function change_image() {
    let file = document.getElementById("file").files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      $accounts[$account].image = reader.result;
      show = !show;
      $accounts = [...new Set($accounts)];
    };
  }
  function show_input2() {
    show2 = !show2;
  }

  function change_password() {
    let old_password = document.getElementById("old_password").value;
    let new_password = document.getElementById("new_password").value;
    let confirm_password = document.getElementById("confirm_password").value;
    if (new_password == confirm_password) {
      if (old_password == $accounts[$account].password) {
        $accounts[$account].password = new_password;
        alert("Password Changed");
        show2 = false;
        $mode = "";
        $islogin = false;
        $accounts = [...new Set($accounts)];
      } else {
        alert("รหัสผ่านเก่าไม่ถูกต้อง");
      }
    } else {
      alert("รหัสผ่านใหม่ไม่ตรงกัน");
    }
  }
</script>

  <div>
    <h1>แก้ไขโปรไฟล์</h1>
  </div>

<div id="profile">
  <box>
    <img src={$accounts[$account].image} alt="profile IMG" />
    <div id="detail-profile">
      <p><b>ชื่อ</b> {$accounts[$account].name}</p>
      <p><b>เลขประจำตัว</b> {$accounts[$account].id}</p>
      <p><b>คณะ</b> {$accounts[$account].group}</p>
      <p><b>ปีการศึกษา</b> {$accounts[$account].year}</p>
    </div>
  </box>
</div>

  <div id="btn-edit">
    <button id="button-img" on:click={() => show_input()}>เปลี่ยนรูปภาพ</button>
    {#if show}
      <input id="file" type="file" accept="image/png, image/jpeg" on:change={() => change_image()} />
    {/if}
    <button id="button-password" on:click={() => show_input2()}
      >เปลี่ยนรหัสผ่าน</button
    >
  </div>

  <div id="change-password">
    {#if show2}
      <input id="old_password" type="password" placeholder="รหัสผ่านเดิม" />
      <input id="new_password" type="password" placeholder="รหัสผ่านใหม่" />
      <input
        id="confirm_password"
        type="password"
        placeholder="ยืนยันรหัสผ่านใหม่"
      />
      <button on:click={() => change_password()}>ยืนยัน</button>
    {/if}
  </div>
  
<div id="bg" />

<style>
  #bg {
    background: linear-gradient(
      -45deg,
      #A202FF,
      #0671B7,
      #67A3D9,
      #C8E7F5 
    );
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

  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
    margin-left: 40px;
    margin-right:40px;
  }

  #profile {
    height: 50%;
    width: auto !important;

    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
    align-items: center;
  }

  #detail-profile {
    display: flex;
    flex-direction: column;
    font-weight: bold;
  }
  div {
    display: flex;
    justify-content: center;
  }
  #btn-edit button {
    margin: 10px;
  }
  h1 {
    margin-top: 30px;
  }

  button {
    margin-top: auto;
    padding: 10px 20px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 40px;
    transition-duration: 0.4s;
    cursor: pointer;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2),
      0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }

  button {
    background-color: white;
    color: black;
    border: 2px solid rgba(69, 117, 165, 1);
  }

  button:hover {
    background-color: rgb(103, 163, 217);
    color: white;
  }

  #change-password {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  box{
    display:flex;
    background-color: rgb(255, 255, 255, 0.3);
    align-items: center;
    flex-direction: row;
    width: 530px;
    height: 280px;
    border-radius:40px;
  }
</style>
