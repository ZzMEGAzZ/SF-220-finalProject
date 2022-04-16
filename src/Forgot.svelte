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
  <h1>ลืมรหัสผ่าน</h1>
{#if show2}
  <input id="account_now" type="text" placeholder="ชื่อบัญชี" />
  <input id="idnow" type="text" placeholder="รหัสนักศึกษา" />
  <div class="button">
    <button on:click={() => show_input()}>ยืนยัน</button>
    <p> | </p>
	  <button on:click={() => goback()}>ย้อนกลับ</button>
	</div>
{/if}

{#if show}

  {$account}
  <input id="new_password" type="text" placeholder="รหัสผ่านใหม่" />
  <input id="confirm_password" type="text" placeholder="ยืนยันรหัสผ่านใหม่" on:keypress={(e) => {
    if (e.key == 'Enter') {
      change_password();
    }
  }} />
  <div class="button"><button on:click={() => change_password()}>ยืนยันรหัสผ่านใหม่</button></div>
{/if}
</div>

<style>
  div.container{
    height: 95%;
    width: 100%;

    display:flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
  }
  div.button{
    margin-top: 10px;
    display: inline-flex;
  }
  div.button button{
    margin: 0;
    border: none;
    background-color: transparent;
    color: #3a3845;
    font-size: 15px;
    font-weight: bold;
    cursor: pointer;
  }

  div.button button:hover{
    color: #ff2361;
    transition: 0.1s;
  }

</style>