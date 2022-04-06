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
      $accounts = [...new Set($accounts)];
      alert("เปลี่ยนรหัสผ่านเรียบร้อย");
      show = !show;
      $mode = "";
      $account = "";
    } else {
      alert("รหัสผ่านใหม่ไม่ตรงกัน");
    }
  }
</script>

forgot
<br>
{#if show2}
  <input id="account_now" type="text" placeholder="username" />
  <input id="idnow" type="text" placeholder="รหัสนักศึกษา" />
  <button on:click={() => show_input()}>ยืนยัน</button>
{/if}

{#if show}

  {$account}
  <input id="new_password" type="text" placeholder="รหัสผ่านใหม่" />
  <input id="confirm_password" type="text" placeholder="ยืนยันรหัสผ่านใหม่" />
  <button on:click={() => change_password()}>ยืนยันรหัสผ่านใหม่</button>
{/if}


<style>
</style>