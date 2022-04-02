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
        show2 = !show2;
      } else {
        alert("รหัสผ่านเก่าไม่ถูกต้อง");
      }
    } else {
      alert("รหัสผ่านใหม่ไม่ตรงกัน");
    }
  }
</script>

editprofile
<div id="profile">
  <img src={$accounts[$account].image} />
  <button on:click={() => show_input()}>เปลี่ยนรูปภาพ</button>
  {#if show}
    <input id="file" type="file" on:change={() => change_image()} />
  {/if}

  <div id="detail-profile">
    <p><b>ชื่อ</b> {$accounts[$account].name}</p>
    <p><b>เลขประจำตัว</b> {$accounts[$account].id}</p>
    <p><b>คณะ</b> {$accounts[$account].group}</p>
    <p><b>ปีการศึกษา</b> {$accounts[$account].year}</p>
  </div>
</div>

<button on:click={() => show_input2()}>เปลี่ยนรหัสผ่าน</button>

{#if show2}
  <input id="old_password" type="text" placeholder="รหัสผ่านเดิม" />
  <input id="new_password" type="text" placeholder="รหัสผ่านใหม่" />
  <input id="confirm_password" type="text" placeholder="ยืนยันรหัสผ่านใหม่" />
  <button on:click={() => change_password()}>ยืนยัน</button>
{/if}

<style>
  img {
    width: 200px;
    height: 200px;
    border-radius: 20px;
  }

  #profile {
    height: 60%;
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
  }
</style>
