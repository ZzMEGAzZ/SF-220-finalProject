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

  function isadmin() {
    if ($accounts[$account].role == "admin") {
      return true;
    } else {
      return false;
    }
  }
</script>

<div>
  <h1>แก้ไขโปรไฟล์</h1>
</div>

<div id="profile">
  <img src={$accounts[$account].image} alt="img profile" />
  <div id="detail-profile">
		{#if !isadmin()} 
			<p > <b>ชื่อ</b> {$accounts[$account].name}</p>
    <p> <b>เลขประจำตัว</b> {$accounts[$account].id}</p>
    <p> <b>คณะ</b> {$accounts[$account].group}</p>
    <p> <b>ปีการศึกษา</b> {$accounts[$account].year}</p>
		
		{:else} 
			<p > <b>ชื่อ</b> {$accounts[$account].name}</p>
    <p> <b>เลขประจำตัว</b> {$accounts[$account].id}</p>
    <p> <b>สังกัด</b> {$accounts[$account].group}</p>

		{/if}
    
  </div>
</div>

<div id="btn-edit">
  <button id="button-img" on:click={() => show_input()}>เปลี่ยนรูปภาพ</button>
  {#if show}
    <input id="file" type="file" on:change={() => change_image()} />
  {/if}
  <button id="button-password" on:click={() => show_input2()}
    >เปลี่ยนรหัสผ่าน</button>
</div>

<div id="change-password">
  {#if show2}
    <input id="old_password" type="password" placeholder="รหัสผ่านเดิม" />
    <input id="new_password" type="password" placeholder="รหัสผ่านใหม่" />
    <input id="confirm_password" type="password" placeholder="ยืนยันรหัสผ่านใหม่" />
    <button on:click={() => change_password()}>ยืนยัน</button>
  {/if}
</div>

<style>
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
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
    margin: 10%;
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
    margin-top: 50px;
  }

  button {
    padding: 10px 20px;
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    outline: none;
    background-color: #d3d3d3;
    border: none;
    border-radius: 15px;
    box-shadow: 0 9px rgb(228, 228, 228);
  }

  button:hover {
    background-color: #b5b5b5;
  }

  button:active {
    background-color: #b5b5b5;
    box-shadow: 0 5px rgb(228, 228, 228);
    transform: translateY(4px);
  }

  #change-password {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
